## 2026-01-20 - Replaced Blocking Alert with Inline Validation for Guestbook

**Learning:** This application previously relied on a blocking `alert()` dialog to handle form validation when the user submitted the guestbook without filling in the fields. This is an inaccessible pattern that disrupts user flow and provides poor feedback for screen reader users.
**Action:** Replaced the `alert()` with an inline error message using a `div` element with `role="alert"` and applied `aria-invalid="true"` (along with a red border using the standard `#c04040` design token) directly to the missing input fields. This ensures error messages are read by screen readers and visually connected to the problematic inputs without blocking the UI.
