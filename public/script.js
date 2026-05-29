const form = document.getElementById("ticket-form");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const artist = document.getElementById("artist").value;
  const ticketType = document.getElementById("ticketType").value;
  const quantity = Number(document.getElementById("quantity").value);

  const response = await fetch("/tickets/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ artist, ticketType, quantity }),
  });

  const data = await response.json();

  result.classList.remove("hidden");

  if (!response.ok) {
    result.innerHTML = `<p class="error">${data.error}</p>`;
    return;
  }

  result.innerHTML = `
    <h2>Resultado</h2>
    <p><strong>Artista:</strong> ${data.artist}</p>
    <p><strong>Entrada:</strong> ${data.ticketType}</p>
    <p><strong>Cantidad:</strong> ${data.quantity}</p>
    <p><strong>Precio unitario:</strong> $${data.unitPrice}</p>
    <p class="total"><strong>Total:</strong> $${data.total}</p>
  `;
});