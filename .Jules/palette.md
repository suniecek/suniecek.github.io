## 2024-10-09 - Added missing aria-labels to forms and game controls
**Learning:** In desktop-like custom web environments, isolated inputs inside custom windows (like the guestbook or paint app) often lack standard `<label>` relationships. Icon-only buttons (like arrows) are completely inaccessible to screen readers without explicitly set aria-labels.
**Action:** Always add `aria-label` directly to input fields and icon-only interactive elements when explicit `<label>` tags are difficult to integrate into tight UI line constraints.
