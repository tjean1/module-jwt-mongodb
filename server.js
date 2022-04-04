const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: './config/.env' });

const app = express();

// parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});