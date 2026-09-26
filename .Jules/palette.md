## 2024-05-18 - Improve form validation accessibility
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. Screen readers often don't provide adequate context for alerts, and users can't easily return to the offending fields.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline red borders based on the standard '#c04040' color) directly on the invalid inputs.
