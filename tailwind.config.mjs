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
				"background-dark": "#1A1A1A", // Deep Charcoal (Fixed from Blue-ish)
				"surface-light": "#FFFFFF",
				"surface-dark": "#252525", // Updated for DS
				"surface-card": "#2A2A2A", // Added for Cards
				"text-light": "#1F2937",
				"text-dark": "#FFFFFF", // High Contrast White
				"muted-light": "#6B7280",
				"muted-dark": "#9CA3AF",
				"border-dark": "#333333", // Added for borders
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
