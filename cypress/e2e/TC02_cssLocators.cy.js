describe('CSSLocators', () => {

    it('CSS Locators One', () => {

        cy.visit("https://cooperators-qa-uatx.unqork.io/#/display/636ab779c134020fdd013ff0")

        cy.wait(3000)

        //CSS with tag & id

        cy.get("button#btnCantFindEvent").should('have.class', "btn btn-link btn-md")


        //CSS with  #id
        cy.get("#btnCantFindEvent").should('have.class', "btn btn-link btn-md")


        // CSS with attribute

        cy.get("[name='btnNext']").should('have.disabled', "disabled")


    })

    it('CSS Locators 2', () => {

        // CSS with class

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.wait(3000)

        cy.get(".orangehrm-login-slot").should('be.visible')



        //Class and Attribute

        cy.get(".oxd-input[name='username']").type("Admin")

    


    })
})