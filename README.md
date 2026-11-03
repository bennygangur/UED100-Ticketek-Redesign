# UED100 Assessment 2 — Ticketek UI Redesign

A responsive, interactive **student concept prototype** based on the accompanying Figma mockups. This is a simulated interface only, not an operational Ticketek website. There are no payments, live tickets, reservations, balloting or real verification services.

## Run locally in Visual Studio Code

1. Unzip the assessment folder and open it in **Visual Studio Code**.
2. Open `index.html` in a browser, or use the VS Code Live Server extension and select **Open with Live Server**.
3. The site works offline with its bundled CSS, JavaScript and SVG illustrations. There are no third party libraries to install.
4. Start at the homepage and follow the AFL Grand Final booking journey.

## Implementation and technical rationale

- `index.html`: semantic HTML sections for the homepage, event details, tickets, reserved seating, summary, confirmation, ballot information, verification, and contact form.
- `styles.css`: CSS variables based on the Figma palette, CSS Grid and Flexbox layout, responsive breakpoints, keyboard focus styles and reduced motion handling.
- `script.js`: hash navigation with browser back support, search/filtering, working mobile menu, selected seating category and quantity carried into the summary, and demonstration form validation.
- `assets/`: **original, self-contained SVG illustrations serving as temporary stand-ins** for the photographic assets used in Figma. The exact Figma photograph exports were not accessible in this build environment. Replace these files with your own permitted event photographs before submission if visual fidelity to Figma is required, updating the `<img src>` paths in `index.html` as needed. **Do not pass off the SVGs as the photographs from the Figma design.**
- `TESTING_CHECKLIST.md`: manual usability and technical test cases. Complete these honestly on your own machine; do not mark untested browsers as passed.

## Intended user journeys

### Event booking

Homepage → AFL Grand Final → Find Tickets → Reserved Seating → Category 1–7 → Booking Summary with correct category and quantity → Confirm Selection (demo).

### Verification

Homepage → Verify A Ticket → enter *example* event and reference (optionally select a file) → Run Demo Check → explanation that no real ticket was authenticated.

### Other interactions

Search featured events, filter Sports/Concerts, responsive navigation, ballot and queue guidance, contact enquiry form validation.

## Accessibility and security notes

- Labelled inputs, semantic headings, meaningful links and buttons, keyboard focus ring and image alternative text.
- JavaScript uses `textContent` rather than injecting form values into HTML.
- Forms use browser validation; selected files are checked for extension/type and size but **not read or uploaded**. No user data is stored.
- Colour contrast and responsive layout should be tested in multiple browsers and screen sizes.

## GitHub publication (required by assessment brief)

1. Create a new GitHub repository (for example `ued100-ticketek-redesign`).
2. In VS Code Terminal, run `git init`, `git add .`, `git commit -m "Build responsive Ticketek redesign prototype"`.
3. Add and test improvements in separate commits where possible, with meaningful messages (e.g. `Improve mobile navigation and form feedback`).
4. Follow GitHub's instructions to add the remote and push the current branch.
5. Paste the real repository URL into the Word report and your final assessment submission.

## Submission package

- ZIP: `UED100_Gangur_B_Assessment_2.zip` containing this folder and assets.
- Word report: `UED100_Gangur_B_Assessment_2.docx` (separate attachment).
- AI acknowledgement: use the required Torrens template; see `AI_ACKNOWLEDGEMENT_DRAFT.txt` for a factual draft to adapt.
- Figma design URL: https://www.figma.com/design/go5nzI5KxaRqm29dR52hwK/UED100-Assessment-2---Ticketek-Redesign
- GitHub repository URL: **TO BE ADDED BY STUDENT**.

## Scope and data disclaimers

The AFL Grand Final event information and seating categories are illustrative. Do not assume ticket availability or current dates; verify with official sources if used outside this student assignment. Ticket checks and contact forms are non-operational demonstrations and do not contact official services.
