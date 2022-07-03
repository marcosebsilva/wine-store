import sizes from "../../src/styles/sizes";

describe('E2E Any device', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
    cy.viewport(sizes.mobileSmall, 1000);
  });

  it('Update products when clicking on price filter', () => {
    expect(true).to.be.false
  });

  it('Contains pagination elements to update products', () => {
    expect(true).to.be.false
  });
})