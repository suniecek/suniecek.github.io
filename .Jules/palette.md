## 2024-08-06 - Avoid Blocking Alerts for Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that disrupts user flow and screen reader focus.
**Action:** Replace `alert()` validations with accessible inline feedback using error messages (with `role="alert"`) and inline styling combined with `aria-invalid="true"` attributes to clearly associate errors with respective inputs.
