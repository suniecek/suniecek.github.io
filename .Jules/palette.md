## 2024-05-18 - Avoid alert() for form validation
**Learning:** Using `alert()` for form validation is a blocking pattern that is highly inaccessible for screen reader users and frustrating for general users, causing context loss.
**Action:** Always implement inline validation by injecting an error element with `role="alert"`, applying `aria-invalid="true"`, and using distinct visual styling (e.g., inline red borders `#c04040`) directly on the problematic fields.
