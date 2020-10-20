/// <reference types="cypress" />
describe('From input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline Forms',() => {
        cy.get('input[placeholder="Jane Doe"]').type('Andhika Satrio')
        cy.get('[placeholder ="Email"][type="text"]').type('andhikasatriowiratamaxxx@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Using Grid',()=> {
        cy.get('#inputEmail1').type('andhikasatriowiratamaxxx@gmail.com')
        cy.get('#inputPassword2').type('123456789')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })

    it('Basic Form',()=> {
        cy.get('#exampleInputEmail1').type('andhikasatriowiratamaxxx@gmail.com')
        cy.get('#exampleInputPassword1').type('123456789')
        cy.get('.text').contains('Check me out').click()
    })

    it('Form Without Labels',()=>{
        cy.get('[placeholder="Recipients"]').type('Andhika Satrio')
        cy.get('[placeholder="Subject"]').type('Tugas PPL BlackBoxTesting')
        cy.get('[placeholder="Message"').type('Selamat Mengerjakan')
    })

    it('Block Form',()=>{
        cy.get('#inputFirstName').type('Andhika')
        cy.get('#inputLastName').type('Satrio')
        cy.get('#inputEmail').type('andhikasatriowiratamaxxx@gmail.com')
        cy.get('#inputWebsite').type('www.wibusubs.com')
    })

    it('Horizontal Form',()=> {
        cy.get('#inputEmail3').type('andhikasatriowiratamaxxx@gmail.com')
        cy.get('#inputPassword3').type('123456789')
        cy.get('.custom-checkbox').last().click()
    })

});