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
    for (const birthDate of Object.keys(this.data.invalidBirthDate)) {
      tariffCalculatorPage.setupBirthdate(
        this.data.invalidBirthDate[birthDate].day,
        this.data.invalidBirthDate[birthDate].month,
        this.data.invalidBirthDate[birthDate].year,
      );
      tariffCalculatorPage.verifyBirthdateError(
        this.data.invalidBirthDate[birthDate].error,
      );
    }
    tariffCalculatorPage.setupBirthdate(
      this.data.validBirthDate.day,
      this.data.validBirthDate.month,
      this.data.validBirthDate.year,
    );
    tariffCalculatorPage.submitBirthdate();
  });
});
