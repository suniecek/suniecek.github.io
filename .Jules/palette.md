## 2024-05-03 - Replace blocking alert validation with accessible inline indicators
**Learning:** Legacy UI patterns relying on `alert()` for form validation break the user flow and lack accessibility support.
**Action:** Replace `alert()` validations with dynamic inline styles (e.g. `border: 2px solid #c04040`) and `aria-invalid` updates (`true`/`false`) to inform screen readers of the validation state while keeping the UX smooth.
