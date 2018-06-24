const chai = require("chai");
const request = require("supertest");
const httpStatus = require("http-status");
const expect = chai.expect;
const app = require("../../index");

describe("# GET /api/users - Get all users", () => {
  it("Should retrieve an object from the endpoint API", done => {
    request(app)
      .get("/api/users")
      .expect(httpStatus.OK)
      .then(res => {
        expect(res).to.be.an("object");
        done;
      })
      .then(done, done);
  });
});

describe("# GET /api/users/:userId/locations/:locationId - Get a specific user for a given location", () => {
  it("Should retrieve an object from the endpoint API", done => {
    request(app)
      .get("/api/users")
      .then(res => {
        locationId = Object.keys(res.body)[0];
        userId = Object.keys(res.body[locationId])[0];

        request(app)
          .get(`/api/users/${userId}/locations/${locationId}`)
          .then(res => {
            expect(res).to.be.an("object");
            done;
          });
      })
      .then(done, done);
  });
});

describe("# GET /:userId/locations/:locationId/worked-hours - Get the worked hours by a user in a location", () => {
  it("Should retrieve an object from the endpoint API", done => {
    request(app)
      .get("/api/users")
      .then(res => {
        locationId = Object.keys(res.body)[0];
        userId = Object.keys(res.body[locationId])[0];

        request(app)
          .get(`/${userId}/locations/${locationId}/worked-hours`)
          .then(res => {
            expect(res).to.be.an("object");
            done;
          });
      })
      .then(done, done);
  });
});
