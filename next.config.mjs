/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 30, // Cache images for 30 days
  },
};

export default nextConfig;
