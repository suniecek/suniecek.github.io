## 2026-01-10 - Replace blocking alert() with accessible inline validation
**Learning:** Using `alert()` for form validation is inaccessible and blocks the user interface. It fails to associate the error message with the specific field needing attention.
**Action:** Implement inline validation by dynamically injecting an error container with `role="alert"` (for screen readers) and adding distinct visual cues (e.g., inline red borders) along with `aria-invalid="true"` attributes to the empty/invalid inputs.
