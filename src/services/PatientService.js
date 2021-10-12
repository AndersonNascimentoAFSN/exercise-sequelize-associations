const { Patient, Plan } = require('../models');

const findAllPatients = async () => {
  // const patients = await Patient.findAll();
  // const patients = await Patient.findAll({
  //   include: [{ model: Plan, as: 'plans', attributes: { exclude: 'plan_id'}}],
  // });
  const patients = await Patient.findAll({
    include: { model: Plan, as: 'plans' } 
  });

  return patients;
}

module.exports = {
  findAllPatients,
}