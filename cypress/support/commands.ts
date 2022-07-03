/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      getTestId(value: string): Chainable
    }
  }
}


Cypress.Commands.add('getTestId', (value) => {
  return cy.get(`[data-testid=${value}]`);
})


export {}