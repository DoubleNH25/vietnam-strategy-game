/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable static exports for Vercel deployment
  output: 'export',
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig