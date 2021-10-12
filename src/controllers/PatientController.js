const PatientService = require('../services/PatientService');

const findAllPatients = async (_req, res) => {
  try {
    const patients = await PatientService.findAllPatients();
    return res.status(200).json(patients);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({message: err.message});
  }
}
const findAllPatientsWithPlan = async (_req, res) => {
  try {
    const patients = await PatientService.findAllPatientsWithPlan();
    return res.status(200).json(patients);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({message: err.message});
  }
}

const findAllPatientsWithSurgeries = async (_req, res) => {
  try {
    const patients = await PatientService.findAllPatientsWithSurgeries();
    return res.status(200).json(patients);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({message: err.message});
  }
}

const findAllPatientsForPlanId = async (req, res) => {
  try {
    const { id } = req.params;

    const patients = await PatientService.findAllPatientsForPlanId(id);
    res.status(200).json(patients);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({message: err.message});
  }
}

const createPatient = async (req, res) => {
 try {
   const { fullName, planId } = req.body;
   const createdPatient = await PatientService.createPatient({ fullName, planId });

   res.status(201).json(createdPatient);
 } catch (err) {
    console.log(err.message);
    res.status(500).json({message: err.message});
 }
}

module.exports = {
  findAllPatientsWithPlan,
  findAllPatientsWithSurgeries,
  findAllPatientsForPlanId,
  findAllPatients,
  createPatient,
}