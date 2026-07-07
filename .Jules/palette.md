## 2025-02-18 - Improved Guestbook Form Validation
**Learning:** Replaced blocking and inaccessible `alert()` validation patterns in forms with inline validation. Using elements with `role="alert"` allows screen readers to announce errors immediately, while applying `aria-invalid="true"` directly to inputs provides semantic context and visual cues (like red borders).
**Action:** Always prefer inline validation over blocking `alert()` popups for forms. Use standard red (`#c04040`) for error states and ensure `aria-invalid` and `role="alert"` are utilized for accessibility.
