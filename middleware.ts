import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Security middleware — sets strict HTTP security headers on every response.
 * Implements OWASP recommended headers per:
 * https://owasp.org/www-project-secure-headers/
 */

const SELF = "'self'";
const UNSAFE_INLINE = "'unsafe-inline'";

function buildCSP(): string {
  const directives: Record<string, string[]> = {
    'default-src': [SELF],
    // Next.js requires unsafe-inline for its inline scripts; nonce-based CSP
    // can be layered on top for stricter enforcement in high-security contexts.
    'script-src': [
      SELF,
      UNSAFE_INLINE,
      "'unsafe-eval'", // Required for Next.js dev; remove in strict prod with nonces
      'https://www.googletagmanager.com',
    ],
    'style-src': [SELF, UNSAFE_INLINE, 'https://fonts.googleapis.com'],
    'font-src': [SELF, 'data:', 'https://fonts.gstatic.com'],
    'img-src': [
      SELF,
      'data:',
      'blob:',
      'https://*.amazonaws.com',
      'https://images.unsplash.com',
    ],
    'connect-src': [
      SELF,
      'https://*.amazonaws.com',
      'https://*.amplifyapp.com',
      'https://cognito-idp.*.amazonaws.com',
      'https://bedrock.*.amazonaws.com',
    ],
    'media-src': [SELF],
    'frame-src': ["'none'"],
    'frame-ancestors': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': [SELF],
    'form-action': [SELF],
    'manifest-src': [SELF],
    'upgrade-insecure-requests': [],
    'block-all-mixed-content': [],
  };

  return Object.entries(directives)
    .map(([key, values]) =>
      values.length ? `${key} ${values.join(' ')}` : key,
    )
    .join('; ');
}

export function middleware(request: NextRequest): NextResponse {
  const response = NextResponse.next();

  // Content Security Policy
  response.headers.set('Content-Security-Policy', buildCSP());

  // HSTS — 2 years, include subdomains, preload-ready
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload',
  );

  // Clickjacking protection
  response.headers.set('X-Frame-Options', 'DENY');

  // Prevent MIME-type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Referrer leakage control
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Disable browser APIs not needed on a portfolio site
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()',
  );

  // Legacy XSS filter (belt-and-suspenders)
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Cross-origin isolation
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-site');

  return response;
}

export const config = {
  // Apply to all routes except static assets and Next.js internals
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)$).*)'],
};
