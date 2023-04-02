const express = require("express");
const router = express.Router();
const ProducttsController = require("../controllers/ProductsController");

router.post("/create", ProducttsController.cerate);
router.post("/delete", ProducttsController.delete);
router.post("/update", ProducttsController.update);

module.exports = router;
