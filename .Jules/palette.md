## 2026-05-25 - Form Accessibility & Inline Validation
**Learning:** Using `alert()` for form validation is an abrasive, blocking pattern that creates a poor UX and is entirely inaccessible to screen reader users who lose focus context.
**Action:** Replace `alert()` with inline validation patterns: inject an error element with `role="alert"`, use `aria-invalid="true"`, and apply distinct visual styling (e.g., `#c04040` red borders) to the empty fields to guide both sighted and visually-impaired users to the error gracefully.
