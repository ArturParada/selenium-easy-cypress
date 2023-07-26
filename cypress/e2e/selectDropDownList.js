import dropDownPO from "../support/PageObjects/dropDownPO";

describe('Drop down test', () => {

    const towns = ["Florida", "New York", "Ohio", "California"]

    beforeEach(function () {
        dropDownPO.goBasicSelectDropdownDemoPage()
        cy.fixture('days.json').as('days')
    })

    //implementacja z plikime days.json

    //.this dzial tylko ze zwykłą funkjac w strzałkowej trzeba urzyc aliasu chodzi o scope, dodatkowo forEach bo zwykly each dzial tylko w chainie 
    // it.only('Day select', function () {
    //     this.days.forEach((day) => {
    //         dropDownPO.selectDayFromDropdown(day)
    //         dropDownPO.recaivedSingleMessage(day)
    //     })

    // });

    // it.only('Day select', () => {
    //     cy.get('@days').forEach((day) => {
    //         dropDownPO.selectDayFromDropdown(day)
    //         dropDownPO.recaivedSingleMessage(day)
    //     })

    // });
    it.only('Day select', () => {
        // Odczytaj plik days.json
        cy.fixture('days.json').then((data) => {
            // Przechwyć dane jako days
            const { days } = data;

            // Iteruj przez każde miasto
            days.forEach((day) => {
                // Wykonaj operacje na stronie z użyciem miasta day
                dropDownPO.selectDayFromDropdown(day);
                dropDownPO.recaivedSingleMessage(day);
            });
        });
    });

    it('Changing single town', () => {
        towns.forEach(town => {
            dropDownPO.selectCountry(town)
            dropDownPO.clickFirstSelectedBtnElement()
            dropDownPO.firstSelectedOptionMessage(town)
        })
    });

    it('Select multiple towns', () => {
        for (let i = 0; i < towns.length; i++) {
            dropDownPO.selectMultipleCountry(towns[i])
        }
        dropDownPO.clickGetAllSelectedBtn()
        dropDownPO.recivedMultipleMessage(towns)
    });
});
