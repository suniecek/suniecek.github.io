## 2025-02-18 - Avoid using `alert()` for validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. Screen readers often don't handle them perfectly and they ruin the user experience by stopping interaction.
**Action:** Always implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline borders using `#c04040`) directly to the offending inputs.
