require('dotenv').config();
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(process.env.SEND_GRID_API_KEY);

const message = {
	to: 'ratrateroo@gmail.com',
	from: 'ratrateroox@gmail.com',
	subject: 'Sendgrid Email',
	text: 'Test message.',
	html: '<strong>Message by Sendgrid.</strong>',
};

sendGridMail
	.send(message)
	.then(() => {
		console.log('Message Sent!');
	})
	.catch((error) => {
		console.log(error);
	});
