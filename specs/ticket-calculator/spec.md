# Specification: Concert Ticket Calculator

## Goal

Build a small web application that calculates the final price of concert tickets.

The system must allow a user to select an artist, choose a ticket type, enter a quantity, and receive the calculated total price.

## Functional Requirements

### FR-01: Calculate ticket price

The system must calculate the total ticket price based on:

- artist
- ticket type
- quantity

The available ticket types are:

- GENERAL: 50000
- CAMPO: 80000
- VIP: 120000

Formula:

total = unitPrice * quantity

### FR-02: Validate artist

The artist field must be required.

If the artist is empty, the system must return an error.

### FR-03: Validate ticket type

The ticket type must be one of the allowed values:

- GENERAL
- CAMPO
- VIP

If the ticket type is invalid, the system must return an error.

### FR-04: Validate quantity

The quantity must be greater than zero.

If the quantity is zero or negative, the system must return an error.

### FR-05: Health check

The system must expose a health endpoint to verify that the API is running.

## API Contract

The API contract is documented in `openapi.yaml`.

Main endpoints:

- GET /health
- POST /tickets/calculate

## Acceptance Criteria

- The user can access the frontend from the browser.
- The user can calculate a ticket price successfully.
- Invalid input returns a controlled error.
- Automated tests validate the main business rules.
- The CI pipeline runs tests and build automatically on every push.