const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')],

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#6f4ce1',
					'primary-focus': '#553aae',
					'primary-content': '#ffffff',
					secondary: '#744ee5',
					'secondary-focus': '#5a3cb2',
					'secondary-content': '#ffffff',
					accent: '#37cdbe',
					'accent-focus': '#2aa79b',
					'accent-content': '#ffffff',
					neutral: '#101016',
					'neutral-focus': '#2b2b3c',
					'neutral-content': '#ffffff',
					'base-100': '#ffffff',
					'base-200': '#f9fafb',
					'base-300': '#d1d5db',
					'base-content': '#ffffff',
					info: '#2094f3',
					success: '#009485',
					warning: '#ff9900',
					error: '#ff5724'
				}
			}
		]
	}
};

module.exports = config;
