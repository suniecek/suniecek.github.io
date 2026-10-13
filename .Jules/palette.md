## 2024-10-13 - Replace blocking alert() with inline validation
**Learning:** Using `alert()` for form validation is a blocking and inaccessible pattern, especially for users utilizing screen readers or those attempting to submit forms without clear contextual error messages. This can hinder a pleasant user experience.
**Action:** Always implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"` to input elements, and using distinct visual styling (e.g., inline red borders using the standard `#c04040` red color).
