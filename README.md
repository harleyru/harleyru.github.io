# QuantRu — Shihao Ru

Personal and research website for Shihao Ru, served by GitHub Pages at
[quantru.org](https://quantru.org) (custom domain via `CNAME`).

The site is deliberately build-free: plain HTML, CSS and JavaScript, pushed
straight to the `main` branch and served as static files.

## Structure

- `index.html` — homepage (hero, research, latest papers, blog, projects, contact)
- `publications.html` — full publication list, grouped by research area
- `blog.html` — standalone blog index, with published notes listed newest first
- `blog/quantum-harbor.html` — English research note on verified autonomy in quantum engineering
- `blog/hbn-double-quantum.html` — English research note on DQ control and AC magnetometry in hBN, with references to earlier DQ, correlation-spectroscopy, and synchronized-readout work
- `styles.css` — all styling, including the dark theme variables
- `script.js` — theme toggle, scrollspy, reveal animations
- `favicon.svg` — bra-ket logo favicon
- `assets/figs/` — figures used in publications and blog posts
- `assets/portraits/shihao-ru.jpg` — supplied personal photo; its homepage crop is controlled by `.portrait-frame` in CSS
- `Resume_Shihao_2026-11-25.pdf` — current CV, linked from all published pages
- `Resume_Shihao_2026-11-24.pdf` — previous CV snapshot
- `Resume_Shihao.pdf` — compatibility copy for existing bookmarks

## Editing content

- Homepage sections live in `index.html`; each section is a `terminal-section`.
- Published blog posts are listed in `blog.html`. Keep the homepage's recent
  previews in sync when adding a post. Draft files are not listed or published.
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
`styles.css` or `script.js`, bump the `?v=` query string in all HTML files so
visitors don't keep a stale cached copy.

## Notes

- The November 2026 update lists 28 English-language works across six areas.
  The latest-paper order uses the first online publication or arXiv submission
  date: double-quantum control in hBN (10 November), Reimpell–Werner
  (30 September), interlayer excitons (24 September), and Quantum-Harbor
  (15 September). The double-quantum paper was published on 24 November as
  Physical Review Applied 26, 054072 (2026), DOI 10.1103/hmk5-d2dj.
  The Nano Letters issue date is 7 October.
- New publication figures are taken from the papers:
  - `hbn-double-quantum.png`: original Figure 1 from the
    [arXiv v1 source](https://arxiv.org/src/2611.13447v1), copied without changes.
  - `hbn-double-quantum-ac-correlation.png`: the external 20 MHz RF-field
    correlation measurement from the same source (`FigureS4.png`, placed as
    Figure 4 in the v1 manuscript), copied without changes for the DQ blog post.
  - `reimpell-werner.png`: [Figure 1](https://arxiv.org/html/2609.40203v1/fig1.png).
  - `quantum-harbor.png`: [Figure 1](https://arxiv.org/html/2609.17439v1/fig_intro.png).
  - `quantum-harbor-framework.png`: [Figure 2](https://arxiv.org/html/2609.17439v1/fig_framework.png), used in the blog post.
  - `interlayer-excitons.png`: the [ACS visual abstract](https://doi.org/10.1021/acs.nanolett.6c03241),
    rendered from its original SVG with no changes to the scientific content.

- Dark mode is toggled from the header and remembered in `localStorage`.
- Email addresses are assembled at click time to reduce spam harvesting.
