'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Surgeries', {
      surgeryId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'surgery_id',
      },
      specialty: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      doctor: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Surgeries');
  }
};