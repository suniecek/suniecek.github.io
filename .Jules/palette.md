## 2024-06-07 - Replace Blocking Alerts with Inline Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. It interrupts the user flow and doesn't explicitly link the error to the problematic input field for screen readers.
**Action:** Replace `alert()` validation with inline error elements using `role="alert"`, add `aria-invalid="true"` to invalid inputs, and use distinct visual styling (e.g., inline `#c04040` red borders) to ensure both visual and semantic feedback.
