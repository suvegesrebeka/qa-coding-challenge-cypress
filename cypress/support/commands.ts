/// <reference path="./index.d.ts" />

Cypress.Commands.add("acceptCookies", () => {
  cy.document().then((doc) => {
    const btn = doc
      .querySelector("aside#usercentrics-cmp-ui")
      ?.shadowRoot?.querySelector('[data-action-type="accept"]');
    if (btn) (btn as HTMLButtonElement).click();
  });
});
