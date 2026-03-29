## 2026-03-29 - [Accessible Form Validation]
**Learning:** Native browser `alert()` dialogues severely disrupt the screen reader experience, trapping focus and failing to contextualize which inputs are problematic. Transitioning to an inline `role="alert"` combined with `aria-invalid="true"` on fields creates a seamless, context-aware recovery path for users.
**Action:** When refactoring legacy vanilla JS forms, always replace blocking alerts with inline, ARIA-described validation messages and dynamically manage the `aria-invalid` state of the associated inputs.
