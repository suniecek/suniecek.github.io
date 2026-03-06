
## 2024-03-24 - [Keyboard Activation for Custom Buttons]
**Learning:** When using `div` elements as buttons in custom UI mimicking desktop OS controls, adding `role="button"` and `tabindex="0"` allows them to be focused, but they still lack the native space/enter activation behavior of `<button>` elements.
**Action:** Always include a global `keydown` event listener or specific handlers that listen for `Enter` and `Space` key presses and call `.click()` on the `activeElement` if it has `role="button"`.
