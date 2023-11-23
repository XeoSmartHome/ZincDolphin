/** @type {import('next').NextConfig} */
// import {withImages} from 'next-images';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
