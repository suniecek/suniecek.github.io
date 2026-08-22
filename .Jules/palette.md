## 2024-05-18 - Form Validation Pattern
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides poor UX. Users expect inline feedback.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline red borders with standard web colors or discovered tokens like `#c04040`) for the invalid inputs, ensuring focus management is properly handled.
