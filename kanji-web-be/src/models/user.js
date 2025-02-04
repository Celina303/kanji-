"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.LoginLog, {
        foreignKey: "idUser",
        sourceKey: "id",
        onDelete: "CASCADE",
        hooks: true,
      });
      User.hasMany(models.UserExam, {
        foreignKey: "idUser",
        sourceKey: "id",
        as: "userExams",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      fullName: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthDay: DataTypes.DATE,
      phoneNumber: {
        type: DataTypes.STRING, 
        allowNull: true, 
        validate: {
          isNumeric: true, 
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
