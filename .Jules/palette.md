## YYYY-MM-DD - Replaced blocking alert with accessible inline validation
**Learning:** Avoid using `alert()` for form validation, as it is a blocking and inaccessible pattern for screen readers.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline red borders) using the theme's color #c04040.
