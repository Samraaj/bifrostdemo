module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./sections/**/*.{js,ts,jsx,tsx}',
		'./public/**/*.{html, js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			xs: '320px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				Benne: ['Benne'],
				Besley: ['Besley'],
				Bayon: ['Bayon'],
				BarlowCondensed: ['Barlow Condensed'],
				LexendDeca: ['Lexend Deca'],
				LexendTera: ['Lexend Tera'],
				Inter: ['Inter'],
				SatoshiVariable: ['Satoshi Variable'],
				PublicSans: ['Public Sans'],
				Bevan: ['Bevan'],
			},
		},
	},
	plugins: [],
};
