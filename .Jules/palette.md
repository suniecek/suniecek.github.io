## 2026-01-10 - Replace blocking alert() with accessible inline validation
**Learning:** Found a blocking `alert()` used for form validation in the guestbook, which is a poor UX and inaccessible pattern. Also observed that we should use inline styles (`#c04040`) for validation errors when custom CSS classes are restricted.
**Action:** Replaced the `alert()` with an inline error element (`role="alert"`) and applied `aria-invalid="true"` alongside inline styling to the invalid fields directly.
