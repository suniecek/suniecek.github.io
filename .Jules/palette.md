## 2024-05-23 - Retrofitting Accessibility to Non-Semantic UIs
**Learning:** In desktop simulation apps, interactive elements are often `div`s with `onclick` handlers, lacking native keyboard support and semantics.
**Action:** When retrofitting, systematically apply `role="button"`, `tabindex="0"`, and map `keydown` (Enter/Space) to the click handler. Ensure state attributes like `aria-expanded` are synced with visual toggles.
