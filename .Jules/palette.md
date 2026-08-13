## 2024-10-24 - Replace Blocking Alerts with Inline Validation
**Learning:** Using `alert()` for form validation is a common anti-pattern that creates blocking, inaccessible experiences for users, specifically breaking flow and heavily impacting screen reader users.
**Action:** When encountering `alert()` for validation, replace it by injecting an inline error element with `role="alert"`, applying `aria-invalid="true"`, and adding distinct visual inline styling (like a red border using existing color tokens, e.g. #c04040) directly to the empty inputs.
