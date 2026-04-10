## 2024-04-10 - Adding ARIA labels to form inputs without visual labels
**Learning:** In this UI, certain form inputs (like the guestbook name/message and the color picker) rely entirely on placeholders or adjacent non-label text for visual context, lacking explicit `<label>` elements. This makes them inaccessible to screen readers which require an accessible name.
**Action:** Applied `aria-label` attributes directly to these `<input>` and `<textarea>` elements to provide accessible names without altering the visual design or requiring custom CSS for visually hidden labels.
