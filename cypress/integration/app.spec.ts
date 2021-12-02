describe('Application', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('has proper title', () => {
    cy.get('title').contains('Psychological test')
  })
})