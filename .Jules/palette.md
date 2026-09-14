## 2024-05-14 - Replace blocking alert() with inline validation
**Learning:** Found that `alert()` was being used for form validation, which is a blocking and inaccessible pattern.
**Action:** Implemented inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (`#c04040` red borders) to provide better context and accessibility without custom CSS.
