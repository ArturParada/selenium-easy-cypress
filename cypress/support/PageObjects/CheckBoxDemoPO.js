class CheckBoxDemoPO {
    get checkboxInputElement() {
        return cy.get("input#isAgeSelected")
    }
    get receivedMessageElement() {
        return cy.get('#txtAge')
    }

    receivedMessageShouldBeEqualExpected(checkboxMessage) {
        this.receivedMessageElement.invoke('text').should('contain', checkboxMessage)
    }

    checkSingleInputAndVeryfi() {
        this.checkboxInputElement.check().invoke("prop", "checked").should('be.true')
    }

    goCheckboxDemoPage() {
        cy.visit("/basic-checkbox-demo.html")
    }

}
export default new CheckBoxDemoPO()
