## 2024-10-18 - Guestbook Validation
**Learning:** `alert()` for form validation is inaccessible, blocks the main thread, and causes screen readers to lose context. Isolated inputs also require explicit `aria-label`s.
**Action:** Replace `alert()` with inline validation (red border + `aria-invalid`) and inject a div with `role="alert"` for screen readers. Added `aria-label` to the guestbook form fields.
