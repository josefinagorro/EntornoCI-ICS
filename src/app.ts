import express from "express";
import { calculateTicketPrice, TicketType } from "./ticketCalculator";

export const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/tickets/calculate", (req, res) => {
  try {
    const { artist, ticketType, quantity } = req.body;

    const result = calculateTicketPrice(
      artist,
      ticketType as TicketType,
      Number(quantity)
    );

    res.json(result);
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});