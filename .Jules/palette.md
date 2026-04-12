## 2024-05-14 - Accessible Form Validation
**Learning:** Using alert() for form validation creates a blocking experience and poor UX, especially for screen reader users. Furthermore, relying only on placeholders for inputs means the accessible name may be missing or inadequate for assistive technologies.
**Action:** Replaced alert() with an inline error container using role="alert" and aria-live="assertive". Added aria-invalid="true" to the failing inputs and visually highlighted the error with a border. Ensured inputs relying solely on placeholders now have explicit aria-label attributes.
