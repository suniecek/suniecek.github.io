## 2024-05-22 - Desktop OS pattern requires manual a11y injection
**Learning:** The codebase mimics a desktop OS using `div` elements for everything (`.icon`, `.start-button`, `.taskbar-button`). This means native keyboard accessibility is completely absent. Any new "interactive" element added to this "desktop" must have `role`, `tabindex`, and keyboard handlers manually injected.
**Action:** When creating new UI components for this OS, always include a helper function or pattern to inject standard button a11y attributes to these divs.
