'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plan.hasMany(models.Patient, {
        foreignKey: 'planId', as: 'patients',
        // through: '',
      });
      // Plan.belongsToMany(models.Patient, {
      //   foreignKey: 'planId', as: 'patients',
      //   through: '',
      // });
    }
  };
  Plan.init({
    planId: { type: DataTypes.INTEGER, primaryKey: true },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    
  }, {
    sequelize,
    modelName: 'Plan',
    underscored: true,
    tableName: 'Plans'
  });
  return Plan;
};