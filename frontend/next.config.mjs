// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
module.exports = {
    async headers() {
      return [
        {
          source: "/(.*)", // Apply to all routes
          headers: [
            {
              key: "Cross-Origin-Opener-Policy",
              value: "same-origin", // Ensures same-origin policy for security
            },
            {
              key: "Cross-Origin-Embedder-Policy",
              value: "require-corp", // Optional, use only if embedding cross-origin resources is necessary
            },
          ],
        },
      ];
    },
  };
  