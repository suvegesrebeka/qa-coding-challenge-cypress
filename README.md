# Ottonova QA Coding Challenge - Cypress

## Project Description

This is a QA automation test suite for the Ottonova online tariff calculator and Pokemon API tests. The project demonstrates end-to-end testing using **Cypress** with TypeScript, focusing on testing the insurance tariff calculation workflow.

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ottonova/qa-coding-challenge-cypress.git
cd qa-coding-challenge-cypress
```

2. Install dependencies:

```bash
npm install
```

### Running Tests

**Headless mode (CI/CD):**

```bash
npm run test
# or
npx cypress run
```

**Interactive mode (development):**

```bash
npx cypress open
```

**Run specific test:**

```bash
npx cypress run --spec "cypress/e2e/ui/tariffCalculator.cy.ts"
```

### Project Structure

```
cypress/
├── e2e/               # End-to-end tests
│   ├── api/          # API tests
│   └── ui/           # UI tests
├── pages/            # Page Object classes
├── support/          # Custom commands and helpers
│   ├── commands.ts   # Cypress custom commands
│   └── selectors/    # Element selectors
└── fixtures/         # Test data
```

### Configuration

- **cypress.config.ts**: Main Cypress configuration
- **tsconfig.json**: TypeScript configuration
- **.github/workflows/main.yml**: Automated testing on push, PR, and schedule

## Technologies

- **Cypress 15.9.0** - E2E Testing Framework
- **TypeScript** - Type-safe automation code
- **Page Object Model** - Test structure pattern
- **GitHub Actions** - CI/CD pipeline
