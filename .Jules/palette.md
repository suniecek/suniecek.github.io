## 2024-05-18 - Inline Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. The guestbook form currently uses an alert for missing fields.
**Action:** Replace `alert()` with inline validation by injecting an error element (`role="alert"`), applying `aria-invalid="true"`, and styling the invalid inputs with a red border (`#c04040`) directly via JS.
