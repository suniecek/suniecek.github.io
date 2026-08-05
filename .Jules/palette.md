## 2024-05-24 - Inline Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. Screen readers often don't handle them well, and they disrupt the user flow.
**Action:** Implemented inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (inline red borders) to provide immediate, accessible feedback.
