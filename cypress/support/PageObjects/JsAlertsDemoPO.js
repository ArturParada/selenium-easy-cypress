class JsAlertsDemoPO {
    get initialAlertBoxBTN() {
        return cy.get('button[onclick="myAlertFunction()"]')
    }
    clickOninitialAlertBoxBTN() {
        this.initialAlertBoxBTN.click()
    }
    validationCorrectAlertBoxMessage() {
        cy.on('window:alert', (str) => {
            expect(str).to.be.equal('I am an alert box!')
        })
    }

    goAlertHomePge() {
        cy.visit("/javascript-alert-box-demo.html")
    }
}
export default new JsAlertsDemoPO()