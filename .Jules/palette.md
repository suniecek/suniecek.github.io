## 2024-07-25 - Replace blocking alert() with accessible inline validation
**Learning:** Using `alert()` for form validation is an inaccessible, blocking pattern.
**Action:** Replace `alert()` with inline validation by applying `aria-invalid="true"`, visual styling (like `style.border = '2px solid #c04040'`), and injecting an explicit error element with `role="alert"` directly into the form. Ensure state is cleared on retry.
