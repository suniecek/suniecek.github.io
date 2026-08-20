## 2024-08-20 - Replace blocking alert() with accessible inline validation
**Learning:** Found that `alert()` was being used for form validation in the guestbook form, which is a blocking and inaccessible pattern. Screen readers handle alerts poorly and it interrupts the user flow.
**Action:** Replace `alert()` with inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"` on invalid inputs, and using distinct visual styling (e.g., inline red borders) using standard app colors like `#c04040`.
