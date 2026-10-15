## 2026-01-10 - Replace alert validation with inline validation in Guestbook
**Learning:** `alert()` dialogs for form validation create a blocking, inaccessible experience, especially for screen readers, and provide poor visual context for users correcting errors.
**Action:** Always implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"` to erroneous fields, and using distinct visual styling (e.g., inline red borders `#c04040`). Explicitly clear previous error states before re-evaluating to avoid stale error indicators.
