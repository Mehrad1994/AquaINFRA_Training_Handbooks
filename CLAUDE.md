# AquaINFRA Training Handbook - Agent Guide

This file is read automatically at the start of every Claude Code session (local **and** cloud/web), so the rules below apply wherever you work on this repo. It consolidates the project's house rules. For the full detail, see [STYLEGUIDE.md](STYLEGUIDE.md), [CONTRIBUTING.md](CONTRIBUTING.md), [ARCHITECTURE.md](ARCHITECTURE.md), and the [Template Guideline](docs/trainings/_TEMPLATE/Template_Guideline.md).

## Architecture & tech stack (do not change)
- **Jekyll** static site, **Liquid** templating, **Vanilla CSS** (no Tailwind/Bootstrap, no JS frameworks, no Node/Webpack/Vite build step).
- All site source lives in `docs/`. Do not move or rename it.
- **Zero-config portability**: never hardcode domain/repo paths. Do **not** edit `baseurl`/`url` in `docs/_config.yml`. Use the universal relative-root pathing from `_layouts/default.html` (`{{ relative_root }}` in Markdown).

## Styling
- **No inline `style="..."`** in new content; use the decoupled classes in `sidebar.css`, `theme.css`, `style.css`.
- Mandatory classes: containers `.use-case-card` / `.step-content`; nav `.btn-seq` + `.btn-seq--next` / `.btn-seq--prev`; tables wrapped in `<div class="table-wrapper">`; videos in `<div class="video-container">`.
- Callouts: GitHub alerts (`> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`) or the `<div class="callout">` "At a glance" block.
- Everything must stay responsive (test down to 375px).

## Content & tone
- **Language: English (British).** e.g. analyse, harmonise, visualise, modelling, centre, organisation, licence. AquaINFRA is an EU project, so British spelling is the standard.
- **Engaging Academic** voice: write to "you", active voice, short paragraphs, concrete over abstract. Write as a senior researcher explaining to a competent colleague.
- **Companion, not transcript.** The handbook adds value beyond the video - frame *why it matters* and *what to watch for*; never transcribe the video.
- **Avoid AI-speak**: no "delve", "dive in", "heavy lifting", "in conclusion", "it is important to note", "robust framework", "comprehensive", "cutting-edge", "seamlessly", em/en dashes (`—`/`–`) - use hyphens or rephrase.
- **Practicality**: show concrete examples and numbered steps; prefer **semantic tables** (`| Step | Goal | Action |`) over dense bullet lists for multi-part logic.
- **Accuracy first**: do not invent parameter names, function signatures, endpoints, DOIs, or results. Verify against the real D2KP / package / workflow, or label the example clearly as *illustrative*.

## Headings & structure
- Exactly **one `# H1` per page**; descend logically `H1 → H2 → H3`, never skip levels. Sentence case, no trailing punctuation.
- **No numeric prefixes in titles or H1 headings** (`# Introduction`, not `# Chapter 1 - Introduction`). Sequence is conveyed by the meta line ("Chapter X of N") and `nav_order`, not the title.
- Do not set heading sizes with inline styles - `style.css` governs them globally.
- Brand capitalisation: `AquaINFRA`, `AquaINFRA Interaction Platform (AIP)`, `Aqua Galaxy`, `VRE`, `D2KP` / `Data-to-Knowledge Package`, `FAIR`, `EOSC`, `DDAS`, `HELCOM`, `HEREON`, `Mann-Kendall`, `Zenodo`, `specleanr`.
- On first mention of a technical term, link to the Glossary: `{{ relative_root }}reference/glossary#anchor`. Add new terms to `docs/reference/glossary.md` with a stable `{#anchor}`.

## Adding a training (the pipeline)
1. Copy `docs/trainings/_TEMPLATE/` to a new folder; keep `NN_name.md` numbering.
2. Follow the standard chapter anatomy (meta line → at-a-glance → clipped video → key concepts → step-by-step → optional `<details>` deep dive → key takeaways → sequential nav). Note: per-segment timestamp tables have been retired - do not add them.
3. Register the training in `docs/_data/use_cases.yml` (region, title, url, description, status, optional `d2kp_url`) so it appears in the sidebar and Use Cases library.

## Visuals
- When a concept would be clearer as a Mermaid diagram, chart, or roadmap, **propose it to the user first** and implement only after approval. (Simple semantic tables are fine to add directly.)

## Repository hygiene
- No dead or duplicated files: if you replace something, delete the old version.
- Never commit builds (`_site/`), isolated environments (`venv/`, `vendor/`), or tool-specific AI-rules dotfiles (`.agents/`, `.cursorrules`, `.windsurfrules`) - these are already in `.gitignore`. (This `CLAUDE.md` is intentionally committed; it is project documentation, not a tool dotfile.)
