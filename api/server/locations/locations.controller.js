const Locations = require("./locations.model");
const apiURL = require("../../config/constants");

function load(req, res, next) {
  const locations = new Locations(apiURL.LOCATIONS_ENDPOINT);

  return locations
    .load()
    .then(locations => {
      req.locations = locations;
      return next();
    })
    .catch(error => next(error));
}

function list(req, res, next) {
  return res.json(req.locations);
}

module.exports = {
  load,
  list
};
