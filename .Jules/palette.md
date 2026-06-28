## 2026-01-20 - Replaced Blocking Alert with Inline Form Validation
**Learning:** Avoid using blocking `alert()` dialogs for form validation, as they are an inaccessible pattern.
**Action:** Implemented inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and styling the invalid fields with a distinct red border (`#c04040`) directly via inline styles to avoid modifying the CSS. This provides clear, non-blocking feedback to screen readers and visual users.
