## 2024-05-24 - Guestbook Inline Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides a poor UX, particularly for screen reader users and those expecting contextual error feedback.
**Action:** Replace `alert()` dialogs with accessible inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline red borders using the standard `#c04040` color) to clearly indicate which fields require attention.
