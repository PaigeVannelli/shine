describe('Loading Page View', () => {
  it('Should display a loading page appears before data is fetched', () => {
    cy.intercept('http://localhost:5000/api/v1/posts', {
      body: {"posts": []}
    })
    cy.visit('http://localhost:3000/')
    .get('section')
    .contains('in Engineering')
  });
});

describe('Main Page View', () => {
  before(() => {
    // cy.intercept('http://localhost:5000/api/v1/posts', {fixture: 'posts.json'})
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
    cy.get('[data-cy=searchbar-input]')
    .should('be.visible')
    //check for the icon file name is visible 
  })

  it('Should display the nav menu', () => {
    cy.get('[data-cy=nav-bar]')
    .children()
    .should('have.length', 5)
  })
});

describe('Form View and Functionality', () => {
  before(() => {
    cy.intercept('http://localhost:5000/api/v1/posts', {fixture: 'posts.json'})
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=add-post-button]')
    .click()
  });

  it('Should display the add post form when the add post button is clicked', () => {
    cy.get('section')
    .contains('New Post')
    cy.get('input')
    .should('be.visible')
    cy.get('textarea')
    .should('be.visible')
    cy.get('[data-cy=form-submit-button]')
    .contains('Share')
  })

  it('Should allow the user to add a new post', () => {
    cy.get('input')
    .type('Test title')
    cy.get('textarea')
    .type('Test content')
    cy.get('[data-cy=form-submit-button]')
    // .click()
  })
});