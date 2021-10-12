require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');

const route = require('../routes');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', route.PatientRoutes);

module.exports = app;
