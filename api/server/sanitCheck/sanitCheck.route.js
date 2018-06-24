const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.send({
    status: "OK",
    message: "Sanit check passed!"
  });
});

module.exports = router;
