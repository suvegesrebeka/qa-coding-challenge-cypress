/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to accept cookies in fee calculator
     * @example cy.acceptCookies()
     */
    acceptCookies(): Chainable<JQuery<HTMLElement>>;
  }
}
