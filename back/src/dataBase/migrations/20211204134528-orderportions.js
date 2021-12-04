"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "orderportions",
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER(11),
        },
        nDup: {
          allowNull: false,
          type: Sequelize.STRING(255),
        },
        dVenc: {
          allowNull: false,
          type: Sequelize.STRING(255),
        },
        vDup: {
          allowNull: false,
          type: Sequelize.STRING(255),
         },
        availableToMarket: {
          defaultValue: 0,
          type: Sequelize.TINYINT(1),
        },
        createdAt: {
          allowNull:false,
          type:Sequelize.DATE,
        },
        updatedAt: {
          allowNull:false,
          type:Sequelize.DATE,
        },
        orderId: {
          allowNull: true,
          type: Sequelize.INTEGER(11),
          onUpdate:'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'orders',
            key: 'id'
          }
        },
      },
      {
        engine: "InnoDB",
        charset: "latin1",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("orderportions");
  },
};
