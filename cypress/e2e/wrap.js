describe('testowy', () => {
    it('wrpa test', () => {
        cy.visit("/")
        cy.get("#btn_basic_example").then(($btn) => {

            cy.wrap($btn).invoke("text").should("contain", "Start")

        })
    });
    it('Fill one input', () => {
        cy.visit("/basic-first-form-demo.html")
        cy.get("#user-message").type("Some Message")
        cy.get("button").contains("Show Message").click()
    });
    it('Send two values and chacke the results', () => {
        const a = 1
        const b = 2
        cy.visit("/basic-first-form-demo.html")
        cy.get("#user-message").type("Some Message")
        cy.get("button").contains("Show Message").click()
        cy.get("#value1").type(a)
        cy.get("#value2").type(b)
        cy.get("#gettotal button").click()
        cy.get('#displayvalue').invoke("text").should("eq", `${a + b}`)

    });
});