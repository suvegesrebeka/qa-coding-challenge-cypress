export class TariffCalculatorPage {
  private readonly EMPLOYED_RADIO_SELECTOR =
    '[data-cy="employment-status-option-employed"] input[type="radio"]';
  private readonly SALARY_INPUT_SELECTOR = '[data-cy="income-input"]';
  private readonly EMPLOYEE_SUBMIT_BUTTON =
    '[data-cy="employment-status-continue"]';
  private readonly COMPREHENSIVE_INSURANCE_RADIO_SELECTOR =
    "[data-gtm-form-interact-field-id]";
  private readonly START_DATE_INPUT_SELECTOR = '[data-cy="ingress-date"]';
  private readonly INSURANCE_SUBMIT_BUTTON =
    '[data-cy="insurance-product-continue"]';
  private readonly BIRTHDAY_INPUT_SELECTOR = '[data-cy="day"]';
  private readonly BIRTHMONTH_INPUT_SELECTOR = '[data-cy="month"]';
  private readonly BIRTHYEAR_INPUT_SELECTOR = '[data-cy="year"]';
  private readonly BIRTHDATE_ERROR = '[data-cy$="-validation-message"]';
  private readonly BIRTHDATE_SUBMIT_BUTTON = '[data-cy$="-continue"]';
  // private readonly BIRTHDATE_ERROR_YOUNG =
  //   '[data-cy="min-age-validation-message"]';
  // private readonly BIRTHDATE_ERROR_OLD =
  //   '[data-cy="max-age-validation-message"]';
  // private readonly BIRTHDATE_ERROR_INVALID =
  //   '[data-cy="invalid-age-validation-message"]';
  // private readonly BIRTHDATE_ERROR_FUTURE =
  //   '[data-cy="negative-age-validation-message"]';

  setupIncome(income: string) {
    cy.get(this.EMPLOYED_RADIO_SELECTOR)
      .check({ force: true })
      .should("be.checked");
    cy.get(this.SALARY_INPUT_SELECTOR).type(income);
    cy.get(this.EMPLOYEE_SUBMIT_BUTTON).click();
  }

  verifyComprehensiveInsurance() {
    cy.get(this.COMPREHENSIVE_INSURANCE_RADIO_SELECTOR).should("be.checked");
  }

  setupStartDate(startDate: string) {
    cy.get(this.START_DATE_INPUT_SELECTOR).select(startDate);
    cy.get(this.START_DATE_INPUT_SELECTOR).contains(startDate);
    cy.get(this.INSURANCE_SUBMIT_BUTTON).click();
  }

  setupBirthdate(day: string, month: string, year: string) {
    cy.get(this.BIRTHDAY_INPUT_SELECTOR).type(day);
    cy.get(this.BIRTHMONTH_INPUT_SELECTOR).type(month);
    cy.get(this.BIRTHYEAR_INPUT_SELECTOR).type(year);
  }

  verifyBirthdateError(errorMessage: string) {
    cy.get(this.BIRTHDATE_ERROR).contains(errorMessage);
  }

  submitBirthdate() {
    cy.get(this.BIRTHDATE_SUBMIT_BUTTON).should("be.enabled").click();
  }
}
