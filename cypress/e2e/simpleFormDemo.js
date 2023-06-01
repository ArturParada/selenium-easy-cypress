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
        SimpleFormDemoPO.clickShowMessageBtn()
        SimpleFormDemoPO.typedMessageshouldBeEqualToSendingMessage("Show Message")
    });

    value.forEach((data) => {
        const { a, b, result } = data
        it(`Set two values (${a}, ${b}) and check the result: ${data}`, () => {
            SimpleFormDemoPO.typeMessage("Show Message")
            SimpleFormDemoPO.clickShowMessageBtn()
            SimpleFormDemoPO.typeValues(a, b)
            SimpleFormDemoPO.clickOnTotalBtn()
            SimpleFormDemoPO.sumAssercion(result)

        });
    });
});
