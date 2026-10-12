## 2024-10-12 - Replacing alert() with Inline Validation
**Learning:** Using `alert()` for form validation is a blocking and inaccessible pattern, particularly for screen reader users and keyboard navigation.
**Action:** Replace `alert()` with inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and styling with an inline red border using the standard `#c04040` error color for better UX and accessibility.
