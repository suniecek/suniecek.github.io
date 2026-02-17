## 2025-05-23 - [Desktop Metaphor Accessibility]
**Learning:** Custom desktop-like interfaces often rely on `div` elements for icons and menus, mimicking OS behavior visually but failing to provide native keyboard interaction semantics.
**Action:** When implementing desktop metaphors, systematically add `role="button"`, `tabindex="0"`, and global keyboard event listeners (Enter/Space) to bridge the gap between visual affordance and assistive technology support.
