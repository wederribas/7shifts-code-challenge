const express = require("express");
const usersController = require("./users.controller");

const router = express.Router();

router.use(usersController.load);
router.get("/", usersController.list);

module.exports = router;
