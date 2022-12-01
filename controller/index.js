const users = require("./users");
const userDetail = require("./userDetail");
const products = require("./products");

const controller = {};

controller.users = users;
controller.userDetail = userDetail;
controller.products = products;

module.exports = controller;
