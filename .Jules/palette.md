## 2024-04-16 - Inline Validation for Guestbook
**Learning:** Legacy UI patterns often rely heavily on blocking `alert()` popups for validation logic, which are disruptive, non-descriptive for visually impaired users, and break seamless flow. Hard-coded text nodes in UI replacements must ensure they are properly mapped via accessibility bindings (e.g. `role="alert"` + `aria-live`).
**Action:** Replace `alert()` driven client validations with inline error containers using `aria-invalid` bindings to the specific input components triggering the failure.
