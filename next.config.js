const { codeInspectorPlugin } = require('code-inspector-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  turbopack: {
    rules: codeInspectorPlugin({
      bundler: 'turbopack',
    }),
  },
};

module.exports = nextConfig;
