const Locations = require("./locations.model");
const constants = require("../../config/constants");

const locations = new Locations(constants.LOCATIONS_ENDPOINT);

function load(req, res, next) {
  return locations
    .load()
    .then(data => {
      locations.locationsList = data;
      return next();
    })
    .catch(error => next(error));
}

function loadPunches(req, res, next) {
  return locations
    .loadPunches(req.params["locationId"])
    .then(data => {
      locations.locationPunches = data;
      return next();
    })
    .catch(error => next(error));
}

function list(req, res, next) {
  return res.json(locations.locationsList);
}

function getLocation(req, res, next) {
  const { locationId } = req.params;

  return res.json(locations.get(locationId));
}

function getLocationWorkedHours(req, res, next) {
  const { locationId } = req.params;

  return res.json(locations.getWorkedHours());
}

module.exports = {
  load,
  loadPunches,
  list,
  getLocation,
  getLocationWorkedHours
};
