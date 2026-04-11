## 2024-05-18 - Replacing Blocking Alert Validations
**Learning:** Legacy web applications often use `alert()` for form validation (`guestbook` form), which completely blocks the browser's main thread and provides a poor, inaccessible experience for screen reader users as it disrupts context.
**Action:** Replace `alert()` validations with inline error containers using `role="alert"` and `aria-live="assertive"`. Simultaneously, dynamically apply `aria-invalid="true"` and visual error indicators (like red borders) directly to the offending inputs.
