export type TicketType = "GENERAL" | "CAMPO" | "VIP";

const ticketPrices: Record<TicketType, number> = {
  GENERAL: 50000,
  CAMPO: 80000,
  VIP: 1,
};

export function calculateTicketPrice(
  artist: string,
  ticketType: TicketType,
  quantity: number
) {
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