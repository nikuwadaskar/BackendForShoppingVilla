const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/create", UserController.cerate);
router.post("/delete", UserController.delete);
router.post("/update", UserController.update);

module.exports = router;
