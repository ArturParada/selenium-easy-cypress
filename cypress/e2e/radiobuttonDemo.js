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
        it(`Select a gender ${gender} and print the result after clicking the button ${message}`, () => {
            RadioButtonPO.selectSingleGender(gender)
            RadioButtonPO.clickCheckedValueBtn()
            RadioButtonPO.assertValueChecked(message)

        });
    });
    const dataFotGroup =
        [
            ['Male', "0 to 5", "Sex : Male Age group: 0 - 5"],
            ['Male', "5 to 15", "Sex : Male Age group: 5 - 15"],
            ['Male', "15 to 50", "Sex : Male Age group: 15 - 50"],
            ['Female', "0 to 5", "Sex : Female Age group: 0 - 5"],
            ['Female', "5 to 15", "Sex : Female Age group: 5 - 15"],
            ['Female', "15 to 50", "Sex : Female Age group: 15 - 50"],
        ]
    dataFotGroup.forEach($data => {
        const [gender, ageGroup, message] = $data
        it.only(`Selec a ${gender} , age group ${ageGroup} and print message ${message}`, () => {
            RadioButtonPO.selectGroupGender(gender)
            RadioButtonPO.selectAgeGroup(ageGroup)
            RadioButtonPO.clickGetValueBtn()
            RadioButtonPO.assertGroupMessage(message)

        });
    })



});
