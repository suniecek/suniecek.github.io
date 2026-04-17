1. **Update `index.html`:**
   - Add `aria-label` to `#guestName` and `#guestMessage` inputs in the guestbook form since they currently only rely on visual placeholders.
   - Inject an inline error container `div` with `id="guestbookError"`, `role="alert"`, `aria-live="assertive"`, and `display: none` just above the submit button.

2. **Update `script.js`:**
   - Modify `addGuestbookEntry()` to remove the blocking `alert()`.
   - Implement logic to display the error message in the inline container and apply `aria-invalid="true"` along with a red border (`2px solid #c04040`) to the specific empty inputs. Clear these states when the user successfully submits.

3. **Update Palette Journal:**
   - Create `.Jules/palette.md` and document the critical learning about replacing legacy `alert()` validations with accessible inline error containers.

4. **Run Pre-commit Checks:**
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.

5. **Submit PR:**
   - Use the submit tool with the title `🎨 Palette: Replace alert validation with accessible inline errors in guestbook` and a formatted description explaining the UX and a11y improvements.
