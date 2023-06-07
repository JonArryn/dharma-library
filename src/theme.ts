import { ThemeOptions, createTheme } from '@mui/material/styles';

export const darkTheme: ThemeOptions = {
	palette: {
		mode: 'dark',

		primary: {
			main: '#BDC8F0',
		},
		secondary: {
			main: '#9b70fd',
		},
		background: {
			default: '#111936',
			paper: '#21294f',
		},
		text: {
			primary: '#bdc8f0',
			secondary: 'rgba(189,200,240,0.7)',
			disabled: 'rgba(189,200,240,0.5)',
		},
		error: {
			main: '#ff54b0',
		},
		warning: {
			main: '#31d8d8',
		},
	},
	typography: {
		fontFamily: '"Ubuntu", "Helvetica", "Arial", sans-serif',
	},
};

const theme = createTheme({
	...darkTheme,
});

export { theme as default };
