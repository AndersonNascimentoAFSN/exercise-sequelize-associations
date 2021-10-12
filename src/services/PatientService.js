const { Patient, Plan, Surgery } = require('../models');

const findAllPatients = async () => {
  const patients = await Patient.findAll();
  return patients;
}
const findAllPatientsWithPlan = async () => {
  const patients = await Patient.findAll({
    include: [{ model: Plan, as: 'plan', attributes: { exclude: 'planId' } }],
  });
  // const patients = await Patient.findAll({
  //   include: { model: Plan, as: 'plan' } 
  // });

  return patients;
}

const findAllPatientsWithSurgeries = async () => {
  const patients = await Patient.findAll({
    include: [{ model: Surgery, as: 'surgeries', through: { attributes: [] } }],
  });

  return patients;
}

const findAllPatientsForPlanId = async (id) => {
  const patients = await Plan.findOne({
    where: { planId: id },
    include: [{ model: Patient, as: 'patients' }],
  });

  return patients;
}

const createPatient = async (newPatientData) => {
  const createdPatient = await Patient.create(newPatientData);
  return createdPatient;
}

module.exports = {
  findAllPatientsWithPlan,
  findAllPatientsWithSurgeries,
  findAllPatientsForPlanId,
  findAllPatients,
  createPatient,
}