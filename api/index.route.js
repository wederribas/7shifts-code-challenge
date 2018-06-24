const express = require("express");
const sanitCheckRoutes = require("./server/sanitCheck/sanitCheck.route");
const locationsRoutes = require("./server/locations/locations.route");
const usersRoutes = require("./server/users/users.route");

const router = express.Router();

router.use("/sanit/test", sanitCheckRoutes);
router.use("/locations", locationsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
