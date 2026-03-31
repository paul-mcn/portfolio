# Portfolio — Senior AWS Solutions Architect

Production-ready portfolio site built with **Next.js 15**, **Tailwind CSS**, and **AWS Amplify Gen 2**. Features a high-conversion landing page, an AI chat assistant powered by Amazon Bedrock (Claude), and a serverless contact form via SES — all secured with strict OWASP-aligned headers and Zod input validation.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, Server Actions) |
| UI | React 19 · Tailwind CSS v3 · shadcn/ui |
| Backend | AWS Amplify Gen 2 (TypeScript-first CDK) |
| Auth | Amazon Cognito (email + TOTP MFA) |
| Database | AWS AppSync + DynamoDB (contact messages) |
| AI | Amazon Bedrock — Claude 3.5 Sonnet |
| Email | Amazon SES |
| Validation | Zod (client + server) |
| Security | CSP · HSTS · X-Frame-Options · Permissions-Policy |

## Project Structure

```
portfolio/
├── amplify/
│   ├── backend.ts              # defineBackend + CDK IAM policies
│   ├── auth/resource.ts        # Cognito config
│   └── data/resource.ts        # AppSync/DynamoDB schema
├── app/
│   ├── actions/
│   │   ├── chat.ts             # Server Action → Bedrock
│   │   └── contact.ts          # Server Action → SES
│   ├── globals.css
│   ├── layout.tsx              # Root layout, Metadata API, OG tags
│   ├── page.tsx                # Landing page
│   ├── sitemap.ts              # Dynamic sitemap.xml
│   └── robots.ts
├── components/
│   ├── ui/                     # shadcn/ui primitives
│   ├── navbar.tsx
│   ├── hero-section.tsx
│   ├── services-grid.tsx
│   ├── secure-by-design.tsx    # OWASP Top 10 coverage section
│   ├── contact-section.tsx     # Form with client + server Zod validation
│   ├── chat-widget.tsx         # Floating AI chat (Sheet + Bedrock)
│   └── footer.tsx
├── lib/
│   ├── utils.ts                # cn() helper
│   └── validations.ts          # Zod schemas
├── middleware.ts               # Security headers on every response
├── amplify.yml                 # Amplify CI/CD build spec
└── components.json             # shadcn/ui config
```

## Before Running

### 1. Install dependencies

```bash
npm install
```

### 2. Set environment variables

Set these in **Amplify Console → App settings → Environment variables** for deployed environments, or in a local `.env.local` for development.

| Variable | Required | Description |
|---|---|---|
| `BEDROCK_MODEL_ID` | Yes | Bedrock model ID — e.g. `anthropic.claude-3-5-sonnet-20241022-v2:0` or `amazon.nova-lite-v1:0` |
| `CONTACT_EMAIL` | Yes | SES-verified email address used as both sender and recipient for contact form submissions |
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL for OG tags and sitemap — e.g. `https://your-app.amplifyapp.com` |
| `AWS_REGION` | Auto | Set automatically by Amplify Hosting. Defaults to `us-east-1` locally |

> **SES note:** Your `CONTACT_EMAIL` address must be verified in Amazon SES. In sandbox mode, the recipient must also be verified. Request production access to send to any address.

> **Bedrock note:** Ensure the model you choose is enabled in your AWS account via the Bedrock console → Model access.

### 3. Configure IAM permissions on the Amplify SSR compute role

The Next.js Server Actions call Bedrock and SES directly from the hosting compute environment. The compute role needs these permissions:

```json
{
  "Effect": "Allow",
  "Action": ["bedrock:InvokeModel", "bedrock:InvokeModelWithResponseStream"],
  "Resource": "arn:aws:bedrock:<region>::foundation-model/*"
}
```

```json
{
  "Effect": "Allow",
  "Action": ["ses:SendEmail", "ses:SendRawEmail"],
  "Resource": "arn:aws:ses:<region>:<account>:identity/*"
}
```

Navigate to **Amplify Console → Hosting → SSR app logs** to find the compute role ARN, then attach these policies in IAM.

> The `amplify/backend.ts` CDK definition auto-attaches these policies to the Cognito authenticated role during `ampx pipeline-deploy`. For the hosting compute role, attach manually or via your infrastructure pipeline.

### 4. Bootstrap Amplify Gen 2 sandbox (local dev)

```bash
npm run sandbox
```

This provisions a personal cloud sandbox (Cognito, AppSync, DynamoDB) using your local AWS credentials. A `amplify_outputs.json` file is generated automatically.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 6. Deploy to Amplify Hosting

1. Push your branch to the connected Git repository.
2. Amplify runs `amplify.yml` automatically — backend deploys first, then the Next.js build.
3. Set environment variables in the Amplify Console before the first deploy.

```bash
# Or trigger a manual pipeline deploy
npm run generate
```

## Security

### HTTP Security Headers (middleware.ts)

Every response includes:

| Header | Value |
|---|---|
| `Content-Security-Policy` | Strict allowlist; blocks inline execution, `frame-ancestors: 'none'` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Disables camera, microphone, geolocation, payment |
| `Cross-Origin-Opener-Policy` | `same-origin` |

### Input Validation

All user input is validated with **Zod** at two layers:
- **Client-side** — immediate field feedback before the network request
- **Server-side** — enforced in every Server Action regardless of client behaviour

Schemas live in `lib/validations.ts` and are shared between both layers.

### OWASP Top 10

All 10 risk categories are addressed at the architecture level and visualised in the **Secure by Design** section of the landing page.

## Development Scripts

```bash
npm run dev          # Next.js dev server with Turbopack
npm run build        # Production build
npm run start        # Start production server locally
npm run lint         # ESLint
npm run sandbox      # Start Amplify Gen 2 cloud sandbox
npm run generate     # Regenerate amplify_outputs.json from deployed backend
```

## Customisation Checklist

- [ ] Replace placeholder social links in `components/navbar.tsx` and `components/footer.tsx`
- [ ] Update `SITE_NAME` and `SITE_DESCRIPTION` in `app/layout.tsx`
- [ ] Add a real `public/og-image.png` (1200×630) for social sharing previews
- [ ] Add `public/favicon.ico`, `public/favicon-32x32.png`, `public/apple-touch-icon.png`
- [ ] Update stats and certifications in `components/hero-section.tsx`
- [ ] Set `NEXT_PUBLIC_SITE_URL` before deploying to replace the placeholder sitemap URL
- [ ] Update Twitter handle in `app/layout.tsx` metadata
