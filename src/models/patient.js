'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(models.Plan, {
        foreignKey: 'planId', as: 'plan'
      });
        // Patient.hasOne(models.Plan, {
        //   foreignKey: 'planId', as: 'plans'
        // });
    }
  };
  Patient.init({
    patientId: { type: DataTypes.INTEGER, primaryKey: true },
    fullName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Patient',
    underscored: true,
    tableName: 'Patients',
  });
  return Patient;
};