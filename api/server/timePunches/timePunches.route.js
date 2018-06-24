const express = require("express");
const timePunchesController = require("./timePunches.controller");

const router = express.Router();

router.use(timePunchesController.load);
router.get("/", timePunchesController.list);
router.get("/:userId/users", timePunchesController.getUserPunches);

module.exports = router;
