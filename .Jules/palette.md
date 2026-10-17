## 2024-05-24 - Replace blocking alert() with accessible inline validation
**Learning:** Using `alert()` for form validation is an inaccessible pattern that blocks screen readers and the UI thread. It provides poor user experience and breaks context for users.
**Action:** Replace `alert()` calls with inline validation elements that have `role="alert"`, use high-contrast error styling (e.g., `#c04040` red borders), and dynamically set `aria-invalid="true"` on invalid fields so screen readers announce the state change smoothly.
