/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.exportPath || '',
  assetPrefix: process.env.exportPath ? `${process.env.exportPath}/` : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
