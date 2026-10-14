## 2025-02-24 - Accessible Inline Form Validation
**Learning:** Avoid using blocking `alert()` dialogues for form validation as they disrupt user flow and are not accessible. When users interact with inputs, validation should occur seamlessly within the context of the form.
**Action:** When implementing form validation, always clear previous error states first, then inject a descriptive error element with `role="alert"` (for screen readers), and visually indicate problematic fields using inline red borders (e.g., `#c04040`) and `aria-invalid="true"` attributes.
