class RadioButtonPo {
    get radioGendersSelectorElement() {
        return cy.get("[name='optradio']")
    }

    get getChceckedValueBtnElement() {
        return cy.get("button#buttoncheck")
    }

    get checkedValueElement() {
        return cy.get("p.radiobutton")
    }

    get checkedValueGroupElemet() {
        return cy.get("p.groupradiobutton")
    }

    get radioGendersSelectorGroupElement() {
        return cy.get("[name='gender']")
    }

    get ageGroupElement() {
        return cy.get("[name='ageGroup']")
    }

    get getValuesBtnElement() {
        return cy.get("button[onclick='getValues();']")
    }

    clickCheckedValueBtn() {
        this.getChceckedValueBtnElement.click()
    }
    clickGetValueBtn() {
        this.getValuesBtnElement.click()
    }

    assertValueChecked(message) {
        this.checkedValueElement.should('have.text', message)

    }
    assertGroupMessage(message) {
        this.checkedValueGroupElemet.should('have.text', message)

    }

    selectSingleGender(gender) {
        this.radioGendersSelectorElement.invoke("attr", "val").contains(gender).click()
    }

    selectGroupGender(gender) {
        if (gender === "Male") {
            this.radioGendersSelectorGroupElement.eq(0).click()
        }
        else {
            this.radioGendersSelectorGroupElement.eq(1).click()
        }
    }
    selectAgeGroup(ageGroup) {
        if (ageGroup === "0 to 5") {
            this.ageGroupElement.eq(0).click()
        } else if (ageGroup === "5 to 15") {
            this.ageGroupElement.eq(1).click()
        } else if (ageGroup === "15 to 50") {
            this.ageGroupElement.eq(2).click()
        }
    }

    goRadiobuttonDemoPage() {
        cy.visit("/basic-radiobutton-demo.html")
    }
}

export default new RadioButtonPo()