/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--bg)',
				card: 'var(--card)',
				border: 'var(--border)',
				text: 'var(--text)',
				muted: 'var(--muted)',
				danger: 'var(--danger)',
				accent: 'var(--accent)',
			},
		},
	},
	plugins: [],
}
