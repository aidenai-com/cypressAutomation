describe('Alerts', () => {

    //1) Javascript Alert: It will have some text and an ‘OK’ button
    it('JS Alert', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click(); // click for JS Alert

        cy.on('window:alert', (t) => {
            expect(t).to.contain('I am a JS Alert');
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })


    //2)a- Javascript Confirm: Going with OK

    it('JS Confirm Alert with OK', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click(); // click for JS Confirm Alert

        cy.on("window:confirm", (t) => {
            expect(t).to.equal("I am a JS Confirm");   //verify text on alert 
        });

        cy.get('#result').should('have.text', 'You clicked: Ok')

    })


    //2) b- Going with Cancelling the confirmation pop up
    it('JS Confirm Alert with Cancel', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click(); // click for JS Confirm Alert

        cy.on("window:confirm", (t) => {
            expect(t).to.equal("I am a JS Confirm");   //verify text on pop-up 
        });

        cy.on('window:confirm', () => false);  //accept by Cancel button 
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })


    //3) Javascript Prompt: It will have some text with a text box for user input along with ‘OK’ and ‘Cancel’ buttons.
    it('JS Confirm Alert with Prompt', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
            cy.get("button[onclick='jsPrompt()']").click();
        })

        cy.get('#result').should('have.text', 'You entered: welcome')

    })


    //4) Authenticated Alert
    it('Authenticated alert', () => {

        //Approach 1
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth:
            {
                username: "admin",
                password: "admin"
            }
        }
        );

        //Approach2                                                            
        //        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

        cy.get("div[class='example'] p").should('have.contain', "Congratulations")

    })



})