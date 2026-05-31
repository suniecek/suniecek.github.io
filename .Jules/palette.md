## 2026-01-14 - Replace blocking alert() with accessible inline validation in forms
**Learning:** Avoid using `alert()` for form validation, as it is a blocking and inaccessible pattern.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline red borders). Provide screen readers invisible labels via `aria-label` when inputs rely visually on placeholders.
