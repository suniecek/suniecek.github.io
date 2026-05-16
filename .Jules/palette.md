## 2024-05-16 - Replaced blocking alert validation
**Learning:** Found an accessibility issue pattern where form validation used native `alert()` which is disruptive and poorly supported by screen readers.
**Action:** Replaced `alert()` with inline error containers using `role="alert"`, `aria-live="assertive"`, and `aria-invalid="true"` on inputs.
