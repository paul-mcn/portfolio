# Deployment Guide — AWS Amplify Gen 2

This project is a Next.js 15 (SSR) app backed by Amplify Gen 2 (Cognito, AppSync, DynamoDB) with Bedrock and SES integrations.

---

## Prerequisites

- AWS account with Amplify, Bedrock, and SES access
- Git repo hosted on GitHub, GitLab, Bitbucket, or CodeCommit
- SES email identity verified (see step 3)

---

## Steps

### 1. Push code to your Git provider

```bash
git add -A
git commit -m "initial portfolio"
git remote add origin <your-repo-url>
git push -u origin main
```

---

### 2. Create the Amplify app

1. Go to **AWS Amplify Console** → **Create new app**
2. Connect your Git provider and select your repo + `main` branch
3. Amplify will auto-detect `amplify.yml` — no changes needed
4. Confirm **SSR** is enabled (Next.js is detected automatically)
5. Complete the setup and start the first deploy

---

### 3. Verify your SES email identity

The `CONTACT_EMAIL` address must be verified in SES before the contact form can send emails.

```
AWS Console → SES → Verified identities → Create identity → Email address
```

Confirm the verification email AWS sends you.

> **SES sandbox:** By default AWS accounts are in sandbox mode, meaning you can only send *to* verified addresses. To send to anyone, request SES production access via the console.

---

### 4. Set environment variables

In **Amplify Console → App settings → Environment variables**, add:

| Variable | Value |
|---|---|
| `BEDROCK_MODEL_ID` | `anthropic.claude-3-5-sonnet-20241022-v2:0` |
| `CONTACT_EMAIL` | your SES-verified email address |

`AWS_REGION` and `AWS_APP_ID` are injected automatically by Amplify.

---

### 5. Attach policies to the SSR compute role

Next.js Server Actions run under Amplify's **SSR compute role**, which is separate from the Cognito authenticated role. After the first successful deploy, attach Bedrock and SES permissions to it manually:

1. Go to **Amplify Console → App → Hosting → SSR compute role** and copy the role name
2. Open **IAM → Roles** and find that role
3. Attach an inline policy with the following:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "BedrockInvoke",
      "Effect": "Allow",
      "Action": [
        "bedrock:InvokeModel",
        "bedrock:InvokeModelWithResponseStream"
      ],
      "Resource": "arn:aws:bedrock:<region>::foundation-model/*"
    },
    {
      "Sid": "SESSend",
      "Effect": "Allow",
      "Action": [
        "ses:SendEmail",
        "ses:SendRawEmail"
      ],
      "Resource": "arn:aws:ses:<region>:<account-id>:identity/*"
    }
  ]
}
```

Replace `<region>` and `<account-id>` with your values.

---

## Redeployment

Every push to `main` triggers a full deploy automatically. The `amplify.yml` runs:

- **Backend:** `ampx pipeline-deploy` — deploys Cognito, AppSync, and DynamoDB via CDK
- **Frontend:** `next build` — builds the SSR app

No manual steps needed for subsequent deploys.

---

## Local development

```bash
# Start the Amplify sandbox (deploys a personal cloud backend)
npm run sandbox

# Generate amplify_outputs.json from a deployed branch
AMPLIFY_APP_ID=<app-id> npm run generate

# Start the dev server
npm run dev
```

---

## Deploy order summary

```
1. Verify SES email identity
2. Push code to Git
3. Connect repo in Amplify Console (enable SSR)
4. Set BEDROCK_MODEL_ID and CONTACT_EMAIL env vars
5. Run first deploy
6. Attach Bedrock + SES inline policy to the SSR compute role in IAM
```
