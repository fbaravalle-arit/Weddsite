# Tests

Placeholder. To add component tests:

```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom
```

Suggested first targets:

- `MobileDrawer` — opens/closes, traps focus, closes on Esc.
- `RsvpForm` — submits to endpoint when `NEXT_PUBLIC_RSVP_ENDPOINT` is set; shows local success otherwise.
- `CopyButton` — calls `navigator.clipboard.writeText` and flashes.
