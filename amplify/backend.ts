import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { Stack } from 'aws-cdk-lib';
import { Effect, Policy, PolicyStatement } from 'aws-cdk-lib/aws-iam';

/**
 * Amplify Gen 2 backend — TypeScript-first infrastructure definition.
 *
 * Required environment variables (set in Amplify Console → Environment variables):
 *   BEDROCK_MODEL_ID  — e.g. anthropic.claude-3-5-sonnet-20241022-v2:0
 *   CONTACT_EMAIL     — SES-verified sender/recipient address
 *   AWS_REGION        — e.g. us-east-1 (auto-set by Amplify)
 *
 * IAM note: The Amplify SSR compute role must have:
 *   bedrock:InvokeModel  on  arn:aws:bedrock:<region>::foundation-model/*
 *   ses:SendEmail        on  arn:aws:ses:<region>:<account>:identity/<email>
 * The policy below is attached automatically during `ampx pipeline-deploy`.
 */
export const backend = defineBackend({ auth, data });

// ─── Custom IAM: Bedrock + SES access for the SSR compute role ────────────────

const { cfnUserPool } = backend.auth.resources.cfnResources;
const customStack = backend.createStack('PortfolioComputePermissions');

// Bedrock — allow invoking any foundation model in the account region
const bedrockPolicy = new Policy(customStack, 'BedrockInvokePolicy', {
  statements: [
    new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['bedrock:InvokeModel', 'bedrock:InvokeModelWithResponseStream'],
      resources: [
        `arn:aws:bedrock:${Stack.of(customStack).region}::foundation-model/*`,
      ],
    }),
  ],
});

// SES — allow sending email from the verified CONTACT_EMAIL identity
const sesPolicy = new Policy(customStack, 'SESSendPolicy', {
  statements: [
    new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['ses:SendEmail', 'ses:SendRawEmail'],
      resources: [
        `arn:aws:ses:${Stack.of(customStack).region}:${Stack.of(customStack).account}:identity/*`,
      ],
    }),
  ],
});

// Attach to the authenticated Cognito IAM role (also used by the SSR compute
// role when you configure it in the Amplify Hosting settings).
backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(bedrockPolicy);
backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(sesPolicy);

// ─── Amplify Outputs ──────────────────────────────────────────────────────────
// Expose non-secret config to the frontend via amplify_outputs.json
backend.addOutput({
  custom: {
    bedrockModelId:
      process.env.BEDROCK_MODEL_ID ??
      'anthropic.claude-3-5-sonnet-20241022-v2:0',
    awsRegion: process.env.AWS_REGION ?? 'us-east-1',
  },
});
