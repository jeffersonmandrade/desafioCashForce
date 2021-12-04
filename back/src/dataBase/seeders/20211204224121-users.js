"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("users", [
  {
    name:'ALLAN SOUZA',
    email:'allan@cashforce.com.br',
    phoneNumber:null,
    mobile: null,
    departament:null,
    verificationCode:"",
    emailChecked:1,
    createdAt:new Date('2020-10-01 21:31:37'),
    updatedAt:new Date('2020-10-01 22:41:23'),
    cashforceAdm:1
  }
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
