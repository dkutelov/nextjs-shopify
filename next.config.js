const { withFrameworkConfig } = require('./framework/common/config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  framework: {
    name: 'shopify_local',
  },
  i18n: {
    locales: ['en-US', 'bg'],
    defaultLocale: 'en-US',
  },
  reactStrictMode: true,
};

module.exports = withFrameworkConfig(nextConfig);

//console.log('next.config.js', JSON.stringify(module.exports, null, 2));
