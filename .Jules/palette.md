## 2025-02-18 - Guestbook Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. It interrupts the flow, traps screen readers, and prevents semantic context tracking.
**Action:** Replace `alert()` popups with inline validation. Inject an error element with `role="alert"`, visually emphasize empty fields using red inline borders (`1px solid #c04040`), and tag invalid inputs with `aria-invalid="true"`.
