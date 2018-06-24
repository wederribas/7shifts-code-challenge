const express = require("express");
const sanitCheckRoutes = require("./server/sanitCheck/sanitCheck.route");

const router = express.Router();

router.use("/sanit/test", sanitCheckRoutes);

module.exports = router;
