/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['invertase.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'invertase.io',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;