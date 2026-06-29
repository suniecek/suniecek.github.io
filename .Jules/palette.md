## 2025-01-20 - Replacing blocking alerts with inline validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that degrades user experience. Screen reader users and keyboard navigators benefit greatly from clear, inline validation.
**Action:** Replaced `alert()` in the guestbook form with an inline error container (`role="alert"`) and visual cues (red borders and `aria-invalid="true"`) to guide users properly without hijacking the browser.
