import SimpleFormDemoPO from "../support/PageObjects/simpleFormDemoPO";
describe('SimpleFromDemo', () => {
    const value = [
        {
            a: 12,
            b: 3,
            result: 15,
        },
        {
            a: "!",
            b: "X",
            result: NaN
        },
        {
            a: 1,
            b: "X",
            result: NaN
        }
    ];

    beforeEach(() => {
        SimpleFormDemoPO.goSimpleFormDemoPage()
    })

    it('Fill one input', () => {
        SimpleFormDemoPO.typeMessage("Show Message")
        SimpleFormDemoPO.clickShowMessageBtnElement()
        SimpleFormDemoPO.typedMessageshouldBeEqualToSendingMessage("Show Message")
    });

    value.forEach((data) => {
        it(`Set two values (${data.a}, ${data.b}) and check the result: ${data.result}`, () => {
            SimpleFormDemoPO.typeMessage("Show Message")
            SimpleFormDemoPO.clickShowMessageBtnElement()
            SimpleFormDemoPO.typeValues(data.a, data.b)
            SimpleFormDemoPO.clickOnTotalBtn()
            SimpleFormDemoPO.sumAssercion(data.result)

        });
    });
});