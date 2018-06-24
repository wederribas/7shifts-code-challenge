const express = require("express");
const sanitCheckRoutes = require("./server/sanitCheck/sanitCheck.route");
const locationsRoutes = require("./server/locations/locations.route");
const usersRoutes = require("./server/users/users.route");
const tiumePunchesRoutes = require("./server/timePunches/timePunches.route");

const router = express.Router();

router.use("/sanit/test", sanitCheckRoutes);
router.use("/locations", locationsRoutes);
router.use("/users", usersRoutes);
router.use("/time-punches", tiumePunchesRoutes);

module.exports = router;
