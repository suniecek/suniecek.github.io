## 2024-10-27 - Replace Blocking Alert with Inline Validation in Forms
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that disrupts user flow and screen readers.
**Action:** Replace `alert()` calls with inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"` to invalid fields, and using distinct visual styling (e.g., inline red borders) to provide clear, non-blocking feedback.
