/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			// colors: {
			// light: {

			// },
			// dark: {

			// }
			// },
			animation: {
				orbit: 'orbit calc(var(--duration)*1s) linear infinite',
				marquee: 'marquee var(--duration) linear infinite',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
			},
			keyframes: {
				orbit: {
					'0%': {
						transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
					}
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				}
			}
		}
	},

	daisyui: {
		themes: [
			{
				light: {
					primary: '#000',
					accent: '#fff',
					secondary: '#dad7cd'
				}
			},
			{
				dark: {
					accent: '#000',
					primary: '#bc6c25'
				}
			},
			'cupcake',
			'retro'
		]
	},

	plugins: [require('daisyui')]
};
