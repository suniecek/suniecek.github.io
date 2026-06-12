## 2024-05-18 - Replace blocking alerts with inline validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"` to invalid fields, and using distinct visual styling (e.g., inline red borders `#c04040`).
