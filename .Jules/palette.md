## 2024-06-25 - Replace Blocking alert() with Inline Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. Implementing inline validation with an error element (using `role="alert"`) and `aria-invalid="true"` significantly improves accessibility.
**Action:** Replace all usage of `alert()` for validation with inline validation. Apply `#c04040` (the standard red color used in the design system) for the inline error state. Clear the visual state and `aria-invalid` attribute upon retry.
