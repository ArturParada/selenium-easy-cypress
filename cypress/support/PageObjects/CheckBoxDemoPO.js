class CheckBoxDemoPO {
    get checkboxInputElement() {
        return cy.get("input#isAgeSelected")
    }
    get receivedMessageElement() {
        return cy.get('#txtAge')
    }
    get checkAllBtnElement() {
        return cy.get('input#check1')
    }

    get findAllCheckboxElement() {
        return cy.get("input.cb1-element")
    }

    selectMultiCheckboxe(value) {

        this.findAllCheckboxElement.eq(value).click()
    }

    checkAllBtnClick() {
        this.checkAllBtnElement.click()
    }

    receivedMessageOnBtn(text) {
        this.checkAllBtnElement.should('have.value', text)
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
