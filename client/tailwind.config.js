/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				inter: ["'Inter'", "sans-serif"],
				gelasio: ["'Gelasio'", "serif"],
			},
		},
		colors: {
			"white": "#FFFFFF",
			"black": "#242424",
			"grey": "#F3F3F3",
			"dark-grey": "#6B6B6B",
			"red": "#FF4E4E",
			"transparent": "transparent",
			"twitter": "#1DA1F2",
			"purple": "#8B46FF",
			"light-grey": "#4e5157",
			
		},

		fontSize: {
			"sm": "12px",
			"base": "14px",
			"xl": "16px",
			"2xl": "20px",
			"3xl": "28px",
			"4xl": "38px",
			"5xl": "50px",
		},
	},

	plugins: [],
};
