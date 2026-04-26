describe('Login Page', () => {
  it('loads page', () => {
    cy.visit('/login')
    cy.contains('Login')
  })

  it('fails login', () => {
    cy.intercept('POST', '/api/v1/auth/login', {
      statusCode: 401,
    })

    cy.visit('/login')

    cy.get('input[type="email"]').type('test@test.com')
    cy.get('input[type="password"]').type('wrong')

    cy.get('form').submit()

    cy.contains('error')
  })

  it('successful login redirects', () => {
    cy.intercept('POST', '/api/v1/auth/login', {
      statusCode: 200,
      body: { token: 'abc' },
    })

    cy.visit('/login')

    cy.get('input[type="email"]').type('test@test.com')
    cy.get('input[type="password"]').type('123456')

    cy.get('form').submit()

    cy.url().should('include', '/home')
  })
})