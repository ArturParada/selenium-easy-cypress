describe('SimpleFromDemo', () => {

    const value = [
        {
            a: 12,
            b: 3,
            result: 15,
        },
        {
            a: "!",
            b: "X",
            result: NaN
        }
    ];

    it('Fill one input', () => {
        cy.visit("/basic-first-form-demo.html");
        cy.get("#user-message").type("Some Message");
        cy.get("button").contains("Show Message").click();
    });

    value.forEach((data) => {
        it(`Send two values (${data.a}, ${data.b}) and check the results`, () => {
            cy.visit("/basic-first-form-demo.html");
            cy.get("#user-message").type("Some Message");
            cy.get("button").contains("Show Message").click();
            cy.get("#value1").type(data.a);
            cy.get("#value2").type(data.b);
            cy.get("#gettotal button").click();
            cy.get('#displayvalue').then(($result) => {
                if (typeof data.result === "number") {
                    cy.wrap($result).invoke("text").should("include", data.result);
                } else {
                    cy.wrap($result).invoke("text").should("include", NaN);
                }
            });

        });
    });
});