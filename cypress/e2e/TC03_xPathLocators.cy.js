describe('XPathLocators', () => {

    it('Using Xpaths', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(3000)

        cy.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input").should('have.class', 'oxd-input')

        cy.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/div/div/p[2]").should('have.text', 'Password : admin123')
    })





})