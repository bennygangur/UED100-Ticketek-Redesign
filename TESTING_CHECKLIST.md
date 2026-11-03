# Usability and Technical Test Checklist

Tick only after **you have performed** the test. The tests below are proposed test cases, not claimed completed.

## Booking path

- [ ] Homepage loads with three event cards and a working search field.
- [ ] Selecting AFL Grand Final opens the correct event details page.
- [ ] Find Tickets opens ticket types and shows General Admission as disabled in the demo.
- [ ] Select Seats displays all seven categories and illustrative stadium overview.
- [ ] Selecting Category 2 shows **Category 2: Level 1 Wing** in the booking summary.
- [ ] Changing quantity to 3 updates the order review to 3 tickets.
- [ ] Back to Seating returns to the category selection screen.
- [ ] Confirm Selection opens the demo confirmation with the correct category and quantity.

## Verification and customer support

- [ ] Verify a Ticket opens from the homepage.
- [ ] Empty event or ticket reference prevents submission.
- [ ] A reference shorter than four characters fails browser form validation.
- [ ] Selecting an unsupported or large file displays an error (no upload occurs).
- [ ] Valid example inputs open the demo result that explicitly disclaims real verification.
- [ ] Check Another Ticket returns to the verification form.
- [ ] Contact form validates an email and message, then states nothing was sent.

## Accessibility and mobile

- [ ] At 375 px mobile width, no text or cards overflow horizontally.
- [ ] At tablet and desktop widths, cards and panels maintain readable spacing.
- [ ] Mobile menu opens and closes with an updated aria-expanded state.
- [ ] Keyboard Tab reaches navigation, cards, ticket categories and form fields.
- [ ] Visible focus indicator is clear on keyboard navigation.
- [ ] Screen reader labels for ticket form fields and alt text are meaningful.
- [ ] Windows Chrome and Edge: run booking journey and report any issues.
- [ ] Additional browsers (Firefox or Safari if available): run and record results; do not claim untested.

## Test evidence to record

| Date | Device / browser | Test | Expected | Actual outcome | Fix made |
|---|---|---|---|---|---|
| YYYY-MM-DD | e.g. Windows 11, Chrome | Category 2 → Summary | Category 2 Level 1 Wing | PENDING | — |

Screenshots and notes can be added to the submission folder if helpful.
