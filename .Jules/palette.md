
## 2024-05-18 - Replacing Blocking Alerts with Accessible Inline Validation
**Learning:** Using `alert()` for form validation creates a blocking UX that traps users and disrupts screen readers.
**Action:** Replace `alert()` with inline error containers using `role="alert"` and `aria-live="assertive"`, applying `aria-invalid="true"` and visual cues (like inline borders if custom CSS is restricted) to failing inputs. Reset these states upon successful submission.
