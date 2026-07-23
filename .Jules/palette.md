## 2024-06-11 - Accessible Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides a poor user experience.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"` to invalid inputs, and using distinct visual styling (e.g., inline red borders using #c04040). Use JavaScript to clear the state and remove the attributes when valid.
