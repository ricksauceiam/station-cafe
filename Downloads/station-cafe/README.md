# The Station Café — MedStar Health Food Services

A single-page concept site for The Station Café, built for MedStar Health Food Services. Features three section tabs (Programming, Flexibility, Technology) with a full Così-inspired breakfast, lunch, and dinner menu under the Programming tab.

---

## Deploy to Vercel (3 ways)

### Option 1 — Vercel CLI (fastest)
```bash
# Install Vercel CLI if you haven't already
npm install -g vercel

# From inside this folder
cd station-cafe
vercel

# Follow the prompts — accept defaults.
# Your site will be live at a *.vercel.app URL within seconds.
```

### Option 2 — Drag & Drop (no account needed)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag the entire `station-cafe` folder onto the page
3. Click **Deploy** — done.

### Option 3 — GitHub + Vercel (best for ongoing edits)
1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Click **Import Git Repository** and select your repo
4. Click **Deploy** — Vercel auto-deploys on every push

---

## Project Structure
```
station-cafe/
├── index.html     ← entire site (self-contained, no build step needed)
├── vercel.json    ← Vercel routing config
└── README.md      ← this file
```

---

## Customisation Notes

| What to change | Where in index.html |
|---|---|
| Café name / branding | `.logo-main` in the `<nav>` and `<footer>` |
| Brand colours | `:root` CSS variables at the top of `<style>` |
| Menu items / prices | Inside `#breakfast`, `#lunch`, `#dinner` divs |
| Hours | `.hours-bar` sections |
| Stats / seat count | `.stats-row` sections |
| Hero headline | `.hero-h1` |
| Contact email | `<footer>` |

---

## Tech Stack
- Pure HTML + CSS + vanilla JS — zero dependencies, zero build step
- Google Fonts (Playfair Display + DM Sans) loaded via CDN
- Fully responsive (mobile, tablet, desktop)
- Vercel static hosting

---

*Built for MedStar Health Food Services · The Station Café concept*
