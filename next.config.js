/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    unoptimized : true
  },
  experimental: {
    appDir: false,
    largePageDataBytes: 512 * 100000,
  },
  
  
  
}





module.exports = nextConfig
