## 2024-06-04 - Avoid Blocking Alerts for Form Validation
**Learning:** Using `alert()` for form validation is a blocking pattern that creates a poor user experience and introduces accessibility barriers, especially for screen readers which may not handle browser alerts consistently or elegantly.
**Action:** Replace `alert()` calls with accessible inline validation. Inject an error element with `role="alert"`, set `aria-invalid="true"` on invalid inputs, apply distinct visual styling (e.g., inline red borders), and use `oninput` handlers to clear these states as the user corrects their input.
