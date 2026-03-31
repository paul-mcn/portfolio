import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.amazonaws.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  // Amplify Gen 2 SSR — do NOT set output: 'export'
  // Security: disallow powered-by header
  poweredByHeader: false,
};

export default nextConfig;
