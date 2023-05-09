describe('Checkbox demo', () => {

    it('Fill one input', () => {
        cy.visit("/basic-checkbox-demo.html")
        cy.get("input#isAgeSelected").check().should("be.checked")
    });
    it('Send two values and chacke the results', () => {


    });
});