const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}"],
	darkMode: 'class',

	theme: {
		extend: {}
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require("@brainandbones/skeleton/tailwind/theme.cjs"),
		require("tailwind-heropatterns")({
			variants: [],
			patterns: ["polka-dots", "topography"],
			colors: {
			  default: "#9C92AC"
			},
			opacity: {
			  default: "0.3"
			}
		})
	]
};

module.exports = config;
