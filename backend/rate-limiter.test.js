const request = require("supertest");
const express = require("express");
const rateLimiter = require("./rate-limiter");

let app, server;

beforeAll(() => {
  app = express();
  app.use(rateLimiter);
  app.get("/test", (req, res) => res.json({ success: true }));
  server = app.listen(3000);
});

afterAll(() => {
  server.close(); // Close server to avoid open handles
});

describe("Rate Limiter Middleware", () => {
  test("should return 400 if tenant ID is missing", async () => {
    const res = await request(app).get("/test");
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: "Missing tenant ID" });
  });

  test("should allow requests within the limit", async () => {
    const res = await request(app).get("/test").set("x-tenant-id", "tenant1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ success: true });
  });

  test("should return 429 when rate limit is exceeded", async () => {
    const tenant = "tenant2";
    for (let i = 0; i < 100; i++) {
      await request(app).get("/test").set("x-tenant-id", tenant);
    }
    const res = await request(app).get("/test").set("x-tenant-id", tenant);
    expect(res.status).toBe(429);
    expect(res.body).toEqual({ error: "Rate limit exceeded" });
  });


});
