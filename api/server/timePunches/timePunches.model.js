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

  getPunches(userId) {
    return this.punchesList[userId];
  }
}

module.exports = TimePunches;
