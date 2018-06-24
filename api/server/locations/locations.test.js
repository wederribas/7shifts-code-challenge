const chai = require("chai");
const request = require("supertest");
const httpStatus = require("http-status");
const expect = chai.expect;
const app = require("../../index");

describe("# GET /api/locations - Get all locations", () => {
  it("Should retrieve an object from the endpoint API", done => {
    request(app)
      .get("/api/locations")
      .expect(httpStatus.OK)
      .then(res => {
        expect(res).to.be.an("object");
        done;
      })
      .then(done, done);
  });
});

describe("# GET /:locationId/worked-hours - Get the worked hours in a given location", () => {
  it("Should retrieve an object from the endpoint API", done => {
    request(app)
      .get("/api/locations")
      .then(res => {
        locationId = Object.keys(res.body)[0];

        request(app)
          .get(`/${locationId}/worked-hours`)
          .then(res => {
            expect(res).to.be.an("object");
            done;
          });
      })
      .then(done, done);
  });
});
