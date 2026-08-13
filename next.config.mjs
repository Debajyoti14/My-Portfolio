/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Project screenshots are local, committed PNGs — no remote loaders needed.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
