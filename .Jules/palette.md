## 2024-05-24 - Guestbook Error Validation
**Learning:** Legacy apps using `alert()` for form validation completely break the immersive desktop-OS experience of the UI and are terrible for screen readers. Replacing them with an inline `role="alert"` container and managing `aria-invalid` attributes provides a significantly smoother, more accessible interaction.
**Action:** Always replace blocking alerts with inline validation patterns when modernizing legacy components in this app.
