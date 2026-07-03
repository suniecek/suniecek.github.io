## 2024-05-24 - Accessible Inline Form Validation

**Learning:** Using `alert()` for form validation is a blocking and inaccessible UX pattern that negatively affects screen reader users and interrupts the flow.
**Action:** Replace `alert()` dialogs with inline validation. Inject an error element with `role="alert"`, apply `aria-invalid="true"`, and use distinct visual styling (e.g., inline `#c04040` borders) directly on invalid inputs to provide accessible, non-blocking feedback. Remember to clear previous error states dynamically.
