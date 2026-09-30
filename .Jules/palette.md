## 2024-10-24 - Replaced Alert with Inline Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that fails screen readers and hurts usability.
**Action:** Always replace `alert()` validations with inline error messages (using `role="alert"`), `aria-invalid="true"`, and corresponding visual cues (like red borders).
