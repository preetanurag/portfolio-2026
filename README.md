# Preet Anurag Portfolio 2026

A standalone static personal portfolio site. The legacy `Portfolio-blog` project is intentionally untouched.

## Preview Locally

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`.

## Deploy Options

### GitHub Pages

1. Create a new GitHub repository, for example `portfolio-2026`.
2. Push this folder to that repository.
3. In GitHub, open `Settings > Pages`.
4. Set source to `Deploy from a branch`.
5. Select `main` and `/root`.
6. Save. Your site will be available at `https://preetanurag.github.io/portfolio-2026/` if the repo is named `portfolio-2026`.

### Netlify

1. Go to Netlify.
2. Drag this entire folder into the deploy area.
3. No build command is needed.
4. Publish directory is the project root.

### Vercel

1. Import the GitHub repository into Vercel.
2. Framework preset: `Other`.
3. Build command: none.
4. Output directory: leave blank or use project root.

## Files

- `index.html`: page content
- `styles.css`: visual design
- `script.js`: mobile nav and small interactions
- `assets/Preet_Anurag_Resume.pdf`: resume PDF
