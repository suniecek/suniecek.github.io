## 2024-05-24 - Replace blocking alerts with inline validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. It interrupts the user flow and doesn't provide contextual error information to screen readers.
**Action:** Replace `alert()` dialogs with inline validation. Create a dedicated error element with `role="alert"`, use `aria-invalid="true"` on invalid inputs, and apply distinct visual styling (like inline red borders `#c04040`) for clear, accessible feedback. Clear these states upon successful submission.
