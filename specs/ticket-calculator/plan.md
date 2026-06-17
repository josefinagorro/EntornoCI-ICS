# Implementation Plan: Concert Ticket Calculator

## Technical Stack

- Node.js
- TypeScript
- Express
- HTML/CSS/JavaScript frontend
- Jest
- Supertest
- GitHub Actions
- OpenAPI

## Architecture

The project is organized into three main parts:

1. Frontend served from the `public/` folder.
2. Express API defined in `src/app.ts`.
3. Business logic defined in `src/ticketCalculator.ts`.

## Implementation Strategy

### Step 1: Define the specification

The expected behavior is described in:

- `specs/concert-ticket-calculator/spec.md`
- `openapi.yaml`

### Step 2: Implement the business logic

The ticket calculation rules are implemented in:

- `src/ticketCalculator.ts`

### Step 3: Expose the API

The API endpoints are implemented in:

- `src/app.ts`

### Step 4: Add frontend

The user interface is implemented in:

- `public/index.html`
- `public/styles.css`
- `public/script.js`

### Step 5: Validate with tests

Automated tests are implemented in:

- `tests/app.test.ts`

The tests validate both:

- business logic
- API integration

### Step 6: Run CI pipeline

The CI pipeline is defined in:

- `.github/workflows/ci.yml`

The pipeline runs:

- dependency installation
- automated tests
- TypeScript build

## CI/CD Relation

This plan supports Continuous Integration because every relevant change can be pushed to GitHub and automatically validated by the CI pipeline.