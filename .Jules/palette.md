## 2024-09-10 - Replace blocking alert with inline validation
**Learning:** Using `alert()` for form validation creates a blocking, inaccessible experience for screen readers and breaks the flow for users.
**Action:** Replace `alert()` calls with dynamic inline error elements with `role="alert"` and visually style empty inputs with a red border and `aria-invalid="true"`.
