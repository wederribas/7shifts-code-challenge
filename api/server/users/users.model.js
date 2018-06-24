const fetch = require("node-fetch");

class Users {
  constructor(apiURL) {
    this.url = apiURL;
    this.usersList = {};
  }

  load() {
    return fetch(this.url, {
      headers: {
        "content-type": "application/json"
      }
    }).then(resp => resp.json());
  }

  get(locationId, userId) {
    return this.usersList[locationId][userId];
  }
}

module.exports = Users;
