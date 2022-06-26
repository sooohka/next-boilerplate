/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * @param {import('webpack').Configuration} config
   */
  webpack: (config, context) => {
    return config;
  },
};

module.exports = nextConfig;
