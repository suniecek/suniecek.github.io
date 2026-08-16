## 2024-05-24 - Replace Blocking Alert Dialogs
**Learning:** Using `alert()` for form validation is a blocking pattern that is highly inaccessible, particularly for screen readers, as it disrupts user flow.
**Action:** Instead, implement inline validation by injecting an error element into the DOM with `role="alert"`, applying `aria-invalid="true"` to problematic fields, and using visual cues (like inline borders matching the design system's red) to clearly indicate errors.
