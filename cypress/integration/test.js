describe('MyWishList', () => {
  it('Visit Home Page', () => {
    cy.visit('/')
  })
  it('Find a product', () => {
    cy.get('.nPgnB div:first')
  })

  it('Add item to my wish list', () => {
    cy.get('.nPgnB div:first a:first').click()
    cy.contains('.dziiOe span', '1')
    cy.visit('/wishlist')
  })
})
