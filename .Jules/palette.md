## 2024-05-29 - Replace blocking alert() with inline validation
**Learning:** Avoid using `alert()` for form validation, as it is a blocking and inaccessible pattern.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline red borders).
