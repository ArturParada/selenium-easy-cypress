class DropDownPO {
    get singleDropdownElement() {
        return cy.get('select#select-demo')
    }

    get singleMessageElement() {
        return cy.get('p.selected-value')
    }

    recaivedSingleMessage(value) {
        this.singleMessageElement.should("have.text", `Day selected :- ${value}`)
    }

    selectDayFromDropdown(value) {
        this.singleDropdownElement.select(value)
    }

    goBasicSelectDropdownDemoPage() {
        cy.visit("/basic-select-dropdown-demo.html")
    }
}
export default new DropDownPO()