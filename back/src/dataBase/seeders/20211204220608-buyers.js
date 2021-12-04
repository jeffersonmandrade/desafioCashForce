"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("buyers", [
      {
        name: "SACADO 001",
        tradingName:"ACADO 001 LTDA",
        cashforceTax: "0",
        responsibleName: null,
        responsibleEmail: null,
        responsiblePosition: null,
        responsiblePhone: null,
        responsibleMobile: null,
        website: null,
        postalCode: null,
        address: null,
        number: null,
        complement: null,
        neighborhood: null,
        city: null,
        state: null,
        phoneNumber: null,
        situation: null,
        situationDate: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 1,
        confirm: 1,
        email: null,
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("buyers", null, {});
  },
};
