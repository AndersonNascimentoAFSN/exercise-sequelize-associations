const PatientService = require('../services/PatientService');

const findAllPatientsWithPlan = async (_req, res) => {
  try {
    const patients = await PatientService.findAllPatientsWithPlan();
    return res.status(200).json(patients);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({message: err.message});
  }
}

module.exports = {
  findAllPatientsWithPlan,
}