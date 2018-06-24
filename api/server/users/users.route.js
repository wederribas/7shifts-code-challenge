const express = require("express");
const usersController = require("./users.controller");

const router = express.Router();

router.use(usersController.load);
router.get("/", usersController.list);
router.get("/:userId/locations/:locationId", usersController.getUser);

module.exports = router;
