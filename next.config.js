/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove standalone output for Netlify (it uses its own runtime)
  // output: 'standalone', // Only needed for Docker deployments
  
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
  
  // Ensure API routes work on Netlify
  target: 'server',
}

module.exports = nextConfig;
