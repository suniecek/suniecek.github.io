
## 2024-05-24 - Global Event Delegation for Custom Controls
**Learning:** For web apps with a desktop OS paradigm that extensively use `div` elements as custom controls (like taskbar buttons or start menu triggers), managing keyboard accessibility per-element can become tedious and error-prone, especially for dynamically generated content.
**Action:** Use a global document-level `keydown` listener that checks if the active `e.target` has `role="button"` and maps the `Enter` and `Space` keys to `e.target.click()`. This provides a scalable, zero-maintenance approach to ensure all custom buttons instantly become keyboard interactive without modifying their individual creation logic beyond adding ARIA attributes.
