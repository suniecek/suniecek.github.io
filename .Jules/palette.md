## 2024-05-24 - Inline Validation for Guestbook
**Learning:** Using `alert()` for form validation is a blocking and inaccessible pattern. Screen readers often don't handle native alerts gracefully, and it disrupts the user's flow.
**Action:** Replaced `alert()` with inline validation in the guestbook form. An error message with `role="alert"` is injected into the DOM, and invalid fields are highlighted with a red border (`#c04040`) and `aria-invalid="true"`. Also added `aria-label` attributes to the form inputs since they lacked explicit `<label>` tags.
