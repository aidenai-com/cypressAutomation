import 'cypress-iframe'

describe('handling iframes', (() => {

    it('appraoch 1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.wait(4000)

        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        cy.wait(3000)
        iframe.clear().type("Welcome");

        //to make the content Bold
        //    iframe.clear().type("Welcome {ctrl+a}");
        //   cy.get("[aria-label='Bold']").click();


    })

    it('appraoch2 - using custom command', () => {
        cy.visit('http://the-internet.herokuapp.com/iframe');

        //cy.getIframe('#mce_0_ifr').clear().type('Welcome');

        cy.getIframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click();

    })

    it('appraoch3 - using cypress iframe plugin', () => {

        cy.visit('http://the-internet.herokuapp.com/iframe');
        cy.frameLoaded('#mce_0_ifr');

        //cy.iframe('#mce_0_ifr').clear().type("Welcome");


        cy.iframe().find('body.mce-content-body.mce-content-readonly:nth-child(2) > p:nth-child(1)').clear();
        cy.iframe().find('body.mce-content-body.mce-content-readonly:nth-child(2) > p:nth-child(1)').type("Welcome")
        //   cy.iframe('#mce_0_ifr').clear();
        //   cy.iframe('#mce_0_ifr').type("Welcome {ctrl+a}")
        //   cy.get("[aria-label='Bold']").click();

    })


    it('approach4 - using cypress iframe plugin', () => {


        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.wait(4000)

        cy.get('iframe#mce_0_ifr').then($iframe => {
            const body = $iframe.contents().find('body#tinymce');

            /*
            const body = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);
*/


            cy.wrap(body)
                .should('be.visible')
                .type('{selectall}{backspace}')
                .type('welcome')
            cy.wait(4000)

            /*
                // Wrap the body element to continue chaining Cypress commands
                cy.wrap(body)
                    .find('p')
                    .clear() // This will attempt to clear the content inside the <p> tag
                    .type('Welcome'); // This can be used to type an empty string, effectively clearing it
    
                    */
        });

    })


}))