require('dotenv').config();
console.log(process.env.PDFSHIFT_API_KEY);

const express = require('express');

const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payload

const port = 3001;

app.use(cors());
app.listen(port, () => {
	console.log('We are live on port 3001');
});
app.get('/', (req, res) => {
	res.send('Welcome to my api');
});
