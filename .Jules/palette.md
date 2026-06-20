## 2024-05-18 - Replace alert() with inline validation in forms
**Learning:** `alert()` dialogs are blocking and an inaccessible pattern for form validation. Adding `aria-invalid="true"` attributes to the inputs and injecting a descriptive error message with `role="alert"` greatly improves accessibility and user experience.
**Action:** Always implement inline validation with visual indicators (like inline red borders '#c04040') and proper ARIA roles instead of relying on blocking `alert()` dialogues.
