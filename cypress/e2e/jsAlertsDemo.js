import AlertsDemoPO from "../support/PageObjects/JsAlertsDemoPO";


describe('Alerts tests suit', () => {
    beforeEach(() => {
        AlertsDemoPO.goAlertHomePge()
    })

    it('Correct message after click initial alert button', () => {
        AlertsDemoPO.clickOninitialAlertBoxBTN()
        AlertsDemoPO.validatiOnCorrectAlertBoxMessage()
    });

    it('Correct message after click "ok" button on alert', () => {
        AlertsDemoPO.clickonInitialConfirmBoxBtN()
        AlertsDemoPO.validationCorrectConfirmBoxMessage("Press a button!", true, "You pressed OK!")
    });

    it('Correct message after click "cancel" button on alert', () => {
        AlertsDemoPO.clickonInitialConfirmBoxBtN()
        AlertsDemoPO.validationCorrectConfirmBoxMessage("Press a button!", false, 'You pressed Cancel!')
        
});