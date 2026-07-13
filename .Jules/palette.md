## 2024-07-13 - Avoid blocking alerts for form validation
**Learning:** Using `alert()` for form validation creates a blocking, inaccessible experience. Users need clear, contextual feedback that is announced by screen readers.
**Action:** Instead of `alert()`, implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and adding distinct visual styling (e.g., inline red borders `#c04040`) directly on the invalid fields. Ensure that valid fields clear these states.
