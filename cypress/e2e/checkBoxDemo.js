import CheckBoxDemoPO from "../support/PageObjects/CheckBoxDemoPO";

describe('Checkbox demo', () => {
    
    beforeEach(() => {
        CheckBoxDemoPO.goCheckboxDemoPage()
    })

    it('After click on single checkbox user should get valid message', () => {
        CheckBoxDemoPO.checkSingleInputAndVeryfi()
        CheckBoxDemoPO.receivedMessageShouldBeEqualExpected("Success - Check box is checked")
    })
    
    it('After click on Check All button , all checkbox should be checked', () => {
        CheckBoxDemoPO.checkAllBtnClick()
        CheckBoxDemoPO.receivedMessageOnBtn('Uncheck All')
    })
    
    it("After check three option , btn didn't change name", () => {
        for (let i = 0; i < 3; i++) {
            CheckBoxDemoPO.selectMultiCheckboxe(i)
        }
        CheckBoxDemoPO.receivedMessageOnBtn("Check All")
    })
    
    it("After check four option , btn change name", () => {
        for (let i = 0; i < 4; i++) {
            CheckBoxDemoPO.selectMultiCheckboxe(i)
        }
        CheckBoxDemoPO.receivedMessageOnBtn("Uncheck All")
    })
});
