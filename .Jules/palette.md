## 2024-04-26 - Desktop OS UI Accessibility
**Learning:** The application heavily relies on simulated desktop OS UI components (`div`s acting as windows, icons, buttons). Because they use custom `div` structures rather than semantic HTML elements like native `<button>`, none of the 51 window control buttons, 6 desktop icons, or taskbar elements are accessible to screen readers natively, lacking `role="button"`, `tabindex="0"`, and `aria-label`s.
**Action:** Since fixing *all* simulated desktop elements exceeds the <50 line PR rule for micro-UX changes and requires more structural work or dynamic JavaScript injections, I will focus on standard HTML forms where inline validation and ARIA labels can provide an immediate accessibility/UX win in fewer lines of code.

## 2024-04-26 - Blocking Alerts for Validation
**Learning:** The guestbook form currently uses a native blocking `alert('please fill in both fields!')` for form validation. This is poor UX because it interrupts the user's flow aggressively, offers no inline context as to which specific field failed, and creates testing difficulties in automated environments like Playwright without specific handlers.
**Action:** Replace the blocking alert with an inline error message container (`role="alert"`, `aria-live="assertive"`) and visually indicate failing fields using red inline borders alongside `aria-invalid` attributes.
