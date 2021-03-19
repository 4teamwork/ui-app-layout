// https://docs.cypress.io/api/introduction/api.html

describe('Dummy', () => {
  it('Renders the title', () => {
    cy.visit('/')
    cy.findByTestId('title').should('have.text', 'Title')
  })
})
