/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			colors: {
				customMagenta: '#502050',
				customPink: '#ee68a4',
				customGrayishMagenta: '#937b92',
				customLightMagenta: '#f7f2f7',
			},
			fontFamily: {
				leagueSpartan: ['League Spartan', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
