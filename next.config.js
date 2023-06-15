/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    url: 'http://localhost:3000'
  },
  experimental: {
    appDir: true,
    serverActions: true,
  },
}

module.exports = nextConfig
