## 2025-02-24 - Inline Form Validation
**Learning:** Avoid using `alert()` for form validation as it is blocking and inaccessible.
**Action:** Replace `alert()` with inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling like `#c04040` inline borders.
