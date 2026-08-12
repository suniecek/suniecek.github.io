## 2024-05-19 - Replace blocking alert() with inline validation
**Learning:** Using `alert()` for form validation is a blocking and inaccessible pattern that disrupts user flow and screen readers.
**Action:** Replace `alert()` calls with inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"` to invalid inputs, and using distinct visual styling (e.g., inline red borders).
