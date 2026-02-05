import { TariffCalculatorPage } from "../../pages/TariffCalculatorPage";

describe("tariff calculator", () => {
  beforeEach(function () {
    cy.fixture("tariffCalculatorData").as("data");
    cy.visit("/", { timeout: 15000 });
    cy.wait(1500);
    cy.acceptCookies();
  });
  it("employee salary setup", function () {
    const page = new TariffCalculatorPage();

    page.setupIncome(this.data.income);
    page.setupStartDate(this.data.startDate);
    for (const birthDate of Object.keys(this.data.invalidBirthDate)) {
      page.setupBirthdate(
        this.data.invalidBirthDate[birthDate].day,
        this.data.invalidBirthDate[birthDate].month,
        this.data.invalidBirthDate[birthDate].year,
      );
      page.verifyBirthdateError(this.data.invalidBirthDate[birthDate].error);
    }
    page.setupBirthdate(
      this.data.validBirthDate.day,
      this.data.validBirthDate.month,
      this.data.validBirthDate.year,
    );
    page.submitBirthdate();
  });
});
