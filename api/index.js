"use strict";

const app = require("./config/express");

const port = process.env.PORT || 8000;

const server = app.listen(port, function() {
  console.log("The server is running at http://127.0.0.1:" + port);
});

module.exports = app;
