## 2024-05-24 - Replace blocking alerts with inline validation
**Learning:** Blocking `alert()` dialogs in forms provide a poor user experience, disrupt screen readers, and cause test automation flakiness.
**Action:** Replace `alert()` calls with dynamically injected inline error messages using `role="alert"` and `aria-live="assertive"`, applying `aria-invalid="true"` and a visual red border to the failing inputs.
