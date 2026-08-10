## 2024-08-11 - Accessible Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. Screen readers often handle it poorly and it disrupts user flow.
**Action:** Replace `alert()` validations with inline error elements using `role="alert"` and apply `aria-invalid="true"` directly to the invalid inputs to provide clear, accessible feedback.
