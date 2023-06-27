import dropDownPO from "../support/PageObjects/dropDownPO";
describe('Drop down test', () => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]

    const towns = ["New York", "Ohio", "California", "Florida"]

    beforeEach(() => {
        dropDownPO.goBasicSelectDropdownDemoPage()
    })
    it('Day select', () => {
        days.forEach((day) => {
            dropDownPO.selectDayFromDropdown(day)
            dropDownPO.recaivedSingleMessage(day)
        })

    });
    it('Changing single town', () => {
        towns.forEach(town => {
            dropDownPO.selectCountry(town)
            dropDownPO.clickFirstSelectedBtnElement()
            dropDownPO.recivedMultipleMessage(town)
        })
    });
    it('Select multiple towns', () => {
        dropDownPO.selectMultipleCountry(towns)
        dropDownPO.clickGetAllSelectedBtn()

    });
});