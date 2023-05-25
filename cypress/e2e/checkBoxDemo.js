describe('Checkbox demo', () => {
    beforeEach(() => {
        cy.visit("/basic-checkbox-demo.html")
    })

    it('checkbox checked', () => {
        cy.get("input#isAgeSelected").check()
        cy.get('#txtAge').invoke('text').should('contain', "Success - Check box is checked")
    })


});