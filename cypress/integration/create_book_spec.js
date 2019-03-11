describe('Test homepage', function() {
  beforeEach(function () {
    // reset and seed the database prior to every test
    cy.exec('rake db:reset', { failOnNonZeroExit: false })
  })

  it('fills and confirms form', function() {
    cy.visit('localhost:3000')
    cy.contains('Create new book').click()
    cy.url().should('contain', '/books/new')
    cy.get('#book_title').type('Title')
    cy.get('#book_description').type('Description')
    cy.get('#book_rating').type('5')
    cy.get('[type="submit"]').click()
    cy.url().should('contain', '/books')
    cy.get('ul > :last-child').should('contain', 'Title')
    cy.get(':last-child > :nth-child(4) > a').click()
    cy.url().should('contain', '/edit')
    cy.get('#book_description').clear().type('new description')
    cy.get('[type="submit"]').click()
    cy.url().should('contain', '/books')
    cy.get('ul > :last-child').should('contain', 'new description')
  })
})