## 2024-11-09 - Added aria-labels to Snail game mobile controls
**Learning:** Icon-only buttons used for custom games (like Snail) present accessibility challenges, especially when rendered explicitly for mobile-game-controls where keyboard/screen reader users might struggle to identify the button's action based on text symbols (↑, ↓, ←, →).
**Action:** When adding game controls that rely purely on symbols, ensure each control `<button>` has an explicit `aria-label` describing its exact action (e.g. "Move Up", "Move Down") to convey meaning correctly to assistive technology.
