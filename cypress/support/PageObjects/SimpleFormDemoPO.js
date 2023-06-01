class SimpleFormDemoPO {
    get userMessageInputElement() {
        return cy.get("#user-message")
    }
    get showMessageBtnElement() {
        return cy.get("form#get-input>button")
    }
    get recaivedMessageElement() {
        return cy.get("#display")
    }
    get valueFromInputAElement() {
        return cy.get("input#value1")
    }
    get valueFromInputBElement() {
        return cy.get("input#value2")
    }
    get totalBtnElement() {
        return cy.get("#gettotal button")
    }
    get totalSumElement() {
        return cy.get('#displayvalue')
    }

    goSimpleFormDemoPage() {
        cy.visit('/basic-first-form-demo.html')
    }
    typeMessage(message) {
        this.userMessageInputElement.type(message)
    }
    clickShowMessageBtn() {
        this.showMessageBtnElement.click()
    }
    typedMessageshouldBeEqualToSendingMessage(message) {
        this.recaivedMessageElement.should("have.text", message)
    }
    typeValues(valueA, valueB) {
        this.valueFromInputAElement.type(valueA)
        this.valueFromInputBElement.type(valueB)
    }
    clickOnTotalBtn() {
        this.totalBtnElement.click()
    }
    sumAssercion(result) {
        this.totalSumElement.then(($ele) => {
            cy.wrap($ele).invoke("text").should("include", result);
        });
    }

}
export default new SimpleFormDemoPO()
