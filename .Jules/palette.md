## 2026-09-25 - Avoid Blocking Alert Validations
**Learning:** Using `alert()` for form validation is an inaccessible pattern that blocks user interaction.
**Action:** Replace `alert()` validations with inline error messages using `role="alert"` and visually highlight invalid fields using `aria-invalid="true"` and appropriate error styling (e.g. #c04040).
