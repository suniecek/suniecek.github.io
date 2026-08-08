## 2024-08-08 - Accessible Inline Validation

**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. Screen reader users can get stuck, and the visual experience is abrupt.
**Action:** Replace `alert()` validations with accessible inline errors. Use `aria-invalid="true"`, apply visual styling (e.g., inline red borders), and inject an error element with `role="alert"` for non-disruptive, clear feedback.
