const express = require('express');

const route = express.Router();

const PatientController = require('../controllers/PatientController');

route.get('/', PatientController.findAllPatients);

module.exports = route;