const Users = require("./users.model");
const apiURL = require("../../config/constants");

function load(req, res, next) {
  const users = new Users(apiURL.USERS_ENDPOINT);

  return users
    .load()
    .then(users => {
      req.users = users;
      return next();
    })
    .catch(error => next(error));
}

function list(req, res, next) {
  return res.json(req.users);
}

module.exports = {
  load,
  list
};
