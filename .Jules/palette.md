## 2024-06-05 - Avoid Blocking `alert()` for Form Validation
**Learning:** Using `alert()` for form validation creates a disruptive, blocking experience that is inaccessible to many users. The guestbook form was relying on `alert()` which halted interactions.
**Action:** Replace `alert()` calls with inline validation using a dynamically injected DOM element with `role="alert"` and apply `aria-invalid="true"` alongside visual cues (e.g. inline red borders) for missing/invalid fields.
