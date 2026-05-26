## 2024-05-26 - Form Validation Accessibility
**Learning:** Found usage of blocking `alert()` for guestbook form validation. This is a common but inaccessible pattern that disrupts screen readers and blocks thread execution.
**Action:** Replaced `alert()` with inline validation by creating an error `div` with `role="alert"` and styling empty inputs with inline red borders and `aria-invalid="true"`. Ensured styles are cleared upon subsequent valid entries.
