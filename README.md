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
- Publications live in `publications.html`, grouped into six categories
  (sensing, matter, photonics, information, metrology, AI engineering). Each category heading has an
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

- The October 2026 update lists 27 English-language works across six areas.
  The latest-paper order uses the first online publication or arXiv submission
  date: Reimpell–Werner (30 September), interlayer excitons (24 September),
  Quantum-Harbor (15 September), and quantum cryptographic conferencing
  (9 September). The Nano Letters issue date is 7 October; the PRL issue date
  is 11 September.
- New publication figures are taken from the papers:
  - `reimpell-werner.png`: [Figure 1](https://arxiv.org/html/2609.40203v1/fig1.png).
  - `quantum-harbor.png`: [Figure 1](https://arxiv.org/html/2609.17439v1/fig_intro.png).
  - `interlayer-excitons.png`: the [ACS visual abstract](https://doi.org/10.1021/acs.nanolett.6c03241),
    rendered from its original SVG with no changes to the scientific content.

- Dark mode is toggled from the header and remembered in `localStorage`.
- Email addresses are assembled at click time to reduce spam harvesting.
