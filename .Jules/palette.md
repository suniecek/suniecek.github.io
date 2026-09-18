## 2024-05-15 - Inline Form Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. Implementing inline validation with an injected error element (`role="alert"`) and visual cues (like inline borders with `aria-invalid="true"`) significantly improves accessibility and user flow without modifying global CSS files.
**Action:** Replace `alert()` validations with inline error messages using JavaScript to directly apply styles and ARIA attributes to targeted elements.
