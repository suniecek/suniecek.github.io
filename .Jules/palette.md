## 2024-06-06 - Accessible Inline Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern. Modifying styles dynamically with JavaScript (`border: 2px solid #c04040`) and adding `aria-invalid="true"` coupled with a `role="alert"` wrapper avoids this and conforms to the 'no custom CSS' project constraints.
**Action:** Always prefer inline error messaging injected into the DOM with accessible `role` and `aria` attributes over native browser dialogs like `alert()`.
