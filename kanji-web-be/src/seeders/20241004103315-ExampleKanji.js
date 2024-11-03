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
      "ExampleKanjis",
      [
        {
          id: "0bab908e-a960-47b2-b946-4df0ccac57f2",
          idKanji: "3400c170-b401-4be2-94fe-cfe29258fbac",
          example: "一 ー いち ー Một",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "10575458-9466-4417-acec-26e95178c284",
          idKanji: "58911659-b38c-482a-8664-557ab5bd5d41",
          example: "首都  ー しゅと ー Thủ đô",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "11778a8e-3358-4bbb-b839-4077e8365cc8",
          idKanji: "3f9b4780-a882-49a5-b1ac-923250d5ac5f",
          example: "速度  ー そくど ー Tốc độ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "167f1f22-ef01-42b5-ab3d-06aacea11062",
          idKanji: "3c839d9d-1733-4f6e-ab33-d1d385ab89a1",
          example: "名前 ― なまえ ― tên",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "1d4442f7-77ab-438b-a6e9-62c71dee4b76",
          idKanji: "3f9b4780-a882-49a5-b1ac-923250d5ac5f",
          example: "速い ー はやい ―  Nhanh",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "2172a4c3-fb9b-4181-a4ad-be0231a144e8",
          idKanji: "58911659-b38c-482a-8664-557ab5bd5d41",
          example: "都合 ー つごう ー Thuận tiện",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "23b1b812-8d20-4b28-864d-d102a89f13ec",
          idKanji: "19f6c1ed-7b9d-43ba-9c2a-9e04b1c56b9f",
          example: "試合  ー しあい ー  Trận đấu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "29ea0551-29f3-4c1f-9a6f-017692aa27f7",
          idKanji: "d1bf2b7e-502e-4b1d-a66e-cbc9b37b7f40",
          example: "本 ― ほん ― sách",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "2ab49f3e-cca0-47c7-bf76-31ac460b4847",
          idKanji: "df586e1f-a5df-4a65-af5e-b60bdc385d36",
          example: "夕方 ― ゆうがた ― buổi chiều",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "3de525f6-276d-45a4-93b4-aaed46dae83b",
          idKanji: "df586e1f-a5df-4a65-af5e-b60bdc385d36",
          example: "あの方 ― あのかた ―  vị ấy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "42baf657-6c26-47de-9a71-b43183ceafac",
          idKanji: "3f9b4780-a882-49a5-b1ac-923250d5ac5f",
          example: "高速道路 ー こうそくどうろ ー Đường cao tốc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "4478850f-81de-444e-9160-7c5f8389e2bd",
          idKanji: "57c71983-5b2f-4616-88d9-06a12105a417",
          example: "四 ー し/よん ー Bốn",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "4ef21dd7-7b2a-4676-aef1-4c77f07047d4",
          idKanji: "2c5dca1f-37b2-465e-8c07-4015e96838c7",
          example: "特急  ー とっきゅう ー Tốc hành",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "52b7bf66-cc40-4f0f-9c0e-789c94462c81",
          idKanji: "877ebe02-9530-4e6e-8739-8bfedcb4b16b",
          example: "七 ー なな ― Bảy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "57abbfba-bb6a-4456-960f-cc07fd19745d",
          idKanji: "e64bbe8e-fb28-4e3e-9a38-53aff0354270",
          example: "五 ー ご ー Năm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "5d2cc56d-81a3-4cd6-8a9a-6f9922ea55bf",
          idKanji: "25d46b4a-2484-4569-8244-a5ac7dd917bc",
          example: "日曜日 ― にちようび ― chủ nhật",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "68d5409a-143b-42a2-bb73-1ef24e4ac813",
          idKanji: "a37530cc-c97b-43ab-b5c3-bff2a3b05a53",
          example: "三 ー さん ー Ba",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "692e03c6-7a1d-4ab1-a03f-67353aeb4a20",
          idKanji: "df586e1f-a5df-4a65-af5e-b60bdc385d36",
          example: "読み方 ― よみかた ― cách đọc",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "6a43cb15-6772-4952-9724-161bfd4fecaf",
          idKanji: "3c839d9d-1733-4f6e-ab33-d1d385ab89a1",
          example: "人名 ― じんめい ― tên người",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "6cd20d4d-d4ee-41ba-a30f-64f9af087f2c",
          idKanji: "57b71851-43d8-4585-bc85-a68fcdbea3d8",
          example: "十 ― じゅう ― Mười",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "70efa4fa-dafa-4c03-aeb5-5ded79a0b27c",
          idKanji: "48d04a50-f0b2-4efb-a4d2-f3fc03c95cff",
          example: "手紙  ー てがみ ー Thư",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "85e64de3-a222-459a-bbb1-c40953e4f918",
          idKanji: "2c5dca1f-37b2-465e-8c07-4015e96838c7",
          example: "急行 ー きゅうこう ー Đi nhanh",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "8ebb2e64-01c6-4ef1-9a72-ad572bbde8b8",
          idKanji: "25d46b4a-2484-4569-8244-a5ac7dd917bc",
          example: "日 ― ひ ― ngày",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "9d20f427-f0c1-4d68-84c7-680484efe831",
          idKanji: "a0cb23bc-b50f-461c-8507-c6b2db738033",
          example: "八 ー はち ― Tám",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "9f7e40eb-4112-4439-87bb-36fe7debfa5a",
          idKanji: "3bdf3e32-54c7-4942-8f66-6aa473fba3b2",
          example: "ニ ー に ー Hai",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "a068d4d8-7050-4687-ae4c-0fb0e9e6c8a6",
          idKanji: "af08c07d-af8c-4e2f-b438-d4d196538749",
          example: "悪い ー わるい ー Xấu",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "a0c15ffe-8aaa-4493-a50c-83aafb6fb39c",
          idKanji: "d1bf2b7e-502e-4b1d-a66e-cbc9b37b7f40",
          example: "日本 ― にほん ― nước Nhật",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "ac3fc407-957d-4072-ba92-b08143a7b62c",
          idKanji: "2c9107d9-00e7-4140-8836-1598cf7ae9bb",
          example: "六 ー ろく ー Sáu",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "ba08b2e0-9e69-4800-8be2-44ae3c6e2221",
          idKanji: "44365825-ca03-47bf-888e-2ae8179cf462",
          example: "日本人 ― にほんじん ― người Nhật",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "bf722a87-a2cb-40ce-8b68-6ae42d3acf51",
          idKanji: "3c839d9d-1733-4f6e-ab33-d1d385ab89a1",
          example: "有名 ― ゆうめい ― nổi tiếng",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "c03ebfec-3f90-4d6f-9993-73e96d42b17a",
          idKanji: "48d04a50-f0b2-4efb-a4d2-f3fc03c95cff",
          example: "表紙  ー ひょうし ー Bìa giấy",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "c79adc1f-e4fd-439f-9ad3-2ade16c77196",
          idKanji: "2c5dca1f-37b2-465e-8c07-4015e96838c7",
          example: "急ぎます ー いそぎます ー Nhanh, vội",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "cab77b17-8c53-40cb-a5bd-4af842bbbc8d",
          idKanji: "48d04a50-f0b2-4efb-a4d2-f3fc03c95cff",
          example: "紙 ー かみ ー Tờ giấy",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "cd682ab3-fc4c-4e25-983a-5483e9c9b67f",
          idKanji: "19f6c1ed-7b9d-43ba-9c2a-9e04b1c56b9f",
          example: "合います ー あいます ― Vừa, khít, hợp",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "cf865a9d-2b7b-4d9d-94fe-1858b31072c7",
          idKanji: "d1bf2b7e-502e-4b1d-a66e-cbc9b37b7f40",
          example: "本屋 ― ほんや ― nhà sách",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "d0eb4d2f-a114-4871-9783-61f0d2ec37f8",
          idKanji: "25d46b4a-2484-4569-8244-a5ac7dd917bc",
          example: "日本 ― にほん ― nước Nhật",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "d61ae938-7e7a-4c66-88f0-6f5b7d60e975",
          idKanji: "19f6c1ed-7b9d-43ba-9c2a-9e04b1c56b9f",
          example: "合格 ー ごうかく ー Đỗ, đậu",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "d7903e22-1aba-467c-a9ca-3da7509b3a4d",
          idKanji: "af08c07d-af8c-4e2f-b438-d4d196538749",
          example: "悪天 ― あくてん ― Thời tiết xấu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d9f1a54c-54fb-494e-a0e8-9708646101dc",
          idKanji: "7b98b7e8-b881-493e-9b7c-f1306a0a3271",
          example: "見直します ー みなおします ー Xem lại",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "e3b8a9ad-7592-455f-a9c9-294bbfca6294",
          idKanji: "58911659-b38c-482a-8664-557ab5bd5d41",
          example: "東京都 ー とうきょうと ― Thành Phố Tokyo",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "e3c42bd5-1946-46a5-8b10-c66f2c4ad52d",
          idKanji: "8e50fbf1-741c-4a71-a1ef-1c87713807ac",
          example: "九 ー きゅう/く ― Chín",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "e49319da-0757-46b0-94c6-7b093da69328",
          idKanji: "7b98b7e8-b881-493e-9b7c-f1306a0a3271",
          example: "直します ー なおします ー Sửa chữa",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "e4b08d95-a943-424f-b22c-95fb527acb91",
          idKanji: "f307400c-6904-4efe-835c-e6fb424f476a",
          example: "去年 ー きょねんー Năm ngoái",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "e7776757-3882-4188-8410-afcf7dc783ed",
          idKanji: "7b98b7e8-b881-493e-9b7c-f1306a0a3271",
          example: "直接 ー ちょくせつ ー Trực tiếp",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "e88b0a9a-04e9-4435-8d26-761e65202c4c",
          idKanji: "f307400c-6904-4efe-835c-e6fb424f476a",
          example: "過去 ー かこ ー Quá khứ",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "e9a24d2f-a48f-4a0c-b98f-2c6234077702",
          idKanji: "f307400c-6904-4efe-835c-e6fb424f476a",
          example: "去ります  ー さります ー Rời khỏi",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          id: "f22cacef-838f-4ca7-94a4-b19eeb223f2b",
          idKanji: "44365825-ca03-47bf-888e-2ae8179cf462",
          example: "人 ― ひと ― Người",
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
