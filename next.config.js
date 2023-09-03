/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/porfolio-next',
    assetPrefix: '/porfolio-next/',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
