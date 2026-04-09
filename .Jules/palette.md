
## 2024-04-09 - Accessible Form Validation
**Learning:** This app frequently relies on blocking `alert()` calls for form validation (like in the guestbook), which is inaccessible to screen readers and disrupts the user experience.
**Action:** Replace `alert()` calls with inline error containers using `role="alert"` and `aria-live="assertive"`, and dynamically shift focus to the first invalid input field to ensure smooth keyboard and screen reader workflows.
