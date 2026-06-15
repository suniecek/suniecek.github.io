## 2024-05-15 - Replace alert() with Inline Validation
**Learning:** Found an inaccessible, blocking `alert()` used for guestbook form validation. This pattern is inaccessible to screen reader users and creates a poor UX flow.
**Action:** Replaced the blocking `alert()` with an accessible inline error message, applying `role="alert"` for screen readers, and updating the invalid inputs with `aria-invalid="true"` and an inline red border (`1px solid #c04040`) directly in `script.js` to avoid needing custom CSS changes. Empty styles and removed ARIA attributes are used to reset state correctly.
