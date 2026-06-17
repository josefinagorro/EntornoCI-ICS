"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTicketPrice = calculateTicketPrice;
const ticketPrices = {
    GENERAL: 50000,
    CAMPO: 80000,
    VIP: 120000,
};
function calculateTicketPrice(artist, ticketType, quantity) {
    if (!artist.trim()) {
        throw new Error("Artist is required");
    }
    if (!ticketPrices[ticketType]) {
        throw new Error("Invalid ticket type");
    }
    if (quantity <= 0) {
        throw new Error("Quantity must be greater than zero");
    }
    const unitPrice = ticketPrices[ticketType];
    const total = unitPrice * quantity;
    return {
        artist,
        ticketType,
        quantity,
        unitPrice,
        total,
    };
}
