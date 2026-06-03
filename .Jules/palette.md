## 2026-06-03 - Accessible Inline Validation over Blocking Alerts
**Learning:** Using `alert()` for form validation is a blocking pattern that is poorly received by users and completely inaccessible.
**Action:** Replace `alert()` calls with dynamically injected inline error text (using `role="alert"`) and visualize the invalid state using dynamic CSS styling (e.g., inline red borders) accompanied by the `aria-invalid="true"` attribute to assist screen readers.
