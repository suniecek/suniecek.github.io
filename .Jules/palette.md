
## 2024-07-29 - Missing ARIA labels on forms and icon-only buttons
**Learning:** Certain interactive elements in the application, such as form inputs without explicit associated `<label>` elements (like the guestbook and color picker) and icon-only mobile controls for the snail game, were completely inaccessible to screen reader users because they lacked contextual descriptions.
**Action:** Always verify that input fields without explicit, text-based `<label>` associations and any icon-only interactive elements (like buttons with only arrows or symbols) have an explicitly set `aria-label` attribute to provide necessary context for assistive technologies.
