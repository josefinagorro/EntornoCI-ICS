"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../src/app");
const ticketCalculator_1 = require("../src/ticketCalculator");
describe("Ticket calculator unit tests", () => {
    test("calculates VIP ticket total correctly", () => {
        const result = (0, ticketCalculator_1.calculateTicketPrice)("Harry Styles", "VIP", 2);
        expect(result.total).toBe(240000);
        expect(result.unitPrice).toBe(120000);
    });
    test("throws error when quantity is invalid", () => {
        expect(() => {
            (0, ticketCalculator_1.calculateTicketPrice)("Harry Styles", "GENERAL", 0);
        }).toThrow("Quantity must be greater than zero");
    });
});
describe("Ticket API integration tests", () => {
    test("POST /tickets/calculate returns ticket price", async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .post("/tickets/calculate")
            .send({
            artist: "Harry Styles",
            ticketType: "CAMPO",
            quantity: 3,
        });
        expect(response.status).toBe(200);
        expect(response.body.total).toBe(240000);
    });
    test("POST /tickets/calculate returns 400 for invalid ticket type", async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .post("/tickets/calculate")
            .send({
            artist: "Harry Styles",
            ticketType: "INVALID",
            quantity: 2,
        });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Invalid ticket type");
    });
});
