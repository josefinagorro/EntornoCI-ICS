import http from "http";
import { app } from "../../src/app";

describe("Ticket purchase e2e flow", () => {
  let server: http.Server;
  let baseUrl: string;

  beforeAll((done) => {
    server = app.listen(0, () => {
      const address = server.address();

      if (!address || typeof address === "string") {
        throw new Error("Could not resolve test server address");
      }

      baseUrl = `http://127.0.0.1:${address.port}`;
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  test("serves the site and calculates ticket price through HTTP", async () => {
    const homeResponse = await fetch(`${baseUrl}/`);

    expect(homeResponse.status).toBe(200);
    expect(await homeResponse.text()).toContain("Harry Styles");

    const calculateResponse = await fetch(`${baseUrl}/tickets/calculate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        artist: "Harry Styles",
        ticketType: "VIP",
        quantity: 2,
      }),
    });

    expect(calculateResponse.status).toBe(200);
    await expect(calculateResponse.json()).resolves.toMatchObject({
      artist: "Harry Styles",
      ticketType: "VIP",
      quantity: 2,
      unitPrice: 120000,
      total: 240000,
    });
  });
});
