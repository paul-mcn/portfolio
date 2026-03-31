import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * AppSync data model — stores contact form submissions in DynamoDB
 * so you have a persistent record alongside the SES email.
 *
 * Authorization: public API key write-only (no reads without auth).
 */
const schema = a.schema({
  ContactMessage: a
    .model({
      name: a.string().required(),
      email: a.email().required(),
      company: a.string(),
      budget: a.string(),
      message: a.string().required(),
    })
    .authorization((allow) => [
      // Anyone can submit; only authenticated admins can read
      allow.publicApiKey().to(['create']),
      allow.authenticated().to(['read', 'list']),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});
