## 2024-06-25 - Inline Validation for Guestbook
**Learning:** Avoid using `alert()` for form validation as it is a blocking and inaccessible pattern.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline red borders).
