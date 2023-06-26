class DropDownPO {
    get singleDropdownElement() {
        return cy.get('select#select-demo')
    }

    get singleMessageElement() {
        return cy.get('p.selected-value')
    }

    get multipleListElement() {
        return cy.get('select#multi-select > option')
    }
    get mulitipleMessageElement() {
        return cy.get('p.getall-selected')
    }

    get firstSelectedBtnElement() {
        return cy.get('button#printMe')
    }

    get getAllSelectedBtnElement() {
        return cy.get('button#printAll')
    }

    clickGetAllSelectedBtn() {
        this.getAllSelectedBtnElement.click()
    }
    clickFirstSelectedBtnElement() {
        this.firstSelectedBtnElement.click()
    }

    recaivedSingleMessage(value) {
        this.singleMessageElement.should("have.text", `Day selected :- ${value}`)
    }

    selectDayFromDropdown(value) {
        this.singleDropdownElement.select(value)
    }

    selectCountry(value) {
        // this.multipleListElement.select(value)
        this.multipleListElement.each($el => {
            const town = $el.text()
            const townName = value
            if (town === townName) {
                cy.wrap($el).click()

            }
        })

    }

    recivedMultipleMessage(value) {
        this.mulitipleMessageElement.should("have.text", `First selected option is : ${value}`)
    }

    goBasicSelectDropdownDemoPage() {
        cy.visit("/basic-select-dropdown-demo.html")
    }
}
export default new DropDownPO()