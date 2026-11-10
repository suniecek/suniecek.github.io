## 2024-05-24 - Replaced Blocking Alert with Inline Form Validation
**Learning:** Blocking alerts for form validation are disruptive and bad for accessibility. Screen readers handle inline error messages with `role="alert"` and `aria-invalid="true"` attributes much better.
**Action:** When implementing form validation, avoid `alert()`. Use inline error elements with `role="alert"`, update invalid fields with `aria-invalid="true"` and visual cues (like red borders), and programmatically focus the first invalid element to guide the user. Clear previous error states on submission.
