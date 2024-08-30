describe('Assertions', () => {
    it('Implicit Assertions', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.url().should('include', 'orangehrmlive.com')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrm')
            .and('not.contain', 'greenhrm') //negitive assertion

        cy.title().should('include', 'Orange')
            .and('eq', 'OrangeHRM')
            .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible') //Logo visible
            .and('exist')  //Logo exists

        cy.xpath('//a').should('have.length', '5') //NoOfLinks

        cy.get("input[placeholder='Username']").type("Admin")  // enter text into username
        cy.get("input[placeholder='Username']").should('have.value', 'Admin') //value check

    })

    it('Explicit Assertions', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type("Admin")  // enter text into username
        cy.get("input[placeholder='Password']").type("admin123")  // enter text into password
        cy.get("button[type='submit']").click()

        let expName = "Данилов Афиноген"
        //Explicit assertions

        cy.get('.oxd-userdropdown-name').then((x) => {

            let actName = x.text()

            //BDD Assertions using 'expect'          
            expect(actName).to.equal(expName)  // should pass

            //expect(actName).to.not.equal(expName) //should fail

            //TDD Assertions using 'assert' 
            assert.equal(actName, expName) //should pass

            //assert.notEqual(actName,expName) // should fail

        })

    })

})
