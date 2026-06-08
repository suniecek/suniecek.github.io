## 2026-01-10 - Replace blocking alert() with accessible inline validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides poor UX, especially for screen readers and users who navigate via keyboard. It also halts all other interactions until dismissed.
**Action:** Replace `alert()` validations with inline error messages using `role="alert"`, visual cues (like a red border using `#c04040`), and semantic attributes like `aria-invalid="true"`. Always clear these error states dynamically when the user re-attempts the action.
