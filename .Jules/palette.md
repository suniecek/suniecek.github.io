
## 2024-05-24 - Accessibility: Form Validation Alerts
**Learning:** Native `alert()` dialogs used for form validation are completely inaccessible to screen readers and block the main thread, leading to a frustrating user experience, especially on desktop-simulating UIs.
**Action:** Replace `alert()` validations with inline, accessible error message containers (`role="alert"`, `aria-live="assertive"`) and apply visual indicators coupled with `aria-invalid="true"` attributes directly on the offending input fields to ensure state is accurately conveyed visually and programmatically.
