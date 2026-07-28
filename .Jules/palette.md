## 2024-05-24 - Replace Blocking Alert Dialogs with Inline Validation
**Learning:** Using `alert()` for form validation is an inaccessible, blocking pattern that creates a poor user experience, especially on screen readers where it traps focus abruptly.
**Action:** Always replace `alert()` with inline validation. Create a dedicated error element with `role="alert"`, use `aria-invalid="true"` on invalid inputs, and provide clear visual feedback (like a red border using an existing color like `#c04040`) directly within the context of the form.
