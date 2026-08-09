## 2024-06-15 - Inline Form Validation
**Learning:** `alert()` dialogs for form validation block the UI thread and are inaccessible to many users.
**Action:** Replace `alert()` calls with inline validation messages linked to `role="alert"` containers, and visually highlight the invalid inputs using `aria-invalid` and colored borders.
