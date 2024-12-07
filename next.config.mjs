/** @type {import('next').NextConfig} */
const nextConfig = {

    poweredByHeader: false,
    reactStrictMode: true,
   output: 'export',
   webpack(config, options) {
    // Disable caching temporarily
    config.cache = false;
  return config;
},
};

export default nextConfig;
