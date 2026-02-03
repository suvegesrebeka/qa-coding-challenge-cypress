/// <reference path="./index.d.ts" />

Cypress.Commands.add("acceptCookies", () => {
  cy.get('[data-action-type="accept"]').click();
});
