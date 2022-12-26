"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Roles", [
      {
        name: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "moderator",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
