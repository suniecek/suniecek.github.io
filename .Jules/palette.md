## 2024-05-24 - Add ARIA Labels to Standalone Inputs
**Learning:** In applications where creating explicit `<label>` tags is difficult due to tight line-change constraints, it's essential to ensure accessibility by directly adding `aria-label` attributes to `<input>` and `<textarea>` elements, particularly in custom forms (like the guestbook) or custom tools (like the color picker).
**Action:** Always verify that all input elements, regardless of their visual context, have accessible names, prioritizing `aria-label` when wrapping or adjacent `<label>` tags are impractical.
