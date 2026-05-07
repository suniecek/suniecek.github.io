## 2025-05-07 - Guestbook Form Accessibility
**Learning:** The native `alert()` browser dialog provides a poor and inaccessible experience for form validation, blocking screen readers and freezing interaction. Additionally, inputs relying solely on visual placeholders lack screen reader context.
**Action:** Replace `alert()` validations with accessible inline error containers (`role="alert"`, `aria-live="assertive"`) and visually highlight missing fields using standard styles and `aria-invalid="true"`. Explicitly assign `aria-label`s to inputs acting as standalone form fields.
