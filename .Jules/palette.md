## 2024-10-24 - Desktop OS Simulation Pattern
**Learning:** This "desktop OS" simulation relies heavily on `div` elements with `onclick` handlers for everything (icons, start menu, taskbar buttons), completely bypassing semantic HTML. This creates a systemic accessibility void where keyboard users are locked out.
**Action:** When working on "OS-like" web interfaces, prioritize a global keyboard event delegate that maps `Enter`/`Space` to `click()` for all elements with `role="button"`, as this is cleaner than refactoring hundreds of `div`s to `<button>`s which often breaks precise CSS layouts.

## 2024-10-24 - Dynamic State Accessibility
**Learning:** In a single-page application simulating a desktop environment, elements like windows might be static in the DOM but hidden. Relying solely on `DOMContentLoaded` to initialize accessibility attributes (like `role` and `aria-label`) is fragile if the initialization doesn't account for state changes or dynamically created instances.
**Action:** Bind accessibility attribute initialization to the specific state change function (e.g., `openWindow`) to ensure every interactive element is correctly configured at the moment it becomes relevant to the user, regardless of when it was added to the DOM.
