---
trigger: always_on
---

# 🌊 AquaINFRA Training Handbook - AI Agent Rules

You are working on the AquaINFRA Training Handbook codebase. Before writing ANY code, you MUST understand and obey these structural rules. Violations will break the deployment, styling, or navigation flow.

## 1. 🏗️ ARCHITECTURE & TECH STACK (DO NOT CHANGE)
- **Framework**: Jekyll (Static Site Generator).
- **Templating**: Liquid.
- **Styling**: Vanilla CSS (no Tailwind, Bootstrap, etc.).
- **Directory**: ALL work happens in the `docs/` folder. Do not move or rename this folder.
- **NO JS/Node**: Do not introduce Node.js, React, or build steps like Webpack/Vite.

## 2. 🌍 ZERO-CONFIG & MAXIMUM PORTABILITY (CRITICAL)
This project is designed to be **100% portable** so that it can be dropped into any other repository, GitHub Pages account, or the main AquaINFRA website without changes. 
- **NO HARDCODED URLS**: Never hardcode paths that lock the site to a specific domain or repository.
- **DO NOT MODIFY `_config.yml`**: Do not add or change the `baseurl` or `url` properties. 
- **UNIVERSAL PATHING**: Always rely on the Universal Pathing logic defined in `_layouts/default.html` (e.g., using relative depths like `../` or `../../`).

## 3. 🎨 STYLING, DESIGN SYSTEM & RESPONSIVENESS
The handbook must maintain a premium, unified look and be perfectly usable on *every type of device and monitor size*.
- **RESPONSIVE FIRST**: Ensure all design changes are mobile-friendly and responsive.
- **NO INLINE STYLES**: Never use `style="..."` attributes in HTML/Markdown.
- **USE DECOUPLED CSS**: Only use the classes defined in `sidebar.css`, `theme.css`, and `style.css`.
- **MANDATORY CLASSES**: 
  - Containers: Use `.use-case-card` or `.step-content`.
  - Navigation: Use `.btn-seq` along with `.btn-seq--next` or `.btn-seq--prev`.
- **CALLOUTS**: Use standard GitHub alert syntax (`> [!NOTE]`, `> [!IMPORTANT]`, `> [!WARNING]`) instead of custom HTML.

## 4. 🚪 ADDING NEW TRAINING CONTENT (THE PIPELINE)
To maintain the sequential learning flow, any new training modules must follow strict steps:
1. **DUPLICATE THE TEMPLATE**: Always copy `docs/trainings/_TEMPLATE/` for new use cases.
2. **SEQUENTIAL FILES**: Create separate numbered markdown files (e.g., `01_intro.md`, `02_setup.md`) representing each step.
3. **REGISTRATION**: You MUST register the new training in `docs/_data/use_cases.yml` so it appears in the sidebar library.
4. **NAVIGATION**: Keep the "Guided Path" feeling intact. Every page must link to the next/previous step using the `.btn-seq` buttons at the bottom.

## 5. 🧜‍♂️ DIAGRAMS & CONTENT
- **Keep Markdown Clean**: Avoid heavy HTML where standard Markdown or Liquid tags suffice.
- **Mermaid Support**: Use standard ````mermaid` code blocks if you need to generate architecture diagrams or workflows.

## 6. 🧹 REPOSITORY HYGIENE & DEPENDENCIES (CRITICAL)
- **NO DEAD CODE/FILES**: Never keep redundant, unused, or duplicated files. If a file is replaced, delete the old version.
- **MINIMAL DEPENDENCIES**: Do not use unrelated or heavy dependencies that bloat the project.
- **ISOLATED ENVIRONMENTS**: For local testing, all dependencies MUST be kept in isolated folders (e.g., a `venv/` folder for Python tools, or `vendor/bundle/` for Ruby).
- **STRICT GITIGNORE**: It is vital to only push project source code and data to GitHub. Never commit builds (`_site/`), isolated environments (`venv/`), personal development files, or AI rules (`.agents/`).
