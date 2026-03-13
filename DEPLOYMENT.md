# Portfolio Deployment Guide

Two options for hosting your portfolio and connecting your Namecheap domain. **Option 1 (GitHub Pages) is recommended** for simplicity and free HTTPS.

---

## Option 1: GitHub Pages + Namecheap (Recommended)

### Why GitHub Pages
- Free static hosting
- Automatic HTTPS with custom domain
- Easy updates: push to repo → site updates
- No build step needed for plain HTML/CSS/JS

### Step-by-step

#### 1. Create a GitHub repository
1. Go to [github.com/new](https://github.com/new).
2. Repository name: `portfolio` or `username.github.io` (if you want `https://username.github.io` as the default URL).
3. Public, no need to add README if you’re uploading existing files.
4. Create repository.

#### 2. Upload your site
- **Option A:** Drag and drop the folder containing `index.html`, `styles.css`, `script.js` into the repo (upload files).
- **Option B:** Use Git:
  ```bash
  cd f:\Projects\Portfolio
  git init
  git add index.html styles.css script.js
  git commit -m "Initial portfolio"
  git branch -M main
  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
  git push -u origin main
  ```

#### 3. Enable GitHub Pages
1. Repo → **Settings** → **Pages** (left sidebar).
2. Under **Source**: choose **Deploy from a branch**.
3. **Branch**: `main` (or `master`), folder **/ (root)**.
4. Save. In 1–2 minutes the site will be at `https://YOUR_USERNAME.github.io/YOUR_REPO/` (or `https://YOUR_USERNAME.github.io/` if repo name is `username.github.io`).

#### 4. Connect Namecheap domain – DNS in Namecheap
1. In Namecheap: **Domain List** → your domain → **Manage** → **Advanced DNS**.
2. Add or edit records as below. Replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repo name.

| Type | Host | Value | TTL |
|------|------|--------|-----|
| **A** | `@` | `185.199.108.153` | Automatic |
| **A** | `@` | `185.199.109.153` | Automatic |
| **A** | `@` | `185.199.110.153` | Automatic |
| **A** | `@` | `185.199.111.153` | Automatic |
| **CNAME** | `www` | `YOUR_USERNAME.github.io` | Automatic |

- Remove any conflicting A or CNAME records for `@` or `www` that point elsewhere.
- Leave **URL Redirect** (www → non-www or vice versa) as you prefer; optional.

#### 5. Set custom domain in GitHub
1. Repo → **Settings** → **Pages**.
2. Under **Custom domain**, enter your domain (e.g. `yourdomain.com` or `www.yourdomain.com`).
3. Save. GitHub will show a “DNS check” and later “Certificate provisioned” when HTTPS is ready (can take up to 24 hours, often minutes).

#### 6. Enforce HTTPS
- In **Pages** settings, ensure **Enforce HTTPS** is checked (after the certificate is provisioned).

---

## Option 2: Netlify + Namecheap

### Why Netlify
- Free tier, drag-and-drop or Git deploy
- Automatic HTTPS
- Optional form handling, redirects, headers

### Step-by-step

#### 1. Deploy to Netlify
1. Go to [app.netlify.com](https://app.netlify.com) and sign up/login.
2. **Add new site** → **Deploy manually** (drag and drop).
3. Drag the folder that contains `index.html`, `styles.css`, `script.js` into the drop zone.
4. Netlify assigns a URL like `random-name-123.netlify.app`.

#### 2. Connect Namecheap domain – DNS in Namecheap
1. In Netlify: **Site settings** → **Domain management** → **Add custom domain** → enter your domain (e.g. `sunny shah.com`).
2. Netlify will show the required DNS target (e.g. `random-name-123.netlify.app` or an A record target).
3. In Namecheap: **Domain List** → **Manage** → **Advanced DNS**.
4. Add:

| Type | Host | Value | TTL |
|------|------|--------|-----|
| **CNAME** | `www` | `random-name-123.netlify.app` (your Netlify subdomain) | Automatic |

For **root domain** (e.g. `yourdomain.com`):
- Netlify may show an A record (e.g. `75.2.60.5`) or recommend their DNS. Either:
  - Add the A record Netlify gives you for `@`, or
  - Use Netlify DNS: in Netlify **Domain management** → **Use Netlify DNS** and follow the steps (change nameservers at Namecheap to Netlify’s).

#### 5. HTTPS on Netlify
- Netlify provisions a free SSL certificate automatically once the domain is verified. Enable **Force HTTPS** in **Site settings** → **HTTPS**.

---

## Common mistakes & troubleshooting

| Issue | What to do |
|-------|------------|
| **Site not loading on custom domain** | Wait 5–60 minutes for DNS. Use [dnschecker.org](https://dnschecker.org) to confirm A/CNAME records. |
| **GitHub: “DNS check failed”** | Ensure exactly 4 A records for `@` and CNAME `www` → `username.github.io`. No CNAME on `@`. |
| **Mixed content / not secure** | Use `https://` in all links; ensure **Enforce HTTPS** (GitHub) or **Force HTTPS** (Netlify) is on. |
| **www works but root doesn’t (or vice versa)** | **GitHub:** set **Custom domain** to the one you want (e.g. `yourdomain.com`). Add both A (root) and CNAME (www) as above. **Netlify:** add both root and www in Domain management. |
| **Old version still showing** | Hard refresh (Ctrl+F5). GitHub: wait a couple of minutes after push. Netlify: trigger a new deploy or clear cache. |

---

## Quick checklist (both options)

- [ ] Site works on the default URL (GitHub Pages or Netlify).
- [ ] A and CNAME records added in Namecheap (and nameservers updated if using Netlify DNS).
- [ ] Custom domain set in GitHub Pages or Netlify.
- [ ] HTTPS enforced; certificate shows as active.
- [ ] You tested `https://yourdomain.com` and `https://www.yourdomain.com` (if you use www).
