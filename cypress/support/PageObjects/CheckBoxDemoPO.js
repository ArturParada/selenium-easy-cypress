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

    checkSingleInput() {
        this.checkboxInputElement.check()
    }

    goCheckboxDemoPage() {
        cy.visit("/basic-checkbox-demo.html")
    }

}
export default new CheckBoxDemoPO()
