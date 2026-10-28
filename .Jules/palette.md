## 2024-10-28 - Replace blocking alerts with inline validation
**Learning:** Blocking alert() dialogs provide a poor user experience, especially for accessibility, as they trap focus and disrupt flow. Screen readers announce them, but context is often lost when the alert closes.
**Action:** Replace alert()-based form validations with inline errors using role="alert", aria-invalid attributes on the offending inputs, inline red borders (#c04040), and programmatically move focus to the first invalid field.
