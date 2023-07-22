/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

	theme: {
		extend: {
			colors: {
				black: '#1A1A1A',
				primary: {
					DEFAULT: '#FF452D',
					dark: '#FE371D',
				},
				grey: {
					DEFAULT: '#4E4E4E',
					50: '#FAFAFA',
					100: '#E6E6E6',
					200: '#CCCCCC',
					300: '#B3B3B3',
					400: '#7A7A7A',
					500: '#4E4E4E',
					600: '#2E2E2E',
				},
			},
			boxShadow: {
				light: '4px 10px 20px rgba(212, 217, 232, 0.6)',
			},
		},
	},
	plugins: [],
}
