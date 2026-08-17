# QuantRu — Shihao Ru

Personal and research website for Shihao Ru, served by GitHub Pages at
[quantru.org](https://quantru.org) (custom domain via `CNAME`).

The site is deliberately build-free: plain HTML, CSS and JavaScript, pushed
straight to the `main` branch and served as static files.

## Structure

- `index.html` — homepage (hero, research, latest papers, projects, contact)
- `publications.html` — full publication list, grouped by research area
- `styles.css` — all styling, including the dark theme variables
- `script.js` — theme toggle, scrollspy, reveal animations
- `favicon.svg` — bra-ket logo favicon
- `assets/figs/` — figures used on the publications page
- `Resume_Shihao.pdf` — CV

## Editing content

- Homepage sections live in `index.html`; each section is a `terminal-section`.
- Publications live in `publications.html`, grouped into five categories
  (sensing, matter, photonics, SPDC, metrology). Each category heading has an
  anchor (`#pub-sensing`, …) used by the sidebar and table of contents.
- Paper figures are stored in `assets/figs/` and referenced from
  `publications.html`.
- Fonts load from Google Fonts (Lora, Nunito, Roboto Mono, Pixelify Sans);
  color tokens are CSS variables at the top of `styles.css`
  (`:root` and `html[data-theme="dark"]`).

## Deploy

Push to `main` — GitHub Pages publishes automatically. After changing
`styles.css` or `script.js`, bump the `?v=` query string in both HTML files so
visitors don't keep a stale cached copy.

## Notes

- Dark mode is toggled from the header and remembered in `localStorage`.
- Email addresses are assembled at click time to reduce spam harvesting.
