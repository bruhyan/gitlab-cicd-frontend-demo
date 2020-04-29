describe('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('fill up form', () => {
    cy.wait(2000);
    cy.get('[data-cy=cy-email-input]').type('hello@gmail.com', { delay: 100 });
    cy.wait(2000);
    cy.get('[data-cy=cy-name-input]').type('bob tan', { delay: 100 });
    cy.wait(2000);
    cy.get('[data-cy=cy-form-submit]').click();
    cy.wait(2000);
  })
})