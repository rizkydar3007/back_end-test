const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../backend-test/assets/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/register", upload.single("image"), controller.users.register);
router.post("/login", controller.users.login);
router.post("/", controller.users.forgotPassword);

module.exports = router;
