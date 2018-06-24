const express = require("express");
const usersController = require("./users.controller");

const router = express.Router();

router.use(usersController.load);
router.get("/", usersController.list);
router.get("/:userId/locations/:locationId", usersController.getUser);
router.get(
  "/:userId/locations/:locationId/worked-hours",
  usersController.getUserWorkedHours
);

router.param("userId", usersController.loadPunches);

module.exports = router;
