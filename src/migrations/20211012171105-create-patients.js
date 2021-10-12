'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patients', {
      patientId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'patient_id',
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'full_name',
      },
      planId: {
        type: Sequelize.INTEGER,
        field: 'plan_id',
        references: {
          model: 'Plans',
          key: 'plan_id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Patients');
  }
};