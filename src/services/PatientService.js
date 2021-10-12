const { Patient, Plan } = require('../models');

const findAllPatientsWithPlan = async () => {
  // const patients = await Patient.findAll();
  const patients = await Patient.findAll({
    include: [{ model: Plan, as: 'plan', attributes: { exclude: 'planId'}}],
  });
  // const patients = await Patient.findAll({
  //   include: { model: Plan, as: 'plan' } 
  // });

  return patients;
}

module.exports = {
  findAllPatientsWithPlan,
}