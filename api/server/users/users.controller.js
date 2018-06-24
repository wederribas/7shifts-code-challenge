const Users = require("./users.model");
const apiURL = require("../../config/constants");

const users = new Users(apiURL.USERS_ENDPOINT);

function load(req, res, next) {
  return users
    .load()
    .then(data => {
      users.usersList = data;
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

module.exports = {
  load,
  list,
  getUser
};
