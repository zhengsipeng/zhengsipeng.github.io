# Sipeng Zheng Homepage

Source code for <https://zhengsipeng.github.io/>, built with Jekyll and deployed by GitHub Pages on every push to `main`.

## Editing content

Almost everything lives in plain data files — no HTML required.

| What | Where |
| --- | --- |
| Name, role, links, emails, research interests | `_config.yml` → `author` |
| Biography (incl. role and one-line research statement) | `_includes/sections/intro.md` |
| Recruiting text | `_includes/sections/join.md` |
| News | `_data/news.yml` (newest first; `news_visible` in `_config.yml` sets how many show) |
| Publications | `_data/publications.yml` |
| Research cards (Being-H / M / VL) | `_data/research.yml` (references publication ids) |
| Honors | `_data/honors.yml` |
| Work, education, service | `_data/experience.yml` |
| Navigation | `_data/navigation.yml` |

### Adding a publication

Add an entry to `_data/publications.yml` in the right position (the list is grouped by `year`, order within a year is kept):

```yaml
- id: my-paper
  title: "My Paper: A Subtitle"
  url: https://arxiv.org/abs/xxxx.xxxxx
  venue: CVPR 2027
  year: 2027
  award: Oral            # optional
  award_rate: "3%"       # optional
  authors: Alice*, Sipeng Zheng*, Bob
  links:
    - { type: code, url: "https://github.com/..." }
    - { type: blog, url: "https://..." }
    - { type: model, url: "https://huggingface.co/...", soon: true }
  topics: [embodied]     # embodied | motion | mllm | video
  selected: true         # show in the default "Selected" view
  image: my-paper        # optional, see below
```

`Sipeng Zheng` is highlighted automatically. Link types: `paper`, `blog`, `code`, `model`, `page`.

### Figures

Paper figures live in `assets/images/papers/` as WebP in two widths: `<slug>-640.webp` and `<slug>-1280.webp`. Convert new figures before adding them, e.g. with `cwebp -q 82 -resize 1280 0 in.png -o slug-1280.webp`.

## Code structure

- `_layouts/default.html` — page shell
- `_includes/` — header, footer, head/SEO, icons (`icon.html`), and one file per section in `sections/`
- `_sass/` — styles split into tokens (colors, fonts, dark theme), base, layout, hero, components, research, publications, print
- `assets/js/site.js` — theme toggle, mobile menu, scroll-spy, publication filters
- `assets/fonts/` — self-hosted Inter, Source Serif 4, JetBrains Mono (OFL)

Light/dark themes follow the system setting and can be toggled from the header.

## Local preview

```bash
ruby -S bundle _2.2.19_ install   # once
bash run_server.sh                # http://127.0.0.1:4000 with LiveReload
```

Build only: `ruby -S bundle _2.2.19_ exec jekyll build`. Generated files go to `_site/` and are not committed.
