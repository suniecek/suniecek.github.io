## 2024-11-11 - Replace Blocking Alerts with Inline Validation
**Learning:** Blocking alerts (`alert()`) provide poor UX and disrupt screen readers. Inline validation provides immediate, clear context for errors without taking users out of their flow.
**Action:** Replace `alert()` validations with dynamically inserted error messages (`role="alert"`) and inline styles (`aria-invalid="true"`, red border) to ensure screen readers announce them immediately and users understand exactly which fields need correction. Always clear previous error states first.
