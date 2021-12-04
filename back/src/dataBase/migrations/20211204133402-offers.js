'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("offers", {
      id:{
        primaryKey: true,
        autoIncrement:true,
        type: Sequelize.INTEGER(11),

      },
      tax:{
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      tariff: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      adValorem: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      float :{
        allowNull: false,
        type: Sequelize.STRING(255),
      }
      ,
      iof :{
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      expiresIn:{
        type:Sequelize.DATE,
        allowNull:false,

      },
      paymentStatusSponsor :{
        defaultValue:0,
        type: Sequelize.TINYINT(1),

      },
      paymentStatusProvider: {
        defaultValue:0,
        type: Sequelize.TINYINT(1),
      },
      createdAt :{
        type:Sequelize.DATE,
        allowNull:false,
      },
      updatedAt: {
        type:Sequelize.DATE,
        allowNull:false,
      },
      orderId :{
        type: Sequelize.INTEGER(11),
        allowNull: false

      },
      sponsorId :{
        type: Sequelize.INTEGER(11),
        allowNull:false
      },

    },
    {
      engine: 'InnoDB',
      charset: 'latin1'
    }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("offers");
  }
};
