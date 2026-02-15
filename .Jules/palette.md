## 2024-05-23 - Interactive Elements & Template Placeholders
**Learning:** Found extensive use of `div`s with `onclick` handlers lacking `role="button"` and `tabindex="0"`, making the app inaccessible to keyboard users. Also discovered broken `{WINDOW_ID}` template placeholders in HTML that broke specific UI controls.
**Action:** When auditing legacy/simple web apps, always check for "div-buttons" and missing keyboard support. Also, scan for unreplaced template strings that might indicate copy-paste errors or incomplete build processes.
