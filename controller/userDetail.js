const model = require("../config/model/index");
const controller = {};

controller.createUser = async function (req, res) {};

controller.listUser = async function (req, res) {
  try {
    const user = await model.userDetail.findAll();
    if (user.length > 0) {
      res.json({
        status: 200,
        message: "List Users",
        data: user,
      });
    } else {
      res.json({
        status: 200,
        message: "Tidak ada List User",
      });
    }
  } catch (error) {
    res.json({
      status: 200,
      message: error.message,
    });
  }
};

controller.detailUser = async function (req, res) {};

controller.updateUser = async function (req, res) {};

controller.deleteUser = async function (req, res) {};

module.exports = controller;
