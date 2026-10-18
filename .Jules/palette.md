## 2024-05-18 - Avoid Blocking Alerts for Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides poor UX. Users cannot fix the form while the alert is active, and screen readers may not handle the transition well.
**Action:** Replace `alert()` dialogs with inline validation: inject an error element with `role="alert"`, apply `aria-invalid="true"` to empty/invalid inputs, and use distinct visual styling (e.g., inline red borders like `#c04040`) without adding new custom CSS classes. Always ensure to clear previous error states first.
