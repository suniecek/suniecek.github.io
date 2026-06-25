## 2024-05-24 - Inline Form Validation

**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. It interrupts the user's flow and isn't well-handled by screen readers.
**Action:** Implement inline form validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and styling the invalid fields. Clear these states appropriately when validation passes.
