/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker (Netlify plugin will handle this automatically)
  output: 'standalone',
  
  // Enable image optimization
  images: {
    domains: [
      'm.media-amazon.com',
      'images-na.ssl-images-amazon.com',
      'images.amazon.com'
    ],
  },
  
  // Compress images and optimize bundle
  compress: true,
  
  // Enable SWC minification
  swcMinify: true,
}

module.exports = nextConfig;
