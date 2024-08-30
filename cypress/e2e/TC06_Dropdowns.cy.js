describe("Dropdowns", () => {

    // Dropdown with Select option
    it('Dropdown with select', function () {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country')
            .select('France')
            .should('have.value', 'France')
    })

    // Dropdown without Select 
    it('Dropdown without select', function () {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search.select2-search--dropdown').type('Japan').type('{enter}')

        cy.get('#select2-billing_country-container')
            .should('have.text', 'Japan')

    })

    // Dropdown with autosuggestion
    it('Autosuggest dropdown', function () {
        cy.visit('https://www.wikipedia.org/')
        cy.get("#searchInput").type("Delhi")
        cy.get('.suggestion-title').contains('Delhi University').click()
    })

    // Dropdown with dynamic values. E.g when selecting address from Google API
    it('Dynamic dropdown', function () {
        cy.visit('https://www.google.com/')
        cy.get("textarea[name='q']").type('cypress automation');
        cy.wait(3000)


        cy.get("div.wM6W7d>span").each(($el, index, $list) => {
            if ($el.text() == 'cypress automation tool') {
                cy.wrap($el).click()
            }
        })
        cy.get("input[name='q']").should("have.value", "cypress automation tool")

    })



})