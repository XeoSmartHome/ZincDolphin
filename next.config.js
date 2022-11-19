/** @type {import('next').NextConfig} */
import {withImages} from 'next-images';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = withImages(nextConfig)
