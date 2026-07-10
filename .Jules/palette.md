## 2024-07-10 - Replace blocking alert() with accessible inline validation
**Learning:** Using `alert()` for form validation is a blocking and inaccessible pattern, especially for screen reader users. It forces context switching and traps focus.
**Action:** Always implement inline validation by dynamically injecting an error element with `role="alert"`, applying `aria-invalid="true"` to invalid inputs, and using distinct visual styling (e.g., inline red borders). Use JavaScript to safely revert state when corrected.
