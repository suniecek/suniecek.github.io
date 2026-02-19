## 2024-05-23 - [Divs as Buttons Pattern]
**Learning:** This desktop simulation relies heavily on `div` elements for interactive controls (icons, start button, window controls) instead of semantic `<button>` elements, requiring manual `role="button"`, `tabindex="0"`, and JS key handling to support keyboard navigation.
**Action:** When creating new interactive "desktop" elements, explicitly add accessibility attributes and ensure they are covered by the global keyboard event delegate.
