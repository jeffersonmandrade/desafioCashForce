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
          type: Sequelize.STRING(255),
          unique:true,
        },
        orderNumber: {
          allowNull: false,
          type: Sequelize.STRING(255)
        },
        orderPath: {
          defaultValue: null,
          type: Sequelize.STRING(255),
          unique:true,
        },
        orderFileName: {
          defaultValue: null,
          type: Sequelize.STRING(255),
          unique:true,
        },
        orderOriginalName: {
          defaultValue: null,
          type: Sequelize.STRING(255),
          unique:true,
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
          type: Sequelize.INTEGER(11),
          allowNull:true,
          onUpdate:'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'cnpjs',
            key: 'id'
          }
        },
        userId: {
          type: Sequelize.INTEGER(11),
          allowNull:true,
          onUpdate:'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'users',
            key: 'id'
          }
        },
        buyerId: {
          type: Sequelize.INTEGER(11),
          allowNull:true,
          onUpdate:'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'buyers',
            key: 'id'
          }
        },
        providerId: {
          type: Sequelize.INTEGER(11),
          allowNull:true,
          onUpdate:'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'providers',
            key: 'id'
          }
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
