## 2024-06-12 - Replacing Blocking Alerts in Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that frustrates users and hinders screen readers.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and styling with explicit inline feedback (like `#c04040` red borders) so users can see exactly which fields need correction.
