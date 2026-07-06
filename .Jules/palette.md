
## 2025-01-24 - Accessible Form Validation
**Learning:** This app previously used `alert()` for form validation, which is inaccessible and blocks the UI thread.
**Action:** Replace `alert()` validations with inline error messages using `role="alert"`, visual `#c04040` error borders, and `aria-invalid="true"` attributes to ensure both visual and screen reader users are properly notified of errors without blocking the experience.
