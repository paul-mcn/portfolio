'use server';

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { contactFormSchema } from '@/lib/validations';

const sesClient = new SESClient({
  region: process.env.AWS_REGION ?? 'us-east-1',
});

interface ContactResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  rawData: unknown,
): Promise<ContactResult> {
  const parsed = contactFormSchema.safeParse(rawData);
  if (!parsed.success) {
    const firstError = parsed.error.errors[0];
    return {
      success: false,
      error: firstError?.message ?? 'Please check your submission and try again.',
    };
  }

  const { name, email, company, message, budget } = parsed.data;

  const contactEmail = process.env.CONTACT_EMAIL;
  if (!contactEmail) {
    console.error('[contact/action] CONTACT_EMAIL env var is not set');
    return {
      success: false,
      error: 'Contact service is temporarily unavailable. Please try again later.',
    };
  }

  const budgetLabel: Record<string, string> = {
    'under-10k': 'Under $10,000',
    '10k-50k': '$10,000 – $50,000',
    '50k-100k': '$50,000 – $100,000',
    'over-100k': 'Over $100,000',
    'not-sure': 'Not sure yet',
  };

  const htmlBody = `
<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
  <h2 style="color:#6366f1">New Portfolio Inquiry</h2>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:8px 0;font-weight:600;width:120px">Name</td><td>${name}</td></tr>
    <tr><td style="padding:8px 0;font-weight:600">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding:8px 0;font-weight:600">Company</td><td>${company ?? '—'}</td></tr>
    <tr><td style="padding:8px 0;font-weight:600">Budget</td><td>${budget ? budgetLabel[budget] : '—'}</td></tr>
  </table>
  <hr style="margin:16px 0;border-color:#e2e8f0">
  <h3 style="color:#6366f1">Message</h3>
  <p style="white-space:pre-wrap;background:#f8fafc;padding:16px;border-radius:8px">${message}</p>
  <p style="color:#94a3b8;font-size:12px">Submitted at ${new Date().toUTCString()}</p>
</body>
</html>`.trim();

  const textBody = [
    'New Portfolio Inquiry',
    '=====================',
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Company: ${company ?? '—'}`,
    `Budget:  ${budget ? budgetLabel[budget] : '—'}`,
    '',
    'Message:',
    message,
    '',
    `Submitted at: ${new Date().toUTCString()}`,
  ].join('\n');

  try {
    await sesClient.send(
      new SendEmailCommand({
        Source: contactEmail,
        Destination: { ToAddresses: [contactEmail] },
        ReplyToAddresses: [email],
        Message: {
          Subject: {
            Data: `Portfolio Inquiry from ${name}${company ? ` · ${company}` : ''}`,
            Charset: 'UTF-8',
          },
          Body: {
            Text: { Data: textBody, Charset: 'UTF-8' },
            Html: { Data: htmlBody, Charset: 'UTF-8' },
          },
        },
      }),
    );

    return { success: true };
  } catch (err) {
    console.error('[contact/action] SES error:', err);
    return {
      success: false,
      error: 'Failed to send your message. Please try again or email directly.',
    };
  }
}
