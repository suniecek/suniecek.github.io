## 2024-06-25 - Replace Blocking alert() With Inline Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that frustrates users and screen readers alike.
**Action:** Implemented inline error messages with `role="alert"` and applied `aria-invalid="true"` alongside distinct error styling (like red inline borders, adhering to '#c04040' used in the style scheme) directly adjacent to the relevant input fields. Reverting states with empty strings ensures original styles return properly.
