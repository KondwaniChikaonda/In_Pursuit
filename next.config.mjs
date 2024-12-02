/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        // Exclude 'canvas' from the server build
        config.externals = [...(config.externals || []), 'canvas'];
      } else {
        // Provide fallback for client-side usage
        config.resolve.fallback = {
          ...(config.resolve.fallback || {}),
          canvas: false,
        };
      }
      return config;
    },
  };
  
  export default nextConfig;
  