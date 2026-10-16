## 2024-05-15 - Inline Form Validation

**Learning:** `alert()` dialogues used for form validation provide a poor user experience, as they block the browser UI and introduce significant accessibility hurdles. By implementing inline form validation error boundaries combined with `role="alert"` and `aria-invalid` bindings, users immediately recognize what inputs are required visually, reducing the bounce rate.

**Action:** Whenever a form is created or updated, implement an inline error container rather than using standard browser UI-blocking `alert()` dialogs. Include `aria-invalid="true"` mapped alongside a styling focus ring (`#c04040`) directly addressing the invalid elements.
