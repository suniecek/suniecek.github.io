## 2024-05-24 - Inline Validation
**Learning:** Avoid using blocking `alert()` calls for form validation, as it is inaccessible and creates a jarring user experience.
**Action:** Replace `alert()` with inline validation by dynamically injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and adding visual styling (like inline red borders using a standard color, e.g. `#c04040`).
