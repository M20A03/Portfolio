# WCAG 2.1 Level A/AA Checklist Audit

Last reviewed: 2026-03-09
Project: Portfolio-main
Scope: Public pages and major interactive components (`app/*`, `components/*`)

Status legend:
- Pass: implemented in code and verified by inspection
- Partial: partly implemented, needs additional work
- Manual Test: requires visual/assistive-technology/device validation
- Not Applicable: SC does not meaningfully apply to current content

## A-Level Success Criteria

### 1.1 Text Alternatives
- 1.1.1 Non-text Content: Pass
Evidence: `components/hero-section.tsx`, `components/projects-section.tsx`, and `components/certifications-section.tsx` now use `next/image` with contextual `alt` text and explicit fallback content.

### 1.2 Time-based Media
- 1.2.1 Audio-only and Video-only (Prerecorded): Not Applicable
- 1.2.2 Captions (Prerecorded): Not Applicable
- 1.2.3 Audio Description or Media Alternative (Prerecorded): Not Applicable
No prerecorded media players were found.

### 1.3 Adaptable
- 1.3.1 Info and Relationships: Pass
Evidence: headings, labels, and landmarks are present across sections, and timeline milestones are now exposed as semantic list items with `<ol>`/`<li>` and `<article>` in `components/journey-section.tsx`.
- 1.3.2 Meaningful Sequence: Pass
Evidence: DOM order matches visual reading order across main pages.
- 1.3.3 Sensory Characteristics: Pass
No critical instructions rely only on shape/position.

### 1.4 Distinguishable
- 1.4.1 Use of Color: Partial
Color is not the only cue in most places, but active nav and badges rely strongly on color emphasis. Add non-color indicators where possible.
- 1.4.2 Audio Control: Not Applicable
No autoplay audio found.

### 2.1 Keyboard Accessible
- 2.1.1 Keyboard: Partial
Evidence: primary controls are keyboard reachable. Floating assistant and nav are operable. Needs end-to-end keyboard traversal test and focus order validation.
- 2.1.2 No Keyboard Trap: Pass
No trap behavior detected in current interactions.
- 2.1.4 Character Key Shortcuts: Not Applicable
No single-character keyboard shortcuts found.

### 2.2 Enough Time
- 2.2.1 Timing Adjustable: Not Applicable
No session timeout/time limits found.
- 2.2.2 Pause, Stop, Hide: Partial
Animated effects are present; reduced motion support was added in `app/globals.css`, but some decorative motion still needs manual confirmation.

### 2.3 Seizures and Physical Reactions
- 2.3.1 Three Flashes or Below Threshold: Manual Test
No obvious flashing hazards found, but needs visual confirmation.

### 2.4 Navigable
- 2.4.1 Bypass Blocks: Pass
Evidence: skip link added in `app/layout.tsx`; targets set in `app/page.tsx`, `app/resume/page.tsx`, `app/not-found.tsx`, `app/loading.tsx`.
- 2.4.2 Page Titled: Pass
Evidence: metadata title set in `app/layout.tsx`.
- 2.4.3 Focus Order: Manual Test
Code appears logical; requires keyboard run-through.
- 2.4.4 Link Purpose (In Context): Partial
Most links are clear; some repeated social links may benefit from more explicit context (for screen reader verbosity).

### 2.5 Input Modalities
- 2.5.1 Pointer Gestures: Pass
No complex multi-point/path gestures required.
- 2.5.2 Pointer Cancellation: Pass
No down-event-only activation patterns found.
- 2.5.3 Label in Name: Pass
Button and input visible labels align with accessible names in reviewed forms.
- 2.5.4 Motion Actuation: Not Applicable
No device-motion controls found.

### 3.1 Readable
- 3.1.1 Language of Page: Pass
Evidence: `lang="en"` in `app/layout.tsx`.
- 3.1.2 Language of Parts: Not Applicable
No mixed-language passages requiring `lang` overrides detected.

### 3.2 Predictable
- 3.2.1 On Focus: Pass
No unexpected context changes on focus detected.
- 3.2.2 On Input: Pass
Form fields do not auto-submit or unexpectedly navigate.

### 3.3 Input Assistance
- 3.3.1 Error Identification: Pass
Evidence: `components/contact-section.tsx` now applies field-level errors, `aria-invalid`, and `aria-describedby` associations for invalid controls.
- 3.3.2 Labels or Instructions: Pass
Evidence: form fields have explicit labels and required indicators.

### 4.1 Compatible
- 4.1.1 Parsing: Pass
No obvious invalid nesting in updated key areas; anchor/button nesting fixed.
- 4.1.2 Name, Role, Value: Partial
Evidence: improved ARIA in `components/navbar.tsx` and `components/ai-assistant.tsx`.
Still requires assistive tech checks for all custom interaction patterns.

## AA-Level Success Criteria

### 1.2 Time-based Media
- 1.2.4 Captions (Live): Not Applicable
- 1.2.5 Audio Description (Prerecorded): Not Applicable

### 1.3 Adaptable
- 1.3.4 Orientation: Manual Test
Likely responsive, but needs portrait/landscape test.
- 1.3.5 Identify Input Purpose: Pass
Evidence: applicable personal-information fields (`name`, `email`) in `components/contact-section.tsx` include autocomplete purpose tokens.

### 1.4 Distinguishable
- 1.4.3 Contrast (Minimum): Manual Test
Palette appears designed for contrast but requires measured verification.
- 1.4.4 Resize text: Manual Test
Needs browser zoom test at 200%.
- 1.4.5 Images of Text: Pass
No critical text rendered as images.
- 1.4.10 Reflow: Manual Test
Needs 320px CSS pixel test without two-dimensional scrolling for main content.
- 1.4.11 Non-text Contrast: Manual Test
Focus states and component boundaries need contrast verification.
- 1.4.12 Text Spacing: Manual Test
Needs style override test.
- 1.4.13 Content on Hover or Focus: Partial
Hover effects exist; check dismissibility/persistence for hover-triggered UI where applicable.

### 2.4 Navigable
- 2.4.5 Multiple Ways: Partial
Single-page anchor nav exists, but no dedicated site map/search path.
- 2.4.6 Headings and Labels: Pass
Section headings and form labels are clear.
- 2.4.7 Focus Visible: Pass
Evidence: explicit global `:focus-visible` styles for links, buttons, and form controls were added in `app/globals.css`.

### 3.1 Readable
- 3.1.2 Language of Parts: Not Applicable

### 3.2 Predictable
- 3.2.3 Consistent Navigation: Pass
Primary navigation is consistent.
- 3.2.4 Consistent Identification: Pass
Common controls use consistent labels/icons.

### 3.3 Input Assistance
- 3.3.3 Error Suggestion: Pass
Evidence: field-level messages in `components/contact-section.tsx` provide concrete corrective suggestions (name length, email format, minimum message length).
- 3.3.4 Error Prevention (Legal, Financial, Data): Not Applicable
No legal/financial irreversible submission flow detected.

### 4.1 Compatible
- 4.1.3 Status Messages: Pass
Evidence: `components/contact-section.tsx` uses `role="status"` for success and `role="alert"` for errors with associated status messaging.

## High-Priority Next Fixes

1. Run contrast checks for both light and dark themes using measured tooling.
2. Execute and maintain the manual accessibility QA plan in `docs/ACCESSIBILITY_TEST_PLAN.md` on every major UI release.

## Suggested Manual Test Matrix

1. Keyboard-only: `Tab`, `Shift+Tab`, `Enter`, `Space`, `Esc` through navbar, assistant, forms, and resume page.
2. Screen reader smoke tests: NVDA + Firefox and VoiceOver + Safari (or Narrator + Edge on Windows).
3. Zoom and reflow: 200% zoom and 320px viewport checks.
4. Reduced motion: verify animations are sufficiently suppressed under OS reduced-motion setting.
5. Color contrast: verify text/icon/focus contrasts against WCAG thresholds.

## Source References

- WCAG 2.1 Recommendation: https://www.w3.org/TR/WCAG21/
- Understanding WCAG 2.1: https://www.w3.org/WAI/WCAG21/Understanding/
- WAI-ARIA APG: https://www.w3.org/WAI/ARIA/apg/
- WebAIM Keyboard Accessibility: https://webaim.org/techniques/keyboard/
- MDN Accessibility Docs: https://developer.mozilla.org/docs/Web/Accessibility
- IBM Equal Access Toolkit: https://www.ibm.com/able/
