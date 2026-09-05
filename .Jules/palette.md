## 2025-01-20 - Replace blocking alert() with inline validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. It interrupts the user flow and doesn't clearly associate errors with the inputs.
**Action:** Replace `alert()` validations by dynamically adding an element with `role="alert"`, setting `aria-invalid="true"` on the empty/invalid inputs, and applying visual indicators (e.g. inline red border with `#c04040`) for better accessibility. Clear these states at the beginning of validation.
