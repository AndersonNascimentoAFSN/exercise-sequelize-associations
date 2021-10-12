'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientSurgery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Surgery.belongsToMany(models.Patient, {
        as: 'patients',
        through: PatientSurgery,
        foreignKey: 'surgery_id',
        otherKey: 'patient_id'
      });

      models.Patient.belongsToMany(models.Surgery, {
        as: 'surgeries',
        through: PatientSurgery,
        foreignKey: 'patient_id',
        otherKey: 'surgery_id'
      });
    }
  };
  PatientSurgery.init({}, {
    sequelize,
    modelName: 'PatientSurgery',
    underscored: true,
    tableName: 'Patient_surgeries',
  });
  return PatientSurgery;
};