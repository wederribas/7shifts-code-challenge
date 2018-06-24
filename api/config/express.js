"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const httpStatus = require("http-status");
const routes = require("../index.route");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

module.exports = app;
