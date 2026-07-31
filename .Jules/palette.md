## 2024-05-24 - Replace blocking alert() with accessible inline validation
**Learning:** Using `alert()` for form validation is a blocking pattern and inaccessible to many users.
**Action:** Replace `alert()` calls with inline validation by injecting an error element with `role="alert"` and applying `aria-invalid="true"` to empty inputs.
