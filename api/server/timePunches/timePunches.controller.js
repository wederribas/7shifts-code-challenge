const TimePunches = require("./timePunches.model");
const constants = require("../../config/constants");

const timePunches = new TimePunches(constants.TIME_PUNCHES_ENDPOINT);

function load(req, res, next) {
  return timePunches
    .load()
    .then(data => {
      timePunches.punchesList = data;
      return next();
    })
    .catch(error => next(error));
}

function list(req, res, next) {
  return res.json(timePunches.punchesList);
}

function getUserPunches(req, res, next) {
  const { userId } = req.params;

  return res.json(timePunches.getPunches(userId));
}

module.exports = {
  load,
  list,
  getUserPunches
};
