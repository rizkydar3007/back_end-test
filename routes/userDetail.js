const express = require("express");
const router = express.Router();
const controller = require("../controller/index");
// const { authAccessToken } = require("../middlewares/auth");

router.get("/", controller.userDetail.createUser);
router.get("/", controller.userDetail.listUser);
router.post("/:id", controller.userDetail.detailUser);
router.put("/:id", controller.userDetail.updateUser);
router.delete("/:id", controller.userDetail.deleteUser);

module.exports = router;
