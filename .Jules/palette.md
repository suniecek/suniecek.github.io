## 2026-01-15 - Replaced Blocking Alert with Inline Validation in Guestbook
**Learning:** Found a blocking `alert()` used for form validation in the guestbook component, which is an inaccessible and disruptive pattern.
**Action:** Replaced it with inline validation by injecting an error message element with `role="alert"`, setting `aria-invalid="true"`, and applying inline red `#c04040` borders to the specific empty inputs, while clearing these states on subsequent submissions.
