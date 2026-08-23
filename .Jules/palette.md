## 2025-01-20 - Accessible Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. Screen readers often don't handle them well, and they disrupt the user flow.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline red borders using `#c04040`).
