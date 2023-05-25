import CheckBoxDemoPO from "../support/PageObjects/CheckBoxDemoPO";

describe('Checkbox demo', () => {
    beforeEach(() => {
        CheckBoxDemoPO.goCheckboxDemoPage()
    })

    it('checkbox checked', () => {
        CheckBoxDemoPO.checkSingleInputAndVeryfi()
        CheckBoxDemoPO.receivedMessageShouldBeEqualExpected("Success - Check box is checked")
    })


});