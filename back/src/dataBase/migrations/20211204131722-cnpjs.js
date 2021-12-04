'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cnpjs", {
      id:{
        primaryKey: true,
        autoIncrement:true,
        type: Sequelize.INTEGER(11),

      },
      cnpj:{
        allowNull:false,
        type: Sequelize.STRING(255)
        },
      companyType: {
        allowNull:false,
        type: Sequelize.STRING(255)
        },
        createdAt: {
          type:Sequelize.DATE,
          allowNull:false,
        },
        updatedAt: {
          allowNull:false,
          type: Sequelize.DATE,
        },
    },
    {
      engine: 'InnoDB',
      charset: 'latin1'
    }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("cnpjs");
  }
};
