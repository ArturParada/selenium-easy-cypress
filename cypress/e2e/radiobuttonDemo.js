import RadioButtonPO from "../support/PageObjects/RadioButtonPO";

describe('Radibutton tests', () => {
    beforeEach(() => {
        RadioButtonPO.goRadiobuttonDemoPage()
    })
    const data = [
        ['Male', "Radio button 'Male' is checked"], ['Female', "Radio button 'Female' is checked"]
    ]
    data.forEach($genders => {
        const [gender, message] = $genders
        it(`Select a gender${gender} and print the result after clicking the button${message}`, () => {
            RadioButtonPO.selectSinglegender(gender)
            RadioButtonPO.clickCheckedValueBtn()
            RadioButtonPO.assertValueChecked(message)

        });
    });


});
