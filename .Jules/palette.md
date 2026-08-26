
## 2024-08-26 - Form Validation Accessibility
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides poor user experience.
**Action:** Replace `alert()` calls with inline validation by dynamically injecting an error element (with `role="alert"`, red text) and applying `aria-invalid="true"` with visually distinct inline styling (e.g., red borders) to empty fields. Ensure previous error states are cleared before re-evaluating.
