## 2024-05-24 - Replace blocking alert dialog with inline validation
**Learning:** Using `alert()` for form validation is a blocking and inaccessible pattern, especially for screen reader users and keyboard navigation.
**Action:** Implemented inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline red borders) to missing fields. Also added `aria-label` to form inputs for better context.
