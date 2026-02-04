# QA Strategy

# Test Types

**Functional Testing**

Tools: Jira+XRAY, Cypress

- Validation of input fields
- Verify the calculated values
- Navigation between the sides
- Workflow testing across all steps - core user flow
- Edge Cases Testing

**UI/UX Testing**

Tools: DevTools

- Responsive layout testing on different devices, OS Versions and screen sizes
- Clear user experience
- Testing on different operating systems, browser versions

**Accessibility Tests**

Tools: WCAG, NVDA, WAVE

- Proper html structure (heading leves, landmarks)
- Aria roles dont missing and they are meaningful
- Works at 200% zoom
- Screen readers compability + keyboard navigation (TAB, space, enter)
- Sufficient color contrast

**Regression Test and Smoke Testing**

Tools: Cypress

- Regular automated regression and smoke tests for both API and UI functionalities

**API Testing**

Tools: Postman, Swagger

- Validation of backend API response bodies
- Testing behavior with query parameters
- Sending various request bodies
- Proper handling of API errors


**Performance testing**

Tools: Jmeter, Lighthouse

- Response time measurements
- Load testing under higher traffic (e.g. 1,000 concurrent visitors at the same time)

Security Testing

- XSS
- Modify query parameters in the URL to test backend validation
- Verify HTTPS is used and there is no mixed content

# Test cases

**Core user flow – Tariff calculator**

- Executing the entire insurance process with valid data.
- _Expected:_ I can go through the tariff calculator flawlessly, and at the end, I see the correct amount.

Automation **:** Yes, typically a smoke test

**Required field and input format validation**

- Leave required inputs blank
- Test with different valid input values
- _Expected:_ Each missing item triggers a visible validation message and if I provide the input in the correct format, I do not get an error.


Automation **:️** Partially. Blank required fields and format validation can be automated but

complex combinations may need manual checks.


**Invalid Input Formats**

- Entering incorrect formats (e.g.: providing a string for the date of birth)
- _Expected:_ Validation errors with proper messages and it does not interfere with other functionalities.


Automation: Yes, creating negative tests is also important during automation.

**Verify the calculated Tariff**

- Value by going through the process in multiple variations: young adult, adult with children, older age.


- Expected result: The tariff value matches the expectations

Automation: It depends. If the logic can be expressed in a programming language, then

yes. Check only one case automated.

**Adding children to the insurance**

- It should be possible to add children to the insurance.
- Children cannot be older than the parent
- The number of children cannot exceed the limit (maximum 10)
- Child can be removed if not needed
- _Expected_ : the children’s data is saved throughout the entire process

Automation: Partly. I would test the edge cases manually.

**Comprehensive accessibility test**

- Navigation between different pages and inputs only via buttons
- Using a screen reader
- Adjusting color contrast with the accessibility button in the top-right corner.
- _Expected_ : Navigation should be seamless, the screen reader should read everything clearly, and the color contrast adjustment should work.
Automation: No, to be tested manually.


# Testing Edge Cases

| Test Case Description                                                                 | Automated |
|---------------------------------------------------------------------------------------|-----------|
| Birth date values: negative value (-01.01.2026), future date (01.01.3000), too old (01.01.1900), too young (01.01.2020) | Yes       |
| Income values: negative, too high (€100,000,000), too low (€1)                          | Yes       |
| Click on elements or page areas that are not supposed to be clickable                  | No        |
| When a type of an insurance is selected, the corresponding input field appears in the lower section | No        |
| If I change the value of a radio button or input from the previous value and proceed to the next page, the new value is successfully saved | No        |
| If an input previously triggered an error and I then provide a correct value, the error message disappears | No        |
| The button becomes invalid, if the value of an input becomes incorrect again           | No        |
