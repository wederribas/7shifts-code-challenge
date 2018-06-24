const chai = require("chai");
const request = require("supertest");
const httpStatus = require("http-status");
const expect = chai.expect;
const app = require("../../index");

describe("# GET /api/time-punches - Get all time punches for all users", () => {
  it("Should retrieve an object from the endpoint API", done => {
    request(app)
      .get("/api/time-punches")
      .expect(httpStatus.OK)
      .then(res => {
        expect(res).to.be.an("object");
        done;
      })
      .then(done, done);
  });
});

describe("# GET /api/time-punches/:userId/users - Get all time punches for all users", () => {
  it("Should retrieve an object from the endpoint API", done => {
    request(app)
      .get("/api/users")
      .then(res => {
        locationId = Object.keys(res.body)[0];
        userId = Object.keys(res.body[locationId])[0];

        request(app)
          .get(`/api/time-punches/${userId}`)
          .then(res => {
            expect(res).to.be.an("object");
            done;
          });
      })
      .then(done, done);
  });
});
