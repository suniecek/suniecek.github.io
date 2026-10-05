## 2024-10-24 - Replace blocking alerts with accessible inline validation
**Learning:** Using `alert()` for form validation is a blocking, inaccessible pattern that provides poor UX. Relying on `aria-invalid` combined with role `alert` provides clearer inline messaging for screen reader users and those seeking immediate visual context.
**Action:** Always avoid `alert()` for validation. Instead, use inline messages (e.g. inject an element with `role="alert"`) and set `aria-invalid="true"` directly on the invalid form fields, resetting these properties upon successful submission or retry.
