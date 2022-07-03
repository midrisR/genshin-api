/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['bbs.hoyolab.com'],
	},
	env: {
		url: 'https://backend-api-genshin.herokuapp.com/characters/',
		material: 'https://backend-api-genshin.herokuapp.com/material/find/',
	},
};

module.exports = nextConfig;
