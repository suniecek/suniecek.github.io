## 2025-01-20 - Replacing blocking alerts with accessible inline validation
**Learning:** Native `alert()` dialogs used for validation provide a poor user experience as they are blocking and less accessible. Relying on them removes context because the user is taken away from the form itself.
**Action:** When implementing form validation, avoid `alert()`. Instead, inject an inline error message with `role="alert"` and visually style it using standard variables, while setting `aria-invalid="true"` on the failing fields.
