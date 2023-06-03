class RadioButtonPo {
    get radioGendersSelectorElement() {
        return cy.get("[name='optradio']")
    }

    get chceckedValueBtnElement() {
        return cy.get("button#buttoncheck")
    }

    get checkedValueElement() {
        return cy.get("p.radiobutton")
    }

    get radioGendersSelectorGroupElement() {
        return cy.get("[name='gender']")
    }

    get ageGroupElement() {
        return cy.get("[name='ageGroup']")
    }

    // get getValuesBtnElement

    clickCheckedValueBtn() {
        this.chceckedValueBtnElement.click()
    }

    assertValueChecked(gender) {
        this.checkedValueElement.should('have.text', gender)

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
            this.ageGroupElement.eq(1).click()
        }
    }

    goRadiobuttonDemoPage() {
        cy.visit("/basic-radiobutton-demo.html")
    }
}

export default new RadioButtonPo()