describe('Feedback Loop', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });
});

describe('Loading Page View', () => {
  it('Should display a loading page appears before data is fetched', () => {
    cy.intercept('http://localhost:5000/api/v1/posts', {
      body: {"posts": []}
    })
    cy.visit('http://localhost:3000/')
    .get('h1')
    .contains('Shine')
  });
});

describe('Main Page View', () => {
  before(() => {
    cy.intercept('http://localhost:5000/api/v1/posts', {fixture: 'posts.json'})
    cy.visit('http://localhost:3000/')
  })
  it('Should display all previous posts when users open the app', () => {
    cy.get('[data-cy=all-posts-section]')
    .children()
    .should('have.length', 2)
    .last()
    .contains('Jedi')
  });

  it('Should display a search bar', () => {
    cy.get('[data-cy=searchbar]')
    .contains('Body of your post*')
    cy.get('[data-cy=searchbar]')
    .should('be.visible')
  })

});