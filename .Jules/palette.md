## 2024-07-04 - Replace Blocking Alert Dialogs in Form Validation
**Learning:** Using `alert()` for form validation is an inaccessible pattern that blocks screen readers and disrupts flow, particularly in highly interactive desktop-like web apps.
**Action:** Replace `alert()` calls with accessible inline error messages utilizing `role="alert"`, `aria-invalid="true"`, and distinct visual styling (e.g., `#c04040` red borders) to provide immediate and accessible feedback without blocking interaction.
