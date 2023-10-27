const request = require("supertest");
const transactionsData = require("../models/transactionsData");
const transactions = require("../app");

describe("Index Route GET /transactions", () => {
  it("should return the transactions array", async () => {
    const response = await request(transactions).get("/transactions");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(transactionsData);
  });
});

describe("Show Route GET /transactions/:id", () => {
  it("should return a specific index in the array", async () => {
    //   const {id}=res.params
    const response = await request(transactions).get("/transactions/0");


    expect(response.status).toBe(200);
    expect(response.body).toEqual(transactionsData[0]);
  });
  it("sends an error when an invalid index is given", async () => {
    const response = await request(transactions).get("/transactions/9001");

    expect(response.status).toBe(404)
    expect(response.body).toBe()
  });
});
