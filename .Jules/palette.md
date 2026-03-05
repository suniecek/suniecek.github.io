## 2024-05-30 - Focus States for Desktop UI Mocks
**Learning:** Custom interactive elements representing OS components (icons, taskbars, start menus) created with `div` tags lack native keyboard navigation and visual focus handling out of the box, breaking accessibility.
**Action:** When working on desktop-like interfaces that emulate OS behavior in DOM, ensure global keydown listeners trigger `.click()` on focused items, and apply `role="button"` + `tabindex="0"` alongside `:focus-visible` styling uniformly across these mock controls.
