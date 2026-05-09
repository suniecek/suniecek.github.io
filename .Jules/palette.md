## 2024-05-18 - Replacing Blocking Form Validation
**Learning:** The legacy codebase frequently relies on `alert()` for form validation errors, which severely disrupts UX and is inaccessible for screen readers. Replacing it with inline error containers must consider the constraint of avoiding custom CSS.
**Action:** Use inline error text with `role="alert"` and dynamically apply JavaScript inline styles (`element.style.border = "1px solid red"`) and `aria-invalid="true"` attributes to the failing input elements to ensure accessibility while adhering to the style boundary rules.
