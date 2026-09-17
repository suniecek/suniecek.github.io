## 2024-06-25 - Replace blocking alert() with accessible inline validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. Implementing inline validation by dynamically injecting an error `div` with `role="alert"` and styling empty inputs with `aria-invalid="true"` provides a better, non-blocking user experience, especially for screen readers.
**Action:** Always prefer inline validation using `role="alert"` and input styling with `aria-invalid` over native blocking dialogs for custom components without standard form validation logic.
