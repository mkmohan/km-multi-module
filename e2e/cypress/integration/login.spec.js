describe('Login', () => {
    const baseUrl = Cypress.config().baseUrl;
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    beforeEach(() => {
        cy.log(`Running tests with baseUrl: ${baseUrl}, username: ${username}, password: ${password}`);
        cy.visit(`${baseUrl}/login`);
    });

    it('Login to herokuapp', () => {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button[type=submit]').click();
        cy.get('h4.subheader').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.')
        cy.get('a[href="/logout"]').click();
        cy.location('pathname').should('eq', '/login');
    });
});
