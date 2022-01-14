require('dotenv').config();
import sendGridMail from '@sendgrid/mail';
import PdfShift from 'pdfshift';
import fs from 'fs';
import path from 'path';
import getConfig from 'next/config';
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
const { serverRuntimeConfig } = getConfig();

const sendmail = async (req, res) => {
	//send email
	const pdfShift = new PdfShift(process.env.PDFSHIFT_API_KEY);
	const pdfOptions = {
		sandbox: true,
		format: 'A4',
		landscape: false,
		encode: true,
	};
	//convert html to pdf
	await pdfShift
		.convert(req.body.htmlContent, pdfOptions)
		.then((pdfBuffer) => {
			// fs.writeFile('test.pdf', pdfBuffer, 'binary', function () {
			// 	console.log(pdfBuffer);
			// });
			console.log(pdfBuffer.toString());
			const message = {
				to: 'ratrateroox@gmail.com',
				from: 'ratrateroox@gmail.com',
				subject: 'Sendgrid Email',
				text: 'Test message.',
				html: req.body.htmlContent,
				attachments: [
					{
						content: pdfBuffer.toString(),
						filename: 'test.pdf',
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

	const pathToAttachment = path.join(
		serverRuntimeConfig.PROJECT_ROOT,
		'./test.pdf'
	);
	console.log(pathToAttachment);

	const attachment = await fs
		.readFileSync(pathToAttachment)
		.toString('base64');
	console.log(attachment);
	const message = {
		to: 'ratrateroox@gmail.com',
		from: 'ratrateroox@gmail.com',
		subject: 'Sendgrid Email',
		text: 'Test message.',
		html: req.body.htmlContent,
		attachments: [
			{
				content: attachment,
				filename: 'test.pdf',
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
	//sendEmail();

	res.status(200).send({
		message: 'Send email endpoint reached.',
	});
};

export default sendmail;
