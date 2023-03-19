const express = require('express');

//init
const app = express();
app.use(express.json());

module.exports = app;