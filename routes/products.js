const express = require("express");
const router = express.Router();
const controller = require("../controller/index");
const {authAccessToken} = require("../middlewares/auth")

router.get("/", authAccessToken, controller.products.createProduct);
router.get("/:supplierId", authAccessToken, controller.products.listProduct);
router.post("/", authAccessToken, controller.products.detailProduct);
router.put("/:supplierId", authAccessToken, controller.products.updateProduct);
router.delete("/:supplierId", authAccessToken, controller.products.deleteProduct);

module.exports = router;
