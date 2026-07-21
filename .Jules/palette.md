
## 2024-05-18 - Replacing Blocking Alerts with Accessible Inline Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides a poor user experience. It abruptly interrupts the user, and screen readers may not handle it well or may lose context when the alert is dismissed.
**Action:** Replace `alert()` dialogs for form validation with inline accessible error messaging. This involves injecting an error element with `role="alert"`, applying `aria-invalid="true"` and distinct visual styling (e.g., inline red borders `#c04040`) to the invalid fields, and ensuring that any previous error states are cleared upon re-submission.
