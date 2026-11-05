## 2024-05-14 - Replace Blocking Alert with Inline Validation in Guestbook
**Learning:** Using blocking `alert()` calls for form validation is a poor user experience, especially on modern web interfaces where it can disrupt the flow and isn't accessible to all users.
**Action:** Replaced the `alert()` in the guestbook form with an inline error message that uses `role="alert"` for screen readers, applies `aria-invalid="true"` and a red border (`#c04040`) to invalid fields, and programmatically focuses the first invalid input to guide the user.
