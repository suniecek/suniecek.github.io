## 2025-08-03 - Form Validation Accessibility
**Learning:** Native `alert()` dialogs used for form validation are completely inaccessible to screen readers and block the main thread, causing a poor UX.
**Action:** Replaced `alert()` with inline validation using `role="alert"` containers and `aria-invalid` attributes combined with inline visual styling (borders) to provide immediate, accessible feedback.
