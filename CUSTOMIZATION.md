# Portfolio Customization Guide

Quick reference for editing content, adding projects, and changing the look.

---

## Editing text and links

### Name, headline, value statement
- **File:** `index.html`
- **Location:** Inside the `<section class="hero">` block.
- Edit:
  - `.hero-label` — small label above name (e.g. “Security Engineer & Detection Specialist”).
  - `#hero-heading` — your name.
  - `.hero-headline` — one-sentence value prop.
  - `.hero-value` — key metric or outcome (e.g. “Reduced false positives by 60%…”).
  - `.hero-meta` — education and current role.
  - `.hero-target` — target roles and timeline.

### About section
- **File:** `index.html`
- **Location:** `<section id="about">` → `.about-lead` and `.about-list` (bullets).

### Experience
- **File:** `index.html`
- **Location:** `<section id="experience">` → each `.exp-card`.
- For each role:
  - `.exp-header h3` — job title and company.
  - `.exp-date` — date range.
  - `.exp-role` — team/subtitle (optional).
  - `.exp-list` — PAR-style bullets.

### Projects
- **File:** `index.html`
- **Location:** `<section id="projects">` → `.projects-grid` → each `.project-card`.
- Per project:
  - `.project-tags` — tags (e.g. Python, AWS).
  - `h3` — project title.
  - `.project-desc` — short description.
  - `.project-impact` — bullet list.
  - `.project-links` — GitHub, Demo, Write-up links. Replace `#` with real URLs or remove; keep `[ADD PROJECT LINK]` only as a reminder.

### Skills
- **File:** `index.html`
- **Location:** `<section id="skills">` → `.skills-grid` → each `.skill-card`.
- Edit the two cards (e.g. “Security” and “Tools & Tech”) and their `<ul>` lists.

### Contact
- **File:** `index.html`
- **Location:** `<section id="contact">` → `.contact-lead` and `.contact-links`.
- Update email, LinkedIn, GitHub, Blog URLs in the `href` attributes.

### Footer
- **File:** `index.html`
- **Location:** `<footer class="site-footer">` — copyright and tagline.

---

## Adding a new project

1. In `index.html`, find `.projects-grid` and duplicate one full `<article class="project-card card">...</article>`.
2. Change:
   - `.project-tags` — `<span class="project-tag">Tag1</span>` etc.
   - `h3` — project name.
   - `.project-desc` — one short paragraph.
   - `.project-impact` — `<li>` bullets.
   - `.project-links` — replace `#` with real URLs (GitHub, demo, write-up).

---

## Changing colors and theme

- **File:** `styles.css`
- **Location:** `:root` at the top.

| Variable | Purpose |
|----------|--------|
| `--bg-primary` | Page background |
| `--bg-secondary` | Section / footer background |
| `--bg-card` | Card background |
| `--border` | Borders |
| `--text-primary` | Main text |
| `--text-secondary` | Muted text |
| `--accent` | Links, buttons, highlights |
| `--accent-hover` | Hover state for accent |

Example: switch to a blue accent and keep the dark theme:
```css
--accent: #4f7cff;
--accent-hover: #6b91ff;
```
Change to a green accent:
```css
--accent: #22c55e;
--accent-hover: #4ade80;
```

---

## Adding a resume download

1. Place your PDF in the project folder (e.g. `resume.pdf`).
2. In `index.html`, in the hero `.hero-cta` section, uncomment or add:
   ```html
   <a href="resume.pdf" class="btn btn-secondary" download>Download Resume</a>
   ```
3. If you deploy with GitHub Pages or Netlify, ensure `resume.pdf` is in the same folder as `index.html` (or use a path like `assets/resume.pdf` and set `href="assets/resume.pdf"`).

---

## Optional contact form

The site currently uses **Email** and **LinkedIn** only (no form). A contact form needs a backend or third-party service:

- **Formspree** or **Netlify Forms**: add an HTML form and point the `action` to Formspree’s URL or use Netlify’s form handler so submissions don’t require your own server.
- **File:** `index.html` — add a `<form>` in the contact section and style it in `styles.css` if desired.

---

## File structure (what to edit)

| File | Use |
|------|-----|
| `index.html` | All content: hero, about, experience, projects, skills, contact, footer |
| `styles.css` | Colors (`:root`), spacing, typography, layout |
| `script.js` | Only if you change nav IDs or add new behavior |

Keep `index.html`, `styles.css`, and `script.js` in the same folder (or preserve relative paths) so links and assets work after deployment.
