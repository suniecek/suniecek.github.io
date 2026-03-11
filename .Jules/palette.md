
## $(date +%Y-%m-%d) - Keyboard Accessibility for Simulated Desktop Elements
**Learning:** The application simulates a desktop OS using `div` elements for interactive controls (like desktop icons and taskbar buttons) instead of native interactive elements (`<button>`, `<a>`). Because of this, they entirely lack native keyboard accessibility, meaning users cannot navigate or activate them with a keyboard.
**Action:** When working with simulated interactive elements in this OS environment, always inject ARIA attributes (`role="button"`), `tabindex="0"`, and ensure a global or local `keydown` listener maps `Enter` and `Space` keys to `.click()` events, along with providing a clear `:focus-visible` outline.
