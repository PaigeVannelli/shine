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
    .visit('http://localhost:3000/')
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

describe('Form View', () => {
  before(() => {
    cy.intercept('http://localhost:5000/api/v1/posts', {fixture: 'posts.json'})
    .visit('http://localhost:3000/')
    .get('[data-cy=add-post-button]')
    .click()
  });

  it('Should display the add post form when the add post button is clicked', () => {
    cy.get('section')
    .contains('New Post')
    .get('input')
    .should('be.visible')
    .get('textarea')
    .should('be.visible')
    .get('[data-cy=form-submit-button]')
    .contains('Share')
  })

  it('Should display the home page when the X is clicked', () => {
    cy.get('[data-cy=close-button]')
    .click()
    .get('[data-cy=all-posts-section]')
    .children()
    .should('have.length', 2)
    .last()
    .contains('Jedi')
  })
});

describe('Form Functionality', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:5000/api/v1/posts', {fixture: 'updatedPosts.json'})
    .visit('http://localhost:3000/new-post')
  });

  it('Should allow the user to add a new post', () => {
    cy.get('input')
    .type('Test title')
    .get('textarea')
    .type('Test content')
    .get('[data-cy=form-submit-button]')
    .click()
    .get('[data-cy=add-post-button]')
    .click()
    .visit('http://localhost:3000/')
    .get('[data-cy=all-posts-section]')
    .children()
    .should('have.length', 3)
    .last()
    .contains('Test')
  })

  it('Should not allow user to click the post submit button unless both fields are filled out', () => {
    cy.get('input')
    .type('Test title')
    .get('[data-cy=form-submit-button]')
    .should('be.disabled')
    .get('input')
    .clear()
    .get('textarea')
    .type('Test content')
    .get('[data-cy=form-submit-button]')
    .should('be.disabled')
    .get('input')
    .type('Test title')
    .get('[data-cy=form-submit-button]')
    .should('not.be.disabled')
  })
})

describe('Expanded Post View', () => {
  before(() => {
    cy.intercept('http://localhost:5000/api/v1/posts', {fixture: 'posts.json'})
    .visit('http://localhost:3000/')
  });

  it('Should not display a detailed post view when post is clicked on', () => {
    cy.get('[data-cy=expanded-view-button]')
    .first()
    .click()
    .get('[data-cy=replies-section]')
    .children()
    .should('have.length', 2)
    .first()
    .contains("Just knowing")
  })

  it.only('Should prompt a user to leave a reply if there are no replies', () => {
    cy.get('[data-cy=expanded-view-button]')
    .last()
    .click()
    .get('[data-cy=add-reply-prompt]')
    .contains("Add a comment below!")
  })

})