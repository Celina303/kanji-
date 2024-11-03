"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Kanjis",
      [
        {
          id: "9b7f4e1b-7e63-4cde-bb76-5d4d2c5d7f8b",
          character: "日",
          level: "N5",
          meaning: "Mặt trời, ngày",
          chinaMeaning: "Nhật",
          mnemonic: "Hình tròn của mặt trời",
          kunReading: "ひ, び, か",
          onReading: "ニチ、ジツ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
