## 2024-10-27 - Inline Validation in Guestbook
**Learning:** Replaced the inaccessible and blocking `alert()` method used for form validation with an inline error message using `role="alert"` and red borders/aria-invalid state for the specific missing inputs. This is much more accessible.
**Action:** Consistently use inline validation mechanisms with proper ARIA attributes (`role="alert"`, `aria-invalid`) instead of browser blocking popups like `alert()` across all interactive forms.
