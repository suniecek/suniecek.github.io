## 2024-11-20 - Accessible Form Error States
**Learning:** Avoid using `alert()` for form validation feedback. It is a blocking and inaccessible interaction pattern for screen readers and breaks user flow.
**Action:** Use inline validation by injecting an error element with `role="alert"`, `aria-live="assertive"`, applying `aria-invalid="true"`, and adding visual styling (e.g., inline red borders) using the app's established `#c04040` red color. Remove error states upon successful submission.
