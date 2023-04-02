const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/create", UserController.cerate);
router.post("/delete", UserController.delete);
router.post("/update", UserController.update);
router.post("/add", UserController.addCart);
router.post("/remove", UserController.remove);

module.exports = router;