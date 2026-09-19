## 2024-09-19 - Removed blocking alerts for inline accessible validation
**Learning:** Using `alert()` for form validation is inaccessible and visually jarring. It locks the UI context and interrupts the user's flow, failing to contextually associate the error with the specific missing input fields.
**Action:** Replaced `alert()` with an inline error `div` explicitly using `role="alert"` for screen readers. Associated missing inputs with `aria-invalid="true"` and added `#c04040` standard red borders to visually indicate failing fields within the existing UX scope.
