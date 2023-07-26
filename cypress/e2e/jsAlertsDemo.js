import AlertsDemoPO from "../support/PageObjects/JsAlertsDemoPO";


describe('Alerts tests suit', () => {
    beforeEach(() => {
        AlertsDemoPO.goAlertHomePge()
    })
    it('Correct message after click initial alert button', () => {
        AlertsDemoPO.clickOninitialAlertBoxBTN()
        AlertsDemoPO.validationCorrectAlertBoxMessage()

    });
});