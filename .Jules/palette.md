## 2024-05-24 - Inline Form Validation
**Learning:** `alert()` is an inaccessible pattern for form validation as it blocks the UI.
**Action:** Use inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline borders). When applying inline visual changes via JS (like adding a border to an element), explicitly clear the previous states (e.g. empty string `''` for style border and `removeAttribute`) before re-evaluating the form to safely revert to original state.
