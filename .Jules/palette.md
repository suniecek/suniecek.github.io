## 2024-05-24 - Accessible Inline Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides poor user experience.
**Action:** Replace `alert()` dialogs with accessible inline validation. Inject an error element with `role="alert"`, apply `aria-invalid="true"` to offending inputs, and use distinct visual styling (e.g., inline red borders using `#c04040`).
