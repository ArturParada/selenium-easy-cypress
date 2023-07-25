import dropDownPO from "../support/PageObjects/dropDownPO";

describe('Drop down test', () => {

    // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    // const towns = ["Florida", "New York", "Ohio", "California"]

    beforeEach(() => {
        dropDownPO.goBasicSelectDropdownDemoPage()
        //do sprawdzenia
        cy.fixture(days.json).as('days')
        cy.fixture(towns.json).as('towns')
    })

    it('Day select', () => {
        this.days.forEach((day) => {
            dropDownPO.selectDayFromDropdown(day)
            dropDownPO.recaivedSingleMessage(day)
        })
    });

    it('Changing single town', () => {
        towns.forEach(town => {
            dropDownPO.selectCountry(town)
            dropDownPO.clickFirstSelectedBtnElement()
            dropDownPO.firstSelectedOptionMessage(town)
        })
    });

    it('Select multiple towns', () => {
        for (let i = 0; i < towns.length; i++) {
            dropDownPO.selectMultipleCountry(towns[i])
        }
        dropDownPO.clickGetAllSelectedBtn()
        dropDownPO.recivedMultipleMessage(towns)
    });
});
