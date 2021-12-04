"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("cnpjs", [
      {
        cnpj: "00000000000001",
        companyType: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cnpj: "00000000000002",
        companyType: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("cnpjs", null, {});
  },
};
