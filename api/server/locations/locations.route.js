const express = require("express");
const locationsController = require("./locations.controller");

const router = express.Router();

router.use(locationsController.load);
router.get("/", locationsController.list);
router.get(
  "/:locationId/worked-hours",
  locationsController.getLocationWorkedHours
);

router.param("locationId", locationsController.loadPunches);

module.exports = router;
