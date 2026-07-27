## 2024-07-27 - Replace blocking alerts with inline validation
**Learning:** Using `alert()` for form validation is a blocking and inaccessible pattern, particularly in custom web apps. Screen reader users can miss context, and it disrupts flow.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline borders using the standard #c04040 color). Remember to manage state cleanly by reverting inline styles and removing `aria-invalid` attributes on subsequent validations.
