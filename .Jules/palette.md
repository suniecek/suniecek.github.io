## 2024-05-24 - Inline Form Validation
**Learning:** Replacing blocking `alert()` forms with inline validation featuring `role="alert"` and `aria-invalid="true"` significantly improves accessibility. The blocking pattern was not very usable.
**Action:** Always prefer inline validation, using semantic ARIA attributes for inputs and the existing `#c04040` red color for visual feedback. Ensure to clear the previous states correctly using `style.border = ''` and `removeAttribute('aria-invalid')`.
