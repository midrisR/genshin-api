module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': {
						transform: 'translateY(-10%)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: ' translateY(0)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
					},
				},
			},
			animation: {
				wiggle: 'wiggle 10s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
