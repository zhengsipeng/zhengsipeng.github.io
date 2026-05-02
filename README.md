# Sipeng Zheng Homepage

Source code for <https://zhengsipeng.github.io/>.

## Structure

- `_pages/about.md`: home page entry.
- `_includes/sections/`: editable page sections.
- `_includes/`: shared HTML/Liquid components.
- `_layouts/`: page layouts.
- `_sass/` and `assets/css/main.scss`: site styles.
- `assets/images/`: profile photo, publication thumbnails, and favicons.
- `assets/js/main.min.js`: small site script for external links and smooth anchors.
- `files/`: downloadable files such as the CV.

Generated files live in `_site/` and should not be committed.

## Local Preview

Install dependencies once:

```bash
ruby -S bundle _2.2.19_ install
```

Start a local preview server:

```bash
bash run_server.sh
```

Then open:

```text
http://127.0.0.1:4000
```

The server runs with LiveReload, so most Markdown, HTML, SCSS, and JavaScript edits refresh automatically.

## Editing Content

- Update the biography and recruiting text in `_includes/sections/intro.md`.
- Update news in `_includes/sections/news.md`.
- Update publication cards and paper list in `_includes/sections/publications.md`.
- Update honors in `_includes/sections/honors.md`.
- Update education, work experience, and service in `_includes/sections/experience.md`.
- Put new publication images in `assets/images/` and reference them with `assets/images/<filename>`.

## Build

```bash
ruby -S bundle _2.2.19_ exec jekyll build
```

GitHub Pages will build the site after pushing to the repository.
