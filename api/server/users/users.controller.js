const Users = require("./users.model");
const constants = require("../../config/constants");

const users = new Users(constants.USERS_ENDPOINT);

function load(req, res, next) {
  return users
    .load()
    .then(data => {
      users.usersList = data;
      return next();
    })
    .catch(error => next(error));
}

function loadPunches(req, res, next) {
  return users
    .loadPunches(req.params["userId"])
    .then(data => {
      users.userPunches = data;
      return next();
    })
    .catch(error => next(error));
}

function list(req, res, next) {
  return res.json(users.usersList);
}

function getUser(req, res, next) {
  const { locationId, userId } = req.params;

  return res.json(users.get(locationId, userId));
}

function getUserWorkedHours(req, res, next) {
  const { locationId, userId } = req.params;

  return res.json(users.getWorkedHours());
}

module.exports = {
  load,
  loadPunches,
  list,
  getUser,
  getUserWorkedHours
};
