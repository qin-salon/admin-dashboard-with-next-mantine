/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: { dirs: ["./src"] },
};

export default nextConfig;
