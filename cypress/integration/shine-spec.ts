describe('Loading Page View', () => {
  it('Should display a loading page appears before data is fetched', () => {
    cy.intercept('https://shine-api.herokuapp.com/api/v1/posts', {
      body: {"posts": []}
    })
    cy.visit('http://localhost:3000/')
    .get('section')
    .contains('in Engineering')
  });
});

describe('Main Page View', () => {
  before(() => {
    cy.intercept('https://shine-api.herokuapp.com/api/v1/posts', {fixture: 'posts.json'})
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
    cy.get('[data-cy=search-input]')
    .should('be.visible')
  })

  it('Should display the nav menu', () => {
    cy.get('[data-cy=nav-bar]')
    .children()
    .should('have.length', 5)
  })
});

describe('Form View', () => {
  before(() => {
    cy.intercept('https://shine-api.herokuapp.com/api/v1/posts', {fixture: 'posts.json'})
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

describe('New Post Functionality', () => {
  beforeEach(() => {
    cy.intercept('https://shine-api.herokuapp.com/api/v1/posts', {fixture: 'updatedPosts.json'})
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
  beforeEach(() => {
    cy.intercept('https://shine-api.herokuapp.com/api/v1/posts', {fixture: 'posts.json'})
    .intercept('https://shine-api.herokuapp.com/api/v1/posts/1001', {fixture: 'replies.json'})
    .intercept('https://shine-api.herokuapp.com/api/v1/posts/1002', {fixture: 'emptyReplies.json'})
    .visit('http://localhost:3000/')
  });

  it('Should display the post details', () => {
    cy.get('[data-cy=expanded-view-button]')
    .first()
    .click()
    .get('h1')
    .contains('here')
  })

  it('Should displays post replies', () => {
    cy.get('[data-cy=expanded-view-button]')
    .first()
    .click()
    .get('[data-cy=replies-section]')
    .children()
    .should('have.length', 2)
    .first()
    .contains("Just knowing")
  })

  it('Should prompt a user to leave a reply if there are no replies', () => {
    cy.get('[data-cy=expanded-view-button]')
    .last()
    .click()
    .get('[data-cy=add-reply-prompt]')
    .contains("Add a comment below!")
  })

  it('Should allow user to return to the main page', () => {
    cy.get('[data-cy=expanded-view-button]')
    .first()
    .click()
    .get('[data-cy=expanded-post-back-button]')
    .click()
    .get('[data-cy=all-posts-section]')
    .children()
    .should('have.length', 2)
    .last()
    .contains('Jedi')
  })
})

describe('New Reply Functionality', () => {
  before(() => {
    cy.intercept('https://shine-api.herokuapp.com/api/v1/posts/1001', {fixture: 'replies.json'})
    .visit('http://localhost:3000/1001')
  });

  it('Should allow the user to add a new reply', () => {
    cy.get('[data-cy=reply-input]')
    .type('Test reply')
    .intercept('https://shine-api.herokuapp.com/api/v1/posts/1001', {fixture: 'testReplies.json'})
    .get('[data-cy=reply-button]')
    .click()
    .get('[data-cy=replies-section]')
    .children()
    .last()
    .contains('Test reply')
  })

  it('Should not allow user to click the reply submit button unless reply field is filled out', () => {
    cy.get('[data-cy=reply-input]')
    .clear()
    .get('[data-cy=reply-button]')
    .should('be.disabled')
  })
})

describe('Search Functionality', () => {
  before(() => {
    cy.intercept('https://shine-api.herokuapp.com/api/v1/posts', {fixture: 'posts.json'})
    .visit('http://localhost:3000/')
  });

  it('Should allow the user to search posts by title, content or author', () => {
    cy.get('[data-cy=search-input]')
    .type('You are all')
    .get('[data-cy=search-button]')
    .click()
    .get('[data-cy=all-posts-section]')
    .children()
    .should('have.length', 1)
    .contains("You are all")
  })

  it('Should show all posts if no posts meet search criteria', () => {
    cy.get('[data-cy=search-input]')
    .type('thisdoesnotwork')
    .get('[data-cy=search-button]')
    .click()
    .get('[data-cy=all-posts-section]')
    .children()
    .should('have.length', 2)
    .last()
    .contains('Jedi')
  })

  it('Should show all posts if searchbar is clear', () => {
    cy.get('[data-cy=search-input]')
    .type('You are all')
    .get('[data-cy=search-button]')
    .click()
    .get('[data-cy=all-posts-section]')
    .children()
    .should('have.length', 1)
    .get('[data-cy=search-input]')
    .clear()
    .get('[data-cy=search-button]')
    .click()
    .get('[data-cy=all-posts-section]')
    .children()
    .should('have.length', 2)
  })
})

