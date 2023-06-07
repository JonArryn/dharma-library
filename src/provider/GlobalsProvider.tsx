import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';

interface IProps {
	children: React.ReactNode[];
}

const GlobalsProvider = ({ children }: IProps) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default GlobalsProvider;
