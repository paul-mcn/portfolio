const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-roboto)", ...fontFamily.sans],
			},
			transitionTimingFunction: {
				"in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
				"out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
			},
			animation: {
				"swipe-in": "swipe-in 0.5s",
			},
			keyframes: {
				"swipe-in": {
					"0%": { scale: "0.95", opacity: 0, transform: "translate(50px)" },
					"100%": { scale: "1", opacity: 100, transform: "translate(0)" },
				},
			},
		},
	},
	plugins: [],
};
