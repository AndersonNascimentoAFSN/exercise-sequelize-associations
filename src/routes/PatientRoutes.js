const express = require('express');

const route = express.Router();

const PatientController = require('../controllers/PatientController');

route.get('/', PatientController.findAllPatients);
route.get('/plans', PatientController.findAllPatientsWithPlan);
route.get('/surgeries', PatientController.findAllPatientsWithSurgeries);
route.get('/plans/:id', PatientController.findAllPatientsForPlanId);

module.exports = route;