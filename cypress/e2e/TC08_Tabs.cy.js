describe('Tabs', () => {

    //Deleting the target attribute and clicking on the link
    it('approach1', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")

        // delete target attribute with invoke for link
        cy.get(".example>a").invoke('removeAttr', 'target').click()

        // verify tab url
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        //Shift to parent window
        cy.wait(5000);
        cy.go('back');

    })


    //Fetching url from the property of the element
    it('appraoch2', () => {
        // url launch
        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get('.example > a').then((e) => {
            let url = e.prop('href')
            cy.log(url);
            cy.visit(url);
        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        // shift to parent window
        cy.wait(5000);
        cy.go('back');
    });





})