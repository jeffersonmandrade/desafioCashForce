"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "orders",
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER(11),
        },
        orderNfId: {
          allowNull: false,
          type: Sequelize.STRING(255)
        },
        orderNumber: {
          allowNull: false,
          type: Sequelize.STRING(255)
        },
        orderPath: {
          defaultValue: null,
          type: Sequelize.STRING(255),
        },
        orderFileName: {
          defaultValue: null,
          type: Sequelize.STRING(255),
        },
        orderOriginalName: {
          defaultValue: null,
          type: Sequelize.STRING(255),
        },
        emissionDate: {
          defaultValue: null,
          type: Sequelize.STRING(255),
        },
        pdfFile: {
          defaultValue: null,
          type: Sequelize.STRING(255),
        },
        emitedTo: {
          allowNull: false,
          type: Sequelize.STRING(255)
        },
        nNf: {
          defaultValue: null,
        type: Sequelize.STRING(255),
        },
        CTE: {
          defaultValue: null,
        type: Sequelize.STRING(255),
        },
        value: {
          defaultValue: null,
          type: Sequelize.STRING(255),
        },
        createdAt: {
          type:Sequelize.DATE,
          allowNull:false,
        },
        updatedAt: {
          allowNull:false,
          type: Sequelize.DATE,
        },
        cnpjId: {
          defaultValue: null,
          type: Sequelize.INTEGER(11),
        },
        userId: {
          defaultValue: null,
          type: Sequelize.INTEGER(11),
        },
        buyerId: {
          defaultValue: null,
          type: Sequelize.INTEGER(11),
        },
        providerId: {
          defaultValue: null,
          type: Sequelize.INTEGER(11),
        },
        orderStatusBuyer: {
          defaultValue: 0,
          type: Sequelize.INTEGER(11),
        },
        orderStatusProvider: {
          defaultValue: 0,
          type: Sequelize.INTEGER(11),
        },
        deliveryReceipt: {
          defaultValue: null,
          type: Sequelize.INTEGER(11),
        },
        cargoPackingList: {
          defaultValue: null,
          type: Sequelize.INTEGER(11),
        },
        deliveryCtrc: {
          defaultValue: null,
          type: Sequelize.INTEGER(11),
        },
      },
      {
        engine: "InnoDB",
        charset: "latin1",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("orders");
  },
};
