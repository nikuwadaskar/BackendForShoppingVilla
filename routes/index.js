const express = require("express");
const router = express.Router();
router.use('/user',require("./User"));
router.use('/cart',require("./User"));
router.use('/products',require("./Products"))



module.exports = router;
