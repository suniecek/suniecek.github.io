## 2024-08-28 - Replace Form Alert with Inline Validation
**Learning:** Form validation in this app used a blocking `alert()` which is inaccessible and interrupts user flow. Customizing inline validation requires inline styling due to constraints around not modifying external CSS.
**Action:** Replaced `alert()` with an inline error message (`role="alert"`) and input highlighting (`aria-invalid="true"`), demonstrating how to implement accessible validation errors within the project's CSS boundaries.
