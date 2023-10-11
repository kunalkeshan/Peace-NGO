/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'free4kwallpapers.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**'
            }
        ],
    },
}

module.exports = nextConfig
