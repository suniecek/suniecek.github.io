## 2024-05-19 - Replace Blocking Alert Dialogs with Inline Validation
**Learning:** Using `alert()` for form validation is a jarring UX pattern that breaks the flow and blocks the browser. It's not fully accessible as it takes focus away from the page context abruptly.
**Action:** Replace `alert()` with inline validation using an error container (with `role="alert"`), applying `aria-invalid="true"` and styling (like a red border) to invalid inputs, and explicitly moving focus to the first invalid field to guide the user.
