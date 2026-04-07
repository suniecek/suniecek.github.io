
## 2024-04-07 - Guestbook Validation UX
**Learning:** Replacing blocking `alert()` validations with inline error containers (`role="alert"`) and inline border styles significantly improves form accessibility and UX, especially when bound by strict "no custom CSS" constraints.
**Action:** Always prefer inline ARIA announcements (`aria-live`) and visual cues (via inline styles if CSS is restricted) over native browser dialogs to maintain flow.
