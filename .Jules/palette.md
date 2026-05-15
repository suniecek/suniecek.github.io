
## 2024-05-15 - Replace Blocking Alerts with Inline Validation
**Learning:** Native `alert()` dialogs in browser applications completely block execution, lock up screen readers until manually dismissed, and disrupt the overall user flow, especially in custom UI interfaces.
**Action:** When implementing forms or actions requiring validation, use an inline error container with `role="alert"` and `aria-live="assertive"`, alongside conditional `aria-invalid="true"` attributes on the offending inputs. This avoids blocking UI threads and provides a seamless, accessible error reporting experience.
