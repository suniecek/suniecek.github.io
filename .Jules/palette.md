
## 2024-07-19 - Accessible Form Validation
**Learning:** Avoid using blocking `alert()` dialogs for form validation, as they are not accessible.
**Action:** Replace `alert()` with inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and styling the border to `#c04040`.
