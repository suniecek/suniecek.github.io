## 2024-07-17 - Accessible Form Validation
**Learning:** Found a pattern where form validation (`addGuestbookEntry`) relied on a blocking `alert()` dialog, which is inaccessible and disruptive to user flow.
**Action:** Replaced `alert()` with an inline error element (`#guestbookError` with `role="alert"`) and inline visual feedback (red borders and `aria-invalid="true"`) to provide accessible and non-blocking validation. Cleared states successfully upon valid input.
