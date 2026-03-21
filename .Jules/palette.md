## 2026-03-21 - Added Focus Visible to Custom Buttons
**Learning:** In a UI built primarily with custom `div` elements mimicking an OS desktop, native keyboard accessibility is lost. We need to manually inject `role="button"`, `tabindex="0"`, and custom `keydown` listeners. To prevent unintended scrolling, `e.preventDefault()` must be called on the Space key. When styling these focus states, `:focus-visible` is preferable to `:focus` so we don't disrupt mouse users.
**Action:** Always add ARIA attributes, global keydown listeners (handling Space correctly), and `:focus-visible` CSS when dealing with custom `div` interactive elements.

## 2024-03-21 - [Hidden Form Labels and Screen Readers]
**Learning:** Adding `<label style="display:none;">` to inputs completely removes them from the accessibility tree, failing to provide screen reader support.
**Action:** When visual labels are omitted (e.g., relying on placeholders visually), use `aria-label` directly on the `<input>`/`<textarea>` or use a proper screen-reader-only (`.sr-only`) CSS utility class instead of `display: none`.
