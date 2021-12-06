import ReactDOMServer from 'react-dom/server';
import HelloWorld from './components/HelloWorld';
import './App.css';

function App() {
	const html = ReactDOMServer.renderToString(<HelloWorld />);
	const htmlContent = `
	<!DOCTYPE html>
	<html>
	  <head>
	    
	  </head>
	  <body>${html}</body>
	</html>
	`;

	const sendEmailHandler = () => {
		console.log(html);
		fetch('http://localhost:4000/sendemail', {
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
		<div className="App">
			<button onClick={sendEmailHandler}>Send Email</button>
		</div>
	);
}

export default App;
