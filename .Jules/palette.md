## 2024-05-18 - Guestbook Validation
**Learning:** The guestbook form currently uses a blocking `alert()` for validation, which is an inaccessible and disruptive UX pattern.
**Action:** Replace `alert()` with inline validation (using a dedicated error container with `role="alert"`) and visual cues (like an inline red border and `aria-invalid="true"`) to provide clear, accessible feedback. Also, ensure inputs have `aria-label`s for screen readers.
