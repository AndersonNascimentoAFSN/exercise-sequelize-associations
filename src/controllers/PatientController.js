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

module.exports = {
  findAllPatients,
}