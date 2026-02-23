## 2026-02-23 - Interactive Divs Pattern
**Learning:** The application heavily relies on `div` elements with `onclick` handlers for interactive controls (Start button, Taskbar buttons, Icons) instead of semantic `<button>` elements. This makes them inaccessible to keyboard users and screen readers by default.
**Action:** When encountering non-semantic interactive elements in legacy codebases, retro-fit them with `role="button"`, `tabindex="0"`, and global keyboard event handlers (Enter/Space) to restore accessibility without requiring a complete markup rewrite.
