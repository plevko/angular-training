describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('TODOs').click();

    cy.get('button').first().should('not.be.disabled');
    cy.get('button').first().click();
    cy.get('button').first().should('be.disabled');

    cy.get('a').last().click();

    cy.get('h2').should('contain.text', 'Capco TODO list');
  });
});
