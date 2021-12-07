require('dotenv').config();


const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
const PdfShift = require('pdfshift');
const fs = require('fs');

import fs from 'fs'

const sendmail = async (req, res) => {
	console.log(req.body);
	console.log(req.body.htmlContent);
	console.log(req.body.message);
	res.status(200).send({ message: 'Send email endpoint reached.' });
};

export default sendmail;
