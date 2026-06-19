## 2024-06-19 - Avoid Blocking Alerts for Form Validation
**Learning:** Using `alert()` for form validation creates a blocking, inaccessible experience that is particularly difficult for screen readers to handle gracefully.
**Action:** Replace `alert()` calls with inline validation elements using `role="alert"`, setting `aria-invalid="true"` on invalid inputs, and clearly identifying them visually (e.g., with a red inline border using the standard `#c04040` red).
