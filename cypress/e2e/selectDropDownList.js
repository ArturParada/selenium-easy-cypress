import dropDownPO from "../support/PageObjects/dropDownPO";
describe('Drop down test', () => {
    beforeEach(() => {
        dropDownPO.goBasicSelectDropdownDemoPage()
    })
    it('Day selec', () => {
        const day = "Monday"
        dropDownPO.selectDayFromDropdown(day)
        dropDownPO.recaivedSingleMessage(day)
    });
});