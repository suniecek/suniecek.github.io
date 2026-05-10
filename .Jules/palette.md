## 2024-05-18 - Improved Guestbook Form Validation
**Learning:** Legacy windowing apps often rely on blocking `alert()` calls for form validation, which are visually disruptive and inaccessible to screen readers.
**Action:** Replace `alert()` validations with inline error containers using `role="alert"` and `aria-live="assertive"`, alongside conditionally adding `aria-invalid="true"` and visual borders to failing input elements. Clear these states when re-validating.
