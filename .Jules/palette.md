## 2024-05-19 - Guestbook Form Accessibility and Validation
**Learning:** Forms relying only on placeholder text lack context for screen readers. Blocking `alert()` calls for validation are disruptive and bad for UX.
**Action:** Always add `aria-label` to inputs without visible labels. Replace blocking `alert()` validation with inline error containers using `role="alert"` and `aria-live="assertive"`, applying `aria-invalid="true"` and styling (like a red border) directly to invalid fields. Clear these states when errors are resolved.
