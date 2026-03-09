# Accessibility Test Plan (WCAG 2.1 A/AA)

Last updated: 2026-03-09
Project: Portfolio-main

This plan is designed for repeatable manual QA after UI changes.

## Test Scope

- Home page: `/`
- Resume page: `/resume`
- Not found page: unknown route (for example `/does-not-exist`)
- Core components: navbar, hero CTAs, projects cards, certifications cards, AI assistant, contact form

## 1. Keyboard-Only Test (A: 2.1.1, 2.4.3, 2.4.7)

1. Load `/` and press `Tab` once.
2. Confirm skip link is visible and pressing `Enter` moves focus to `#main-content`.
3. Continue tabbing through navbar links, social links, CTA buttons, project links, and form controls.
4. Confirm all interactive controls are reachable and show visible focus indicators.
5. Use `Shift+Tab` to reverse focus order and verify it remains logical.
6. Open AI assistant with keyboard and verify controls inside are operable.
7. Close AI assistant and verify focus is not trapped.

Expected result:
- No keyboard traps.
- No missing focus state.
- Focus order follows visual and reading order.

## 2. Screen Reader Smoke Test (A: 1.3.1, 4.1.2, 4.1.3)

Preferred combinations:
- Windows: NVDA + Firefox
- Windows backup: Narrator + Edge

Checklist:
1. Navigate by landmarks and headings.
2. Confirm sections are announced with meaningful heading text.
3. Open AI assistant and verify dialog name is announced.
4. Trigger contact form errors (blank submit) and verify field error messages are announced.
5. Submit valid form data and verify success status is announced.

Expected result:
- Proper role/name/value announcements.
- Status and error messages announced without moving focus unexpectedly.

## 3. Reflow and Zoom (AA: 1.4.4, 1.4.10)

1. Set browser zoom to 200%.
2. Test home and resume pages at 1280px width and 320px width.
3. Verify content reflows without horizontal scrolling for primary reading content.
4. Confirm controls remain operable and labels readable.

Expected result:
- No clipped text or hidden controls.
- No two-dimensional scrolling for normal page reading.

## 4. Reduced Motion (A: 2.2.2 usability support)

1. Enable OS setting: "Reduce motion".
2. Reload site.
3. Verify smooth scrolling and animations are minimized.
4. Confirm functionality is unchanged.

Expected result:
- Motion-heavy effects are reduced.
- No essential information is conveyed only by animation.

## 5. Contrast Checks (AA: 1.4.3, 1.4.11)

Test both light and dark themes:
1. Validate body text, headings, links, muted text, icons, and focus outlines.
2. Validate form error text/background combinations.
3. Validate button and link states (default, hover, focus, disabled).

Tools:
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Browser DevTools color picker contrast info.

Thresholds:
- Normal text: at least 4.5:1
- Large text (18pt regular or 14pt bold): at least 3:1
- UI components and focus indicators: at least 3:1 against adjacent colors

## 6. Form Validation Test (A/AA: 3.3.1, 3.3.2, 3.3.3)

1. Submit contact form with all fields empty.
2. Submit with invalid email format.
3. Submit with very short message.
4. Verify each invalid field has associated guidance text.
5. Correct fields and submit.

Expected result:
- Errors clearly identified.
- Suggestions explain how to fix input.
- Success confirmation is announced.

## Exit Criteria

- No critical keyboard or screen reader blockers.
- All tested text and non-text contrast checks pass.
- Form validation, error identification, and status announcements work as expected.

## References

- WCAG 2.1 Recommendation: https://www.w3.org/TR/WCAG21/
- Understanding WCAG 2.1: https://www.w3.org/WAI/WCAG21/Understanding/
- WAI-ARIA APG: https://www.w3.org/WAI/ARIA/apg/
- WebAIM Keyboard Accessibility: https://webaim.org/techniques/keyboard/
- MDN Accessibility: https://developer.mozilla.org/docs/Web/Accessibility
- IBM Equal Access: https://www.ibm.com/able/
