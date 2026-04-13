## 2024-04-13 - Replace blocking alert validation with accessible inline feedback
**Learning:** Legacy UI elements using JavaScript `alert()` for validation completely block screen readers and lack contextual error association for the user, preventing accessible form completion.
**Action:** Replace `alert()` validations with inline error containers using `role="alert"` and `aria-live="assertive"`, applying `aria-invalid="true"` directly to the offending inputs for clear screen reader context.
