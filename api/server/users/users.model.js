const fetch = require("node-fetch");
const constants = require("../../config/constants");
const calculateWorkedHours = require("../../helpers/workHoursCalc");

class Users {
  constructor(apiURL) {
    this.url = apiURL;
    this.usersList = {};
    this.userPunches = {};
    this.userLocation = {};
  }

  load() {
    return fetch(this.url, {
      headers: {
        "content-type": "application/json"
      }
    }).then(resp => resp.json());
  }

  loadPunches(userId) {
    return fetch(`${constants.HOSTNAME}/api/time-punches/${userId}/users`, {
      headers: {
        "content-type": "application/json"
      }
    }).then(resp => resp.json());
  }

  loadLocation(locationId) {
    return fetch(`${constants.HOSTNAME}/api/locations/${locationId}`, {
      headers: {
        "content-type": "application/json"
      }
    }).then(resp => resp.json());
  }

  get(locationId, userId) {
    return this.usersList[locationId][userId];
  }

  getWorkedHours() {
    return calculateWorkedHours(this.userLocation, this.userPunches);
  }
}

module.exports = Users;
