## 2024-12-04 - Replace Blocking Alerts with Inline Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that disrupts user flow and isn't easily perceivable by all assistive technologies.
**Action:** Always implement inline validation by injecting a dedicated error element (e.g., `<div role="alert">`) and applying `aria-invalid="true"` alongside distinct visual cues (like red borders) directly on the erroneous inputs.
