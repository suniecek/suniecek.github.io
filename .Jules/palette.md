## 2026-03-10 - Accessible Custom OS Controls
**Learning:** When mimicking a desktop OS environment using custom HTML elements (like `div`s for desktop icons, taskbar buttons, and start menus), native keyboard and screen reader accessibility is lost.
**Action:** Always manually inject `role="button"`, `tabindex="0"`, and ARIA state attributes (e.g., `aria-expanded`) onto these custom controls. Additionally, implement a global keydown listener to map 'Enter' and 'Space' keys to `click()` events, and provide visible focus indicators (e.g., `:focus-visible`) for keyboard navigators.
