/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#FFC107", // Vibrant Yellow/Gold
				"primary-hover": "#e0a800",
				"background-light": "#F3F4F6", // Light gray for light mode
				"background-dark": "#1A1E23", // Deep charcoal/navy for dark mode
				"surface-light": "#FFFFFF",
				"surface-dark": "#242930",
				"text-light": "#1F2937",
				"text-dark": "#E5E7EB",
				"muted-light": "#6B7280",
				"muted-dark": "#9CA3AF",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				display: ["Poppins", "sans-serif"],
			},
			borderRadius: {
				DEFAULT: "0.5rem",
				'xl': '1rem',
				'2xl': '1.5rem',
			},
		},
	},
	plugins: [],
}
