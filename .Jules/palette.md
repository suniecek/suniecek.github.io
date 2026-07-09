## 2024-05-18 - Replacing Blocking Alerts with Inline Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that disrupts user flow and provides poor context for screen readers.
**Action:** Replace `alert()` with inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"` to invalid inputs, and adding visual cues like inline `#c04040` red borders, ensuring to clear the state on subsequent submissions.
