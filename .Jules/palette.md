## 2024-05-24 - Guestbook Form Validation
**Learning:** Avoid using `alert()` for form validation as it is a blocking and inaccessible pattern. It interrupts the flow and doesn't provide persistent contextual feedback.
**Action:** Implemented inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (inline red borders using standard '#c04040' color) to communicate errors contextually and accessibly.
