const Sequelize = require("sequelize");
const db = require("../database/mysql");
const bcrypt = require("bcryptjs");

var users = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    email: {
      type: Sequelize.INTEGER,
      allowNull: false,
      isEmail: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    instanceMethods: {
      generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(50));
      },
      validPassword(password) {
        return bcrypt.compare(password, this.password);
      },
    },
  }
);

module.exports = users;
