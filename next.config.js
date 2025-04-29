/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [],
      unoptimized: true, // <-- ADD THIS
    },
  };
  
  module.exports = nextConfig;
  