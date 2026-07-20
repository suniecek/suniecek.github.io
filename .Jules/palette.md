## 2024-07-20 - Accessible Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides poor UX. Relying purely on browser alerts makes it difficult for screen readers to properly associate the error with the specific invalid fields.
**Action:** Replace blocking `alert()` dialogs with inline validation. Inject an error element with `role="alert"`, apply `aria-invalid="true"` to the invalid inputs, and use distinct visual styling (like inline red borders) to explicitly indicate errors without halting the UI flow.
