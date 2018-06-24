const fetch = require("node-fetch");
const constants = require("../../config/constants");

class Locations {
  constructor(apiURL) {
    this.url = apiURL;
    this.locationsList = {};
    this.locationPunches = {};
  }

  load() {
    return fetch(this.url, {
      headers: {
        "content-type": "application/json"
      }
    }).then(resp => resp.json());
  }

  loadPunches(locationId) {
    return fetch(`${constants.HOSTNAME}/api/time-punches`, {
      headers: {
        "content-type": "application/json"
      }
    }).then(resp => {
      return resp.json().then(punches => {
        let filteredPunches = [];
        for (let punch in punches) {
          if (punches[punch].locationId == locationId) {
            filteredPunches.push(punches[punch]);
          }
        }

        return filteredPunches;
      });
    });
  }

  getWorkedHours() {
    return this.locationPunches;
  }
}

module.exports = Locations;
