
## 2024-07-15 - Replace blocking alert with inline validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides a poor user experience.
**Action:** Implemented accessible inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"` to invalid inputs, and using an inline `#c04040` border to highlight them without needing new CSS classes.
