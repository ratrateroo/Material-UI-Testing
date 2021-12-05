require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
const PdfShift = require('pdfshift');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payload

app.get('/', (req, res) => {
	res.send('Welcome to the Sendgrid Emailing Server');
});

app.post('/sendemail', (req, res) => {
	//const reqbody = JSON.stringify(req.body, null, 2);
	//const parsebody = JSON.parse(req);
	console.log(req.body);
	console.log(req.body.htmlContent);
	console.log(req.body.message);
	res.status(200).send({ message: 'Send email endpoint reached.' });

	// pdfshift('your_api_key', { source: 'https://www.example.com' }).then(
	// 	(response) => {
	// 		fs.writeFileSync(
	// 			'example.com.pdf',
	// 			response.data,
	// 			'binary',
	// 			function () {}
	// 		);
	// 	}
	// );

	const pdfShift = new PdfShift(process.env.PDFSHIFT_API_KEY);
	const pdfOptions = {
		sandbox: true,
		format: 'A4',
		landscape: false,
	};
	pdfShift.convert(req.body.htmlContent, pdfOptions).then((pdfBuffer) => {
		// const pdf = {
		// 	data: pdfBuffer,
		// 	filename: 'report.pdf',
		// };
		fs.writeFile('test.pdf', pdfBuffer, 'binary', function () {
			console.log(pdfBuffer);
		});
	});

	pathToAttachment = `${__dirname}/test.pdf`;
	attachment = fs.readFileSync(pathToAttachment).toString('base64');

	const message = {
		to: 'ratrateroox@gmail.com',
		from: 'ratrateroox@gmail.com',
		subject: 'Sendgrid Email',
		text: 'Test message.',
		html: req.body.htmlContent,
		attachments: [
			{
				content: attachment,
				filename: 'attachment.pdf',
				type: 'application/pdf',
				disposition: 'attachment',
			},
		],
	};
	const sendEmail = async () => {
		await sendGridMail
			.send(message)
			.then((response) => {
				console.log(response[0].statusCode);
				console.log(response[0].headers);
			})
			.then(() => {
				console.log('Message Sent!');
			})
			.catch((error) => {
				console.log(error);
			});
	};
	sendEmail();
});

app.listen(4000, () => console.log('Running on Port 4000'));

// 202
// {
//   server: 'nginx',
//   date: 'Sun, 05 Dec 2021 11:18:57 GMT',
//   'content-length': '0',
//   connection: 'close',
//   'x-message-id': 'LV_o01cATSmOZF56dKN1fA',
//   'access-control-allow-origin': 'https://sendgrid.api-docs.io',
//   'access-control-allow-methods': 'POST',
//   'access-control-allow-headers': 'Authorization, Content-Type, On-behalf-of, x-sg-elas-acl',
//   'access-control-max-age': '600',
//   'x-no-cors-reason': 'https://sendgrid.com/docs/Classroom/Basics/API/cors.html',
//   'strict-transport-security': 'max-age=600; includeSubDomains'
// }
// Message Sent!
