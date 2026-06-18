import express from "express";
import path from "path";
import { calculateTicketPrice, TicketType } from "./ticketCalculator";

export const app = express();

app.use(express.json());

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

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