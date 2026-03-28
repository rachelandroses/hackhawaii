# HackHawaii Website

Static website for HackHawaii — a 501(c)(3) nonprofit dedicated to safe AI and technology education for the people of Hawaiʻi.

## Project Structure

```
hackhawaii/
├── index.html        ← Main page
├── css/
│   └── style.css     ← All styles
├── js/
│   └── main.js       ← Mobile nav, form handling, scroll effects
├── assets/           ← Add images/logo here
├── vercel.json       ← Vercel configuration
└── README.md
```

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm i -g vercel
cd hackhawaii
vercel
```
Follow the prompts. Your site will be live in under a minute.

### Option 2 — Vercel Dashboard (no CLI)
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New → Project**
3. Drag and drop this entire `hackhawaii` folder, or connect a GitHub repo
4. Click **Deploy** — no build settings needed (pure static site)

### Option 3 — GitHub + Vercel (recommended for ongoing updates)
1. Push this folder to a GitHub repository
2. In Vercel, click **Add New → Project** and import from GitHub
3. Vercel auto-deploys on every `git push`

## Customizing

### Update contact email
Search for `hello@hackhawaii.org` in `index.html` and replace with your real email.

### Add a logo
Place your logo image in `assets/` and update the `.nav-logo` element in `index.html`:
```html
<a href="#" class="nav-logo">
  <img src="assets/logo.png" alt="HackHawaii" height="36">
</a>
```

### Connect forms to a real backend
The forms currently show a toast notification on submit. To receive real submissions, replace the form submit handlers in `js/main.js` with a fetch call to:
- [Formspree](https://formspree.io) (free tier available)
- [Netlify Forms](https://docs.netlify.com/forms/setup/)
- Your own API endpoint

Example with Formspree:
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: new FormData(eventForm),
  headers: { 'Accept': 'application/json' }
});
```

### Add a favicon
Place a `favicon.ico` or `favicon.png` in the root folder and add to `<head>` in `index.html`:
```html
<link rel="icon" href="favicon.ico">
```

## Colors
| Variable | Value | Use |
|---|---|---|
| `--beige` | `#F5F0E8` | Page background |
| `--green-deep` | `#3F6B2C` | Primary CTAs, headers |
| `--green-mid` | `#7FB069` | Accents, tags |
| `--green-light` | `#C8DDB5` | Badges, highlights |
| `--white` | `#FDFCF8` | Card backgrounds |
