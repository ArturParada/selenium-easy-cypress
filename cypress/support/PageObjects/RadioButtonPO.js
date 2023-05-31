class RadioButtonPo {
    get radioGendersSelector() {
        return cy.get("[name='optradio']")
    }
    get getChceckedValueBtnElement() {
        return cy.get("button#buttoncheck")
    }
    get checkedValueElement() {
        return cy.get("p.radiobutton")
    }
    clickCheckedValueBtn() {
        this.getChceckedValueBtnElement.click()
    }
    assertValueChecked(gender) {
        this.checkedValueElement.should('have.text', gender)

    }

    selectSinglegender(gender) {
        this.radioGendersSelector.invoke("attr", "val").contains(gender).click()
    }

    goRadiobuttonDemoPage() {
        cy.visit("/basic-radiobutton-demo.html")
    }
}

export default new RadioButtonPo()