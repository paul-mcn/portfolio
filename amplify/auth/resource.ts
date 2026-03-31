import { defineAuth } from '@aws-amplify/backend';

/**
 * Cognito User Pool — scoped for portfolio admin access only.
 * Public visitors interact via Server Actions; auth gates the admin dashboard
 * if you choose to add one later.
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    givenName: { required: false, mutable: true },
    familyName: { required: false, mutable: true },
  },
  passwordPolicy: {
    minLength: 12,
    requireDigits: true,
    requireLowercase: true,
    requireUppercase: true,
    requireSymbols: true,
  },
  multiFactor: {
    mode: 'OPTIONAL',
    totp: true,
  },
  accountRecovery: 'EMAIL_ONLY',
});
