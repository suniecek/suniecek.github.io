
## 2024-05-18 - Replacing `alert()` with Inline Accessible Validation
**Learning:** `alert()` dialogs in form validation are inaccessible as they trap keyboard focus and interrupt the screen reader experience. It's better to implement accessible inline validation.
**Action:** When validating forms, instead of using `alert()`, inject or display an error message element with `role="alert"`, style it with a distinct color (e.g., `#c04040`), and add `aria-invalid="true"` attributes to the offending input fields. Make sure to reset these states upon successful submission or valid input.
