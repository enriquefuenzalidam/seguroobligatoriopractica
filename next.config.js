/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,
    //    output: 'export',
//    images: { unoptimized: true },
webpack(config, options) {
  // Disable caching temporarily
  config.cache = false;
  
  // Existing file loader rules
  config.module.rules.push({
    test: /\.(mp4|webm|ogg|swf|ogv)$/, // Include the file types you need
    use: {
      loader: 'file-loader',
      options: {
        publicPath: '/_next/static/videos',
        outputPath: 'static/videos',
        name: '[name].[hash].[ext]',
        esModule: false,
      },
    },
  });

  return config;
},
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.soapayuda.cl',
          },
        ],
        destination: 'https://soapayuda.cl/:path*',
        permanent: true, // This makes it a 301 redirect from www to non-www
      },
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'soapayuda.cl',
          },
        ],
        destination: 'https://www.soapayuda.cl/:path*',
        permanent: true, // Swap this based on your preference
      },
    ];
  },
};

module.exports = nextConfig;
