import ReactDOMServer from 'react-dom/server';
import HelloWorld from '../components/HelloWorld';
import BasicTable from '../components/BasicTable';
import {
	Button,
	createTheme,
	ThemeProvider,
	ServerStyleSheets,
} from '@material-ui/core';

const theme = createTheme({
	palette: {
		primary: {
			main: '#3f51b5',
		},
	},
});

function App() {
	const sheets = new ServerStyleSheets();
	const html = ReactDOMServer.renderToString(
		sheets.collect(
			<ThemeProvider theme={theme}>
				<BasicTable />
			</ThemeProvider>
		)
	);
	const cssString = sheets.toString();
	const htmlContent = `
	<!DOCTYPE html>
	<html>
	  <head>
	    <style id="jss-server-side">${cssString}</style>
	  </head>
	  <body>${html}</body>
	</html>
	`;
	// console.log(htmlContent);

	const sendEmailHandler = () => {
		console.log(html);
		fetch('/api/sendmail/sendmail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				htmlContent: htmlContent,
				message: 'hello there.',
			}),
		})
			.then((res) => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error('Failed!');
				}

				return res.json();
			})

			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<ThemeProvider theme={theme}>
			{/* <div className="App">
				<button onClick={sendEmailHandler}>Send Email</button>
			</div> */}
			<Button onClick={sendEmailHandler} variant="contained" color="primary">
				Send Email
			</Button>
		</ThemeProvider>
	);
}

export default App;
