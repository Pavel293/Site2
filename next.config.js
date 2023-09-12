/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: false,
	images: {
		unoptimized: true,
	},
	swcMinify: true,
}

module.exports = nextConfig
