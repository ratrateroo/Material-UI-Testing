import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import PdfShift from 'pdfshift';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import fs from 'fs';

import { ComponentToPrint } from './ComponentToPrint';
import './App.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ComplexGrid from './ComplexGrid';
import CenteredGrid from './CenteredGrid';
import Payroll from './Payroll';

import { makeStyles } from '@material-ui/core/styles';
import MyDocument from './MyDocument';

//mailgun
import formData from 'form-data';
import Mailgun from 'mailgun.js';
require('dotenv').config();
const mailgun = new Mailgun(formData);

const pdfShift = new PdfShift(process.env.PDFSHIFT_API_KEY);

const useStyles = makeStyles((theme) => ({}));

const API_KEY = process.env.API_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const DOMAIN = process.env.DOMAIN;

const mailgunClient = mailgun.client({
	username: 'api',
	key: API_KEY,
	public_key: PUBLIC_KEY,
});

function App() {
	const sendHandler = () => {
		const messageData = {
			from: 'ratrateroox@gmail.com',
			to: 'ratrateroox@gmail.com',
			subject: 'Hello',
			text: 'Testing some Mailgun awesomeness!',
		};

		mailgunClient.messages
			.create(DOMAIN, messageData)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	};
	const sendEmailHandler = () => {
		const sheets = new ServerStyleSheets();
		const html = ReactDOMServer.renderToString(
			sheets.collect(
				<ThemeProvider theme={null}>
					<Payroll />
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

		const pdfOptions = {
			sandbox: true,
			format: 'A4',
			landscape: false,
		};

		pdfShift.convert(htmlContent, pdfOptions).then((pdfBuffer) => {
			const pdf = {
				data: pdfBuffer,
				filename: 'report.pdf',
			};
			fs.writeFile('example.com.pdf', pdfBuffer.data);
			console.log(pdfBuffer);
			// const attachment = new mailgunClient.Attachment({
			// 	data: pdfBuffer,
			// 	filename: 'report.pdf',
			// });
			const email = {
				from: 'ratrateroox@gmail.com',
				to: 'ratrateroox@gmail.com',
				subject: 'Hello',
				text: 'Testing some Mailgun awesomeness!',
				html: htmlContent,
				attachment: [pdf],
			};
			return mailgunClient.messages
				.create(DOMAIN, email)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.error(err);
				});
			//return mailgunClient.messages().send(email);
		});
	};
	const classes = useStyles();
	const componentRef = useRef();
	return (
		// <Box>
		// 	{/* <CenteredGrid />
		// 		<ComplexGrid /> */}
		// 	<Container>
		// 		<MyDocument />
		// 	</Container>
		// </Box>
		<div>
			<ReactToPrint
				trigger={() => <button>Print this out!</button>}
				content={() => componentRef.current}
			/>
			<div style={{ display: 'none' }}>
				<ComponentToPrint ref={componentRef} />
			</div>
			<button onClick={sendEmailHandler}>Send Email</button>
			<button onClick={sendHandler}>Send</button>
		</div>
	);
}

export default App;
