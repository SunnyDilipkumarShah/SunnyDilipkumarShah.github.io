# Sunny Shah — Portfolio

A modern, recruiter-friendly portfolio for Security Engineer & Detection Specialist roles (New Grad 2026). Built with HTML, CSS, and minimal JavaScript—no frameworks.

---

## 1. Quick summary

**What’s included**
- **New design** — Dark, tech-professional look with clear hierarchy, spacing, and readable typography (DM Sans + JetBrains Mono).
- **Content** — Hero (name, headline, value statement, CTAs), About, Experience (3 Meta roles with PAR bullets), Featured Projects (4 cards with tags and links), Skills (grouped), Contact (email, LinkedIn, GitHub, Blog), Footer.
- **UX** — Sticky nav, smooth scrolling, mobile menu, subtle hero animations (respects `prefers-reduced-motion`).
- **Accessibility** — Semantic HTML, skip link, focus styles, ARIA where needed, sufficient contrast.
- **Performance** — No heavy frameworks; optional Google Fonts; minimal JS.

**Why it works for recruiters**
- Clear target roles and timeline (New Grad Summer 2026).
- Outcome-focused copy and PAR-style bullets with metrics.
- One-click CTAs: LinkedIn, GitHub, Email (resume link ready when you add a PDF).

---

## 2. Step-by-step build plan (beginner-friendly)

1. **Get the files** — You have `index.html`, `styles.css`, `script.js` in the project folder.
2. **Preview locally** — Open `index.html` in a browser, or run a simple server (e.g. `npx serve .` in the project folder).
3. **Customize** — Edit text/links in `index.html`; colors/theme in `styles.css` (see [CUSTOMIZATION.md](CUSTOMIZATION.md)).
4. **Add resume** — Drop `resume.pdf` in the folder and uncomment the “Download Resume” button in the hero (see CUSTOMIZATION.md).
5. **Deploy** — Use GitHub Pages (recommended) or Netlify; connect your Namecheap domain (see [DEPLOYMENT.md](DEPLOYMENT.md)).
6. **Check** — Run through the “Ready to apply” checklist below.

---

## 3. File tree

```
Portfolio/
├── index.html      # All page content and structure
├── styles.css      # Design system, layout, responsive styles
├── script.js       # Nav toggle, sticky header, smooth scroll
├── README.md       # This file
├── CUSTOMIZATION.md # How to edit text, projects, colors
├── DEPLOYMENT.md   # GitHub Pages & Netlify + Namecheap DNS
└── assets/         # Optional: resume.pdf, images
```

---

## 4. Code

- **index.html** — Full single-page structure (hero, about, experience, projects, skills, contact, footer).
- **styles.css** — Full styles (variables, reset, nav, hero, sections, cards, responsive, reduced-motion).
- **script.js** — Nav toggle, sticky header, smooth scroll for in-page links.

All three files are in the repo; open them in your editor to view or edit.

---

## 5. Customization

See **[CUSTOMIZATION.md](CUSTOMIZATION.md)** for:
- Where to edit name, headline, about, experience, projects, skills, contact.
- How to add a new project card.
- How to change colors (CSS variables in `styles.css`).
- Adding a resume download and optional contact form.

---

## 6. Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for:
- **Option 1 (recommended):** GitHub Pages + Namecheap (steps + DNS A/CNAME records, HTTPS).
- **Option 2:** Netlify + Namecheap (steps + DNS, HTTPS).
- Common mistakes and a short troubleshooting checklist.

---

## 7. Final checklist (“ready to apply”)

- [ ] **Content** — Name, title, dates, and links are correct; no placeholder `#` left on important links (replace or remove Demo links if no demo).
- [ ] **Resume** — If you use the button, `resume.pdf` is in the folder and the link is uncommented in `index.html`.
- [ ] **Mobile** — Test on a real device or DevTools responsive mode; nav menu opens/closes; buttons and links are tappable.
- [ ] **Links** — Every external link (GitHub, LinkedIn, Medium, project repos) opens correctly and uses `target="_blank"` and `rel="noopener noreferrer"` where appropriate.
- [ ] **Lighthouse** — Run in Chrome DevTools (Performance, Accessibility, Best Practices). Aim for 90+ on Accessibility; fix any critical issues.
- [ ] **HTTPS** — After connecting your domain, ensure the site loads over HTTPS and “Enforce HTTPS” (GitHub) or “Force HTTPS” (Netlify) is on.
- [ ] **Spell-check** — Quick pass on job titles, project names, and bullet points.

Once these are done, the site is ready to share with recruiters and in applications.
