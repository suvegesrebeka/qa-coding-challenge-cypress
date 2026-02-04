export const tariffCalculatorSelectors = {
  employment: {
    radioEmployed:
      '[data-cy="employment-status-option-employed"] input[type="radio"]',
    salaryInput: '[data-cy="income-input"]',
    continueBtn: '[data-cy="employment-status-continue"]',
  },

  insurance: {
    comprehensiveRadio: "[data-gtm-form-interact-field-id]",
    continueBtn: '[data-cy="insurance-product-continue"]',
  },

  startDate: {
    select: '[data-cy="ingress-date"]',
  },

  birthdate: {
    dayInput: '[data-cy="day"]',
    monthInput: '[data-cy="month"]',
    yearInput: '[data-cy="year"]',
    error: '[data-cy$="-validation-message"]',
    continueBtn: '[data-cy$="-continue"]',
  },
} as const;
