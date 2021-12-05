import ReactDOMServer from 'react-dom/server';
import HelloWorld from './components/HelloWorld';
import './App.css';

function App() {
	const html = ReactDOMServer.renderToString(<HelloWorld />);

	const sendEmailHandler = () => {
		console.log(html);
		fetch('http://localhost:4000/sendemail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ htmlContent: html, message: 'hello there.' }),
		})
			.then((res) => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error('Failed!');
				}

				return res.json();
			})
			// .then((resData) => {
			// 	if (resData.data.login.token) {
			// 		localStorage.setItem(
			// 			'token',
			// 			JSON.stringify(resData.data.login.token)
			// 		);
			// 		console.log(resData.data.login.token);
			// 		auth.login(
			// 			resData.data.login.token,
			// 			resData.data.login.userId,
			// 			resData.data.login.tokenExpiration,
			// 			() => {
			// 				navigate(from, { replace: true });
			// 			}
			// 		);
			// 	}
			// })
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
