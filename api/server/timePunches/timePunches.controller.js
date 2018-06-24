const TimePunches = require("./timePunches.model");
const apiURL = require("../../config/constants");

function load(req, res, next) {
  const timePunches = new TimePunches(apiURL.TIME_PUNCHES_ENDPOINT);

  return timePunches
    .load()
    .then(timePunches => {
      req.timePunches = timePunches;
      return next();
    })
    .catch(error => next(error));
}

function list(req, res, next) {
  return res.json(req.timePunches);
}

module.exports = {
  load,
  list
};
