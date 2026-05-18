## 2024-05-15 - Inline Form Validation in Retro UIs
**Learning:** Legacy web patterns often rely on blocking `alert()` calls for form validation, which completely breaks screen reader flow and creates an abrupt user experience.
**Action:** Always replace blocking `alert()` validations with inline error containers using `role="alert"` and `aria-live="assertive"`, alongside `aria-invalid="true"` and visual cues (like red borders) on the problematic inputs to provide immediate, accessible feedback without losing focus.
