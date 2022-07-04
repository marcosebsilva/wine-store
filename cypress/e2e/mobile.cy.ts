import sizes from "../../src/styles/sizes";
import testSelectors from "../fixtures/test_selectors";

describe('E2E Mobile', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
    cy.viewport(sizes.mobileSmall, 1000);
  });

  it('Contains a toggable nav menu', () => {
    cy.getTestId(testSelectors.navMenu)
      .should('not.be.visible');

    cy.getTestId(testSelectors.navMenuToggleButton)
      .click();

    cy.getTestId(testSelectors.navMenu)
      .should('be.visible');

    cy.getTestId(testSelectors.navMenuToggleButton)
      .click();

    cy.getTestId(testSelectors.navMenu)
      .should('not.be.visible');
  });
  it('Contains a button to show more products', () => {
    cy.contains(/mostrar mais/i)
      .click();

    cy.getTestId(testSelectors.productCard)
      .should('have.length', 16);
  });
})