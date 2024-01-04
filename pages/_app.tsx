import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Head from "next/head";
import {Meta} from "next/dist/lib/metadata/generate/meta";

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const App = ({Component, pageProps}: AppProps) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline/>
			<Head>
				<Meta name={"viewport"} content={"height=device-height, width=device-width, initial-scale=1.0"}/>
				<Meta name={'title'} content={'XeoSmartHome'}/>
				<Meta name={'description'} content={'XeoSmartHome an IoT management platform'}/>
				<link rel="shortcut icon" href="/logo/xeo_vectorial_logo.svg"/>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
