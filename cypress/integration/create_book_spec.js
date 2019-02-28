describe('Test homepage', function() {
  beforeEach(function () {
    // reset and seed the database prior to every test
    cy.exec('rake db:reset', { failOnNonZeroExit: false })
  })

  it('fills and confirms form', function() {
    cy.visit('localhost:3000')
    cy.contains('Create new book').click()
    cy.get('#book_title').type('Title')
    cy.get('#book_description').type('Description')
    cy.get('#book_rating').type('5')
    cy.get('[type="submit"]').click()
  })
})