# Portfolio Upgrade Steps (Action Plan)

Use this checklist to complete the remaining upgrades.

## 1) Add contact form key (required)
1. Create or open `.env.local` in the project root.
2. Add this line:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_real_web3forms_key_here
```

3. Restart the dev server.

## 2) Replace placeholder testimonials
1. Open `components/proof-section.tsx`.
2. Update `testimonials` with real names/roles (or initials if private).
3. Keep each quote short (1-2 lines) and outcome-oriented.

## 3) Add social preview image
1. Create a 1200x630 image named `portfolio-og.png`.
2. Put it in `public/images/portfolio-og.png`.
3. Include your name + role + a clean visual from your best project.

## 4) Strengthen project outcomes
1. Open `components/projects-section.tsx`.
2. For each project `outcome`, add one measurable result if possible.
3. Example format: "Reduced load time by 32% on mobile".

## 5) Strengthen live demo support
1. Keep the live links above the code links on project cards.
2. Add 2-3 strong screenshots per project so the recruiter can scan quickly.
3. Make sure each live demo opens fast on mobile and laptop screens.
4. If a project has no live demo, add a short note explaining why.

## 6) Add real case-study pages (optional but high impact)
1. Create routes under `app/projects/[slug]/page.tsx`.
2. Include sections: Problem, Constraints, Approach, Tradeoffs, Outcome.
3. Link each project card to its case study.

## 7) Verify mobile and performance
1. Test on mobile widths (360px, 390px, 768px).
2. Run Lighthouse on home page and top project pages.
3. Target: Performance > 90, Accessibility > 95.

## 8) Keep portfolio fresh
1. Update `Now Building` items in `components/proof-section.tsx` monthly.
2. Add one new project or case-study update each month.
