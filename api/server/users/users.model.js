const fetch = require("node-fetch");

class Users {
  constructor(apiURL) {
    this.url = apiURL;
  }

  load() {
    return fetch(this.url, {
      headers: {
        "content-type": "application/json"
      }
    }).then(resp => resp.json());
  }
}

module.exports = Users;
