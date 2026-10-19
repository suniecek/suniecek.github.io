## 2024-06-25 - Replace alert with inline validation
**Learning:** Using `alert()` for form validation is a poor, inaccessible pattern that blocks the browser thread and fails to clearly guide users to the error, leading to frustration.
**Action:** Always implement inline validation by injecting a descriptive element with `role="alert"` and updating empty/invalid fields with `aria-invalid="true"` and distinct error styling (e.g. red borders like `#c04040`) without adding new custom CSS classes. Also remember to explicitly clear all prior error states upon resubmission.
