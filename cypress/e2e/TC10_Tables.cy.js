describe('Handle Tables', () => {

    beforeEach('Login', () => {
        cy.visit("https://galaxydigital-qa-uatx.unqork.io/app/onboarding-portal-ui/#/display/6578157b68cfaff1510be164");
        cy.get("#username").type("aravinth.s+support2@aidenai.com");
        cy.get("#password").type("Unqork@123");
        cy.get("[type='submit']").click();
        cy.wait(5000)


    })


    it('Check Number Rows & Columns', () => {

        //Verifying no. of Rows in the table
        cy.get("#jsGrid_vgDataTeamWorkbasket>div>table>tbody>tr").should('have.length', '10');

        //Verifying No. of columns
        cy.get("#jsGrid_vgDataTeamWorkbasket>div>table>tr>th").should("have.length", '9');

    })

    it('Check cell data from specific row & Column', () => {

        //To fetch the value from 5th row and 3rd column and to verify
        cy.get("#jsGrid_vgDataTeamWorkbasket>div>table>tbody>tr:nth-child(5)>td:nth-child(3)")
            .contains("Maids Inc.");


    })


    it('Read all the rows & Columns data in the first page', () => {

        cy.get("#jsGrid_vgDataTeamWorkbasket>div>table>tbody>tr")
            .each(($row, index, $rows) => {

                cy.wrap($row).within(() => {

                    cy.get('td').each(($col, index, $cols) => {
                        cy.log($col.text());
                    })
                })

            })
    })


    it.only('Pagination', () => {

        //find total pages -logic
        /*let totalPages;
      
            cy.get(".col-sm-6.text-end").then((e)=>{
                let mytext=e.text();
                totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
                cy.log("total pages:"+totalPages);
            })
       
        cy.log("Total Number of pages====>"+totalPages); // not working
                              
        //find total pages - done
        */
        let totalPages = 5;
        for (let p = 1; p <= totalPages; p++) {
            if (totalPages > 1)   //if(parseInt(totalPages)>1)
            {
                cy.log("Active page====>:" + p)
                cy.get("div[aria-label='Pagination']>span:nth-child(" + p + ")").click();
                cy.wait(3000);

                cy.get("#jsGrid_vgDataTeamWorkbasket>div>table>tbody>tr")
                    .each(($row, indiex, $rows) => {

                        cy.wrap($row).within(() => {
                            cy.get('td:nth-child(4)').then((e) => {
                                cy.log(e.text());//Email
                            })

                        })
                    })


            }
        }


    })






})