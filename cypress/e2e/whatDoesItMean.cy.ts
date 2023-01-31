describe('What does it mean application ', () => {
  it('renders input and result components ', () => {
    cy.visit('http://localhost:3000');

    cy.get('h1').should('contain', 'What does it mean?');
    cy.get('[data-testid="search-input"]').should('be.visible');
    cy.get('[data-testid="result"]').should('be.visible');
    cy.get('[data-testid="info"]').should('be.visible');
  });

  it('searches meaning for a word and renders meaning if found ', () => {
    cy.intercept('**/laugh').as('getMeaning');

    cy.visit('http://localhost:3000');

    cy.get('[data-testid="search-input"]').type('laugh');

    cy.wait('@getMeaning');

    cy.get('[data-testid="meaning"]').should('be.visible');
    cy.get('[alt="mega-phone"]').should('be.visible');
  });

  it('searches meaning for a word and renders error if not found ', () => {
    cy.intercept('**/cern').as('getMeaning');

    cy.visit('http://localhost:3000');

    cy.get('[data-testid="search-input"]').type('cern');

    cy.wait('@getMeaning');

    cy.get('[data-testid="meaning"]').should('not.exist');

    cy.get('[data-testid="not-found"]').should('be.visible');
    cy.get('[data-testid="not-found"]').should(
      'contain',
      `We couldn't find meaning for the word! Type something new...`
    );
  });
});
