import testSelectors from "../fixtures/test_selectors";

describe('E2E Any device', () => {
    beforeEach(() => {
      cy.visit('localhost:3000');
  });

  it('Redirects to /loja when entering index', () => {
    cy.url()
      .should('include', '/loja');
  });
  it('Contains a toggable cart', () => {
    cy.getTestId(testSelectors.cartContainer)
      .should('not.be.visible');

    cy.getTestId(testSelectors.cartToggleButton)
      .click();

    cy.getTestId(testSelectors.cartContainer)
      .should('be.visible');

    cy.getTestId(testSelectors.cartCloseButton)
      .click();

    cy.getTestId(testSelectors.cartContainer)
      .should('not.be.visible');
  });
  it('The cart starts empty', () => {
    cy.getTestId(testSelectors.cartToggleButton)
      .click();

    cy.contains('Total: R$0,00');
  });
  it('Contains a input to search for items', () => {
    cy.get('input')
      .type('quinta{enter}')

    cy.getTestId(testSelectors.productCard)
      .each((card) => {
        cy.wrap(card)
          .contains( /quinta/gi)
      });
  });
  it('Render some product card', () => {
    cy.getTestId(testSelectors.productCard);
  });
  it('It is possible to add item to Cart', () => {
    cy.getTestId(testSelectors.productCard)
      .contains(/adicionar/i)
      .click();

    cy.getTestId(testSelectors.cartCount)
      .should('have.text', '1');
  });
  it('The cart persists when page reloads', () => {
    cy.clearLocalStorage();

    cy.getTestId(testSelectors.productCard)
      .contains(/adicionar/i)
      .click();

    cy.reload();

    cy.getTestId(testSelectors.cartCount)
      .should('have.text', '1');
  });
  it('Contains a display of the total items amount found', () => {
    cy.getTestId(testSelectors.totalProductCount)
      .should('have.text', '62 produtos encontrados');
  });
  it('Redirects to product page when clicking on product card', () => {
    cy.getTestId(testSelectors.productCard)
      .first()
      .click()

    cy.contains(/vinhos/i)
      
  })
})