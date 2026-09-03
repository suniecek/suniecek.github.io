## 2024-06-03 - Replace blocking alerts with inline validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that disrupts user flow and provides poor context for screen readers.
**Action:** Replace `alert()` calls with inline error messages using `role="alert"`, `aria-invalid="true"`, and distinct visual styling (like inline red borders `#c04040`) for better accessibility and UX.
