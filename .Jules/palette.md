## 2025-01-20 - Accessible Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides poor UX and context for screen readers.
**Action:** Replace `alert()` with inline validation. Inject an error element with `role="alert"`, apply `aria-invalid="true"` to the specific invalid fields, and use distinct visual styling (e.g., inline red borders `#c04040`). Clear these states appropriately upon success or re-evaluation.
