const model = require("../config/model/index");
const { generateAccessToken, generateRefreshToken } = require("../helper/auth");
const controller = {};

controller.register = async function (req, res) {
  try {
    const emailUser = await model.users.findOne({
      where: {
        email: req.body.email,
      },
    });
    const password = req.body.password;
    console.log(password);
    if (emailUser.email === req.body.email) {
      res.json({
        status: 200,
        message: "Email sudah terdaftar !",
      });

      console.log(emailUser.email);
    } else if (password.length < 6 || password.length > 20) {
      res.json({
        status: 200,
        message: "Password harus 6 - 20 karakter !",
      });
    } else {
      await model.users.create({
        email: req.body.email,
        password: req.body.password,
        phone_number: req.body.phone_number,
      });
      const userId = await model.users.findAll();
      await model.userDetail.create({
        user_id: userId[0].id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        gender: req.body.gender,
        image: req.file.path,
      });
      res.json({
        status: 200,
        message: "Berhasil Register User",
      });
    }
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

controller.login = async function (req, res) {
  try {
    const passwordValid = await model.users.findAll({
      where: {
        password: req.body.password,
      },
    });
    const emailValid = await model.users.findAll({
      where: {
        email: req.body.email,
      },
    });
    console.log(emailValid[0].email);
    const emailLoad = emailValid[0].email;
    console.log(emailLoad);
    if (!emailLoad === req.body.email) {
      res.json({
        status: 200,
        message: "Email belum terdaftar !",
      });
      if (!passwordValid === req.body.password) {
        res.json({
          status: 200,
          message: "Password Salah",
        });
      }
    }
    const payload = {
      email: emailLoad,
    };
    emailLoad.accessToken = generateAccessToken(payload);
    emailLoad.refreshToken = generateRefreshToken(payload);
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

controller.forgotPassword = async function (req, res) {};

module.exports = controller;
