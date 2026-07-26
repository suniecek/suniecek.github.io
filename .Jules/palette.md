## 2024-05-24 - Inline Validation over Alert
**Learning:** Avoid using `alert()` for form validation as it blocks the UI and is inaccessible. Additionally, when restricted by 'no custom CSS' boundaries, JavaScript can be used to directly apply inline styles like `#c04040` borders for visual error indication.
**Action:** Implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and clearing these states when corrected.
