import { tariffCalculatorSelectors as s } from "../support/selectors/tariffCalculator";

export class TariffCalculatorPage {
  // Selects "Angestellt" radio button, types the yearly income
  // and clicks continue to proceed to the next step.
  setupIncome(income: string) {
    cy.get(s.employment.radioEmployed)
      .check({ force: true })
      .should("be.checked")
      .get(s.employment.salaryInput)
      .clear()
      .type(income)
      .get(s.employment.continueBtn)
      .click();
  }

  // Selects the desired insurance start date from the dropdown
  // clicking the continue button.
  setupStartDate(startDate: string) {
    cy.get(s.startDate.select)
      .select(startDate)
      .get(s.startDate.select)
      .contains(startDate)
      .get(s.insurance.continueBtn)
      .click();
  }

  // Types day, month and year into the three separate birthdate input fields.
  setupBirthdate(day: string, month: string, year: string) {
    cy.get(s.birthdate.dayInput)
      .type(day)
      .get(s.birthdate.monthInput)
      .type(month)
      .get(s.birthdate.yearInput)
      .type(year);
  }

  // Asserts that a specific birthdate validation error message is visible.
  verifyBirthdateError(errorMessage: string) {
    cy.get(s.birthdate.error).contains(errorMessage);
  }

  // Clicks the continue button after birthdate input
  submitBirthdate() {
    cy.get(s.birthdate.continueBtn).should("be.enabled").click();
  }
}
