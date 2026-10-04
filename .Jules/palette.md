## 2024-05-24 - Inline Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. It traps focus and doesn't explicitly link the error message to the invalid input for screen reader users.
**Action:** Avoid `alert()` for validation. Instead, inject an inline error element with `role="alert"`, use `aria-invalid="true"` on the failing inputs, and apply clear visual indicators like `#c04040` borders to explicitly highlight exactly what went wrong in a non-blocking way.
