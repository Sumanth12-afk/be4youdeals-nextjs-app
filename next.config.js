/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  output: 'export',
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    domains: [
      'm.media-amazon.com',
      'images-na.ssl-images-amazon.com',
      'images.amazon.com'
    ],
  },
}

module.exports = nextConfig
