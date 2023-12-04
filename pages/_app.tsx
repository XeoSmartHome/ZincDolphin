import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const App = ({Component, pageProps}: AppProps) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline/>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
