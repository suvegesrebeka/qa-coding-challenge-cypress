/// <reference path="./index.d.ts" />

Cypress.Commands.add("acceptCookies", () => {
  cy.document().then((doc) => {
    const aside = doc.querySelector("aside#usercentrics-cmp-ui");
    if (aside?.shadowRoot) {
      const buttons = Array.from(aside.shadowRoot.querySelectorAll("button"));
      const acceptBtn = buttons.find((btn) =>
        btn.textContent?.includes("Alles akzeptieren"),
      );
      if (acceptBtn) {
        (acceptBtn as HTMLButtonElement).click();
      }
    }
  });
});
