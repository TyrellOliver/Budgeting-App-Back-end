const request = require("supertest");
const transactionsData = require("../models/transactionsData");
const app = require("../app");

describe("GET /transactions", () => {
  it("should return the transactions array", async () => {
    const response = await request(app).get("/transactions");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(transactionsData);
  });
});
