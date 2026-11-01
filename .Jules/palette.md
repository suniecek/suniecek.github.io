## 2024-05-24 - Accessibility improvements for Window Controls and Icons
**Learning:** Found that custom window controls (minimize, maximize, close) using `div` elements need `role="button"`, `tabindex="0"`, and `aria-label` attributes to be accessible to screen readers and keyboard users. Additionally, desktop icons lack `role="button"` and `tabindex="0"`. Forms also lack proper ARIA labels.
**Action:** Always verify custom interactive elements (like custom buttons built with `div`) have the necessary ARIA roles, tabindex, and descriptive aria-labels.

## 2024-05-24 - Replace blocking alert() with accessible inline validation
**Learning:** Using `alert()` for form validation is disruptive and poorly accessible to screen reader users, who can get stuck or confused without proper context when an alert interrupts them. Inline validation with an explicit ARIA live region (e.g., `role="alert"`) and focus management provides a much smoother UX.
**Action:** When implementing form validation, avoid blocking alerts. Instead, explicitly clear previous error states, inject an error `div` with `role="alert"`, set `aria-invalid="true"` on invalid fields along with visual indicators (like a red border), and programmatically focus the first invalid input so screen readers read the problem immediately.
