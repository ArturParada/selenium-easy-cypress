import dropDownPO from "../support/PageObjects/dropDownPO";
describe('Drop down test', () => {
    beforeEach(() => {
        dropDownPO.goBasicSelectDropdownDemoPage()
    })
    it('Day select', () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]
        days.forEach((day) => {
            dropDownPO.selectDayFromDropdown(day)
            dropDownPO.recaivedSingleMessage(day)
        })

    });
});