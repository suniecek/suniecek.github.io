## 2026-09-12 - Replacing Blocking Alerts with Accessible Inline Form Validation
**Learning:** Using `alert()` for form validation creates a blocking, inaccessible experience.
**Action:** Replace `alert()` dialogs with inline validation. Inject an error element with `role="alert"`, apply `aria-invalid="true"` to invalid inputs, and use inline borders (e.g., `#c04040`) without adding new custom CSS classes. Always ensure error states are cleared upon subsequent successful validation.
