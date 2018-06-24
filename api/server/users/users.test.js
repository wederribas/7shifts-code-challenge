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
