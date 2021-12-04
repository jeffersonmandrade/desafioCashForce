"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "users",
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER(11),
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(255),
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING(255),
        },
        phoneNumber: {
          defaultValue: null,
          type: Sequelize.STRING(255),
        },
        mobile: {
          defaultValue: null,
          type: Sequelize.STRING(255),
        },
        departament: {
          defaultValue: null,
          type: Sequelize.STRING(255),
        },
        verificationCode: {
          defaultValue: null,
          type: Sequelize.STRING(255),
        },
        emailChecked: {
          defaultValue: 0,
          type: Sequelize.TINYINT(1),
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        cashforceAdm: {
          defaultValue: 0,
          type: Sequelize.TINYINT(1),
        },
      },
      {
        engine: "InnoDB",
        charset: "latin1",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
