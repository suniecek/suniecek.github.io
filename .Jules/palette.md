## 2024-05-24 - Accessible Inline Validation
**Learning:** Replaced blocking `alert()` for form validation with accessible inline validation elements (`role="alert"`) and visual cues (red borders, `aria-invalid="true"`). The previous approach hindered usability and screen reader accessibility.
**Action:** Always implement inline error feedback using dedicated error containers and ARIA attributes for form inputs instead of relying on browser `alert()` dialogs.
