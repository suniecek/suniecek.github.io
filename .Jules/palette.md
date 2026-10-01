## 2024-06-25 - Avoid alert() for validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. It does not associate the error with the specific field for screen readers.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline red borders).
