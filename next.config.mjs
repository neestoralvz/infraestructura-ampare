import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config, { dev, isServer }) => {
    // Add the existing webpack configuration
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    // Add the new configuration to suppress Fast Refresh logs
    if (dev && !isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        if (entries['main.js'] && !entries['main.js'].includes('./client/dev-error-overlay')) {
          entries['main.js'].unshift('./client/dev-error-overlay');
        }
        return entries;
      };
    }

    return config;
  },
};

export default withMDX(nextConfig);
