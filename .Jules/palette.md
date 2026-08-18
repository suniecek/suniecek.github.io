## 2025-05-19 - Replace Blocking Alerts with Inline Validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides a poor user experience, especially when users attempt to submit a form with missing information.
**Action:** Always implement accessible inline validation. When required fields are missing, clear previous error states, apply a distinct inline visual cue (e.g., a `#c04040` red border), set `aria-invalid="true"`, and inject an error message element with `role="alert"` so screen readers immediately announce the issue.
