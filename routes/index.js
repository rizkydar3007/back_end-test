const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const userDetailRouter = require("./userDetail");
const productRouter = require("./products");

router.use("/users", userRouter);
router.use("/user-detail", userDetailRouter);
router.use("/products", productRouter);

module.exports = router;
