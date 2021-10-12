'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patient_surgeries', {
      patientId: {
        type: Sequelize.INTEGER,
        field: 'patient_id',
        references: {
          model: 'Patients',
          key: 'patient_id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      surgeryId: {
        type: Sequelize.INTEGER,
        field: 'surgery_id',
        references: {
          model: 'Surgeries',
          key: 'surgery_id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
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
    await queryInterface.dropTable('Patient_surgeries');
  }
};