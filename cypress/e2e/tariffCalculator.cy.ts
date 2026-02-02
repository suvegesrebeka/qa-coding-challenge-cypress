import { TariffCalculatorPage } from "../pages/TariffCalculatorPage";
const tariffCalculatorPage = new TariffCalculatorPage();

describe("tariff calculator", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.acceptCookies();
    cy.fixture("tariffCalculatorData").as("data");
  });
  it("employee salary setup", function () {
    tariffCalculatorPage.setupIncome(this.data.income);
    tariffCalculatorPage.verifyComprehensiveInsurance();
    tariffCalculatorPage.setupStartDate(this.data.startDate);
    tariffCalculatorPage.setupBirthdate(
      this.data.birthDate.invalid.day,
      this.data.birthDate.invalid.month,
      this.data.birthDate.invalid.year,
    );
  });
});

//invalid: old, young, future, invalid
