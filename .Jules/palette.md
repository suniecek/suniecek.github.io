## 2024-06-13 - Replace Blocking Alerts with Inline Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that degrades the user experience and is hostile to screen readers.
**Action:** Replace `alert()` calls with inline validation elements (`role="alert"`), apply `aria-invalid="true"`, and use distinct visual styling (e.g., inline `#c04040` borders) directly via JS to maintain accessibility and avoid custom CSS constraints.
