"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const ticketCalculator_1 = require("./ticketCalculator");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.static(path_1.default.join(process.cwd(), "public")));
exports.app.get("/", (_req, res) => {
    res.sendFile(path_1.default.join(process.cwd(), "public", "index.html"));
});
exports.app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});
exports.app.post("/tickets/calculate", (req, res) => {
    try {
        const { artist, ticketType, quantity } = req.body;
        const result = (0, ticketCalculator_1.calculateTicketPrice)(artist, ticketType, Number(quantity));
        res.json(result);
    }
    catch (error) {
        res.status(400).json({
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
});
