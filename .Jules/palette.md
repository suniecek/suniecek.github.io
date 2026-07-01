## 2024-07-01 - Inline Validation Styles
**Learning:** For inline validation states without custom CSS, using inline borders of `#c04040` works well alongside `aria-invalid` to safely toggle temporary validation indicators.
**Action:** Replace inaccessible `alert()` dialogs with inline validation borders and a `role="alert"` container, utilizing standard theme colors like `#c04040` for error styling directly in JS.
