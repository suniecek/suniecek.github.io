## 2024-05-24 - Inline Validation over Native Alerts
**Learning:** Using native `alert()` for form validation creates blocking UI states that disrupt the flow and cause test automation (like Playwright) to hang if not explicitly handled.
**Action:** Replace `alert()` calls with accessible inline validation (`role="alert"`, `aria-invalid="true"`) and use explicit DOM styling (e.g., `#c04040` error borders) to provide immediate, non-blocking feedback to the user.
