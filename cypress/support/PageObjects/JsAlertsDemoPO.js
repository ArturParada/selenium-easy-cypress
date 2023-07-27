class JsAlertsDemoPO {
    get initialAlertBoxBTN() {
        return cy.get('button[onclick="myAlertFunction()"]')
    }

    get initialConfirmBoxBTN() {
        return cy.get('button[onclick="myConfirmFunction()"]')
    }
    get confirmBoxMessage() {
        return cy.get('#confirm-demo').invoke('text')
    }
    clickonInitialConfirmBoxBtN() {
        this.initialConfirmBoxBTN.click()
    }
    clickOninitialAlertBoxBTN() {
        this.initialAlertBoxBTN.click()
    }
    validatiOnCorrectAlertBoxMessage() {
        cy.on('window:alert', (str) => {
            expect(str).to.be.equal('I am an alert box!')
        })
    }

    validationCorrectConfirmBoxMessage(alertmessage, boolen, message) {
        cy.on('window:confirm', (str) => {
            expect(str).to.be.equal(alertmessage)
            return boolen
        }).then(() => {
            this.confirmBoxMessage.should('equal', message)
        })
    }

    goAlertHomePge() {
        cy.visit("/javascript-alert-box-demo.html")
    }
}
export default new JsAlertsDemoPO()