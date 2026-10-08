## 2025-01-20 - [Guestbook Inline Validation]
**Learning:** Using `alert()` for form validation is a blocking and inaccessible pattern, especially problematic for screen reader users and keyboard navigation.
**Action:** Replaced `alert()` with inline validation. Added an error element with `role="alert"`, applied `aria-invalid="true"`, and used a distinct visual red border (`#c04040`) on invalid inputs. Also ensured that the visual and accessible states are cleared correctly when the input becomes valid.
