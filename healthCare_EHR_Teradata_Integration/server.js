const express = require('express');
const dotenv = require('dotenv');
const utils = require('./utils');

const PORT = process.env.PORT || 5000;
// Set up Global configuration access
dotenv.config();

const app = express();

const EPIC_access_token = utils.get_access_token();
console.log(EPIC_access_token);

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} ...`);
});