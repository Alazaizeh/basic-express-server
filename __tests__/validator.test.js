"use strict";

const supertest = require("supertest");
const { server } = require("../src/server.js");
const request = supertest(server);

describe("validator", () => {
  it("should response with 200 if the name is in the query string", async () => {
    // arrange
    let param = "/person?name=omar";
    let status = 200;
    // act
    const response = await request.get(param);
    // assert
    expect(response.status).toBe(status);
  });
  it("should response with correct output object", async () => {
    // arrange
    let param = "/person?name=omar";
    // act
    const response = await request.get(param);
    // assert
    expect(typeof response.body).toBe("object");
  });
});
