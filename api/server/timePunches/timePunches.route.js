const express = require("express");
const timePunchesController = require("./timePunches.controller");

const router = express.Router();

router.use(timePunchesController.load);
router.get("/", timePunchesController.list);

module.exports = router;
