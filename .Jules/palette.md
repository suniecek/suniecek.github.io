## 2024-05-30 - Replace blocking alert for form validation
**Learning:** Using `alert()` for form validation is a blocking and inaccessible pattern, particularly in retro web app environments. Screen readers are disrupted, and the interaction blocks the event loop.
**Action:** Replace `alert()` validations with inline error messages using a semantically correct `role="alert"` element, while visually highlighting the invalid fields (e.g. with red inline borders and `aria-invalid="true"`).
