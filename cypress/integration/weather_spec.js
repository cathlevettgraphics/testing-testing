describe('The color picker page Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/weather');
  });

  it('contains a search button', () => {
    cy.contains('search');
  });

  it('contains a input field', () => {
    cy.get('.input').type('berlin').should('have.value', 'berlin');
  });

  it('click the search button', () => {
    cy.contains('search').click();
  });

  it('clicking "color_picker" navigates to color picker page', () => {
    cy.contains('color picker').click();
    cy.url().should('include', '/color-picker');
  });
});
