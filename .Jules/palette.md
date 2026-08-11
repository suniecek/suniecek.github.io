## 2024-08-11 - Replace blocking alert() with inline validation for guestbook
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides poor user experience.
**Action:** Replace `alert()` with inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and styling the elements with inline borders to indicate errors without blocking the user.
