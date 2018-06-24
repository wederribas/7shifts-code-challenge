const fetch = require("node-fetch");

class TimePunches {
  constructor(apiURL) {
    this.url = apiURL;
    this.punchesList = {};
  }

  load() {
    return fetch(this.url, {
      headers: {
        "content-type": "application/json"
      }
    }).then(resp => resp.json());
  }

  getUserPunches(userId) {
    const punches = this.punchesList;

    let filteredPunches = [];
    for (let punch in punches) {
      if (punches[punch].userId == userId) {
        filteredPunches.push(punches[punch]);
      }
    }

    return filteredPunches;
  }
}

module.exports = TimePunches;
