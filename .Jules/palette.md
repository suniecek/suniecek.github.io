## 2024-05-24 - Interactive Custom Components Need Roles and ARIA Labels
**Learning:** In custom JS window managers, elements that act as buttons (like custom close, minimize, maximize controls and Start Menu toggles) using `div` tags lack semantic meaning for screen readers. They require `role="button"` and `aria-label` or `aria-expanded` attributes for accessibility.
**Action:** When designing custom controls and window systems, always apply proper roles, ARIA labels, and ARIA state attributes (like `aria-expanded`) to non-semantic interactive elements.

## 2024-05-24 - Interactive Custom Components Need Keyboard Accessibility
**Learning:** Adding `role="button"` and `aria-*` attributes is only half the battle for accessibility on non-semantic `div` controls. Without `tabindex="0"` and keyboard event listeners (handling 'Enter' and 'Space'), screen reader users and keyboard-only users cannot activate them.
**Action:** Always ensure that custom interactive components (like simulated window buttons) have `tabindex="0"` and listen for both `click` and `keydown` (Enter/Space) events to provide a fully accessible experience.
