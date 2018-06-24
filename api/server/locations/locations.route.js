const express = require("express");
const locationsController = require("./locations.controller");

const router = express.Router();

router.use(locationsController.load);
router.get("/", locationsController.list);

module.exports = router;
