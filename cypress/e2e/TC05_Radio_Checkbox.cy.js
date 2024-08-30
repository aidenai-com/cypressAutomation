describe("Radio Buttons and Checkboxes", () => {
    /*
        it("Checking Radio Buttons",()=>{
    
            cy.visit("https://demoqa.com/")
    
            cy.xpath("//h5[contains(text(),'Elements')]").click();
            cy.xpath("//span[contains(text(),'Radio Button')]").click()
    
            
            //visibility of radio buttons
            cy.get("#yesRadio").should('exist')
            cy.get("#impressiveRadio").should('exist')
    
    
    
            //selecting radio buttons
            cy.get("#yesRadio").click().should('be.checked')
            cy.get("#impressiveRadio").should('not.be.checked')
    
            cy.get("#impressiveRadio").check().should('be.checked')
            cy.get("#yesRadio").should('not.be.checked')
    
        })
    */

    it("Checking Check boxes", () => {

        cy.visit("https://the-internet.herokuapp.com/")

        cy.xpath("//a[contains(text(),'Checkboxes')]").click()

        //Visibility of the element
        cy.xpath("//*[@id='checkboxes']/input[1]").should('be.visible')

        //Selecting check box
        cy.xpath("//*[@id='checkboxes']/input[1]").check().should('be.checked')

        //Unselecting checkbox
        cy.xpath("//*[@id='checkboxes']/input[1]").uncheck().should('not.be.checked')



    })

})