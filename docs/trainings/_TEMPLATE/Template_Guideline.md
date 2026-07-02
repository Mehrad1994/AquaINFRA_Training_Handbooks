# Training Template Guide

Scaffolding for new AquaINFRA training handbooks. Copy this directory, fill in the templates, and register your training in `_data/use_cases.yml`.

---

## Quick start

```bash
# 1. Copy the template
cp -r docs/trainings/_TEMPLATE docs/trainings/your-use-case

# 2. Rename / add chapter files (keep the NN_name.md numbering pattern)
# 3. Edit each chapter to follow the standard page anatomy (below)
# 4. Register in docs/_data/use_cases.yml (see "Registry entry" below)
# 5. Test locally: cd docs && bundle exec jekyll serve --livereload
```

---

## The standard page anatomy

Every chapter page should be built from these blocks (top to bottom):

1. **Chapter title (H1)** - `# Title`, with **no numeric prefix** (sequence is shown by the meta line and `nav_order`, not the title). The site CSS automatically adds the blue accent bar; do not wrap it in any container.
2. **Meta line** - `<p class="chapter-meta">Chapter X of N</p>` only. No read-time, no emoji.
3. **"About this chapter" box** - `<div class="chapter-intro">` with **one short paragraph** framing what the video covers and why it matters. This is the only guaranteed text on the page.
4. **Video** - the pre-clipped iframe (`start=` / `end=`).
5. **Then nothing**, *except*:
   - a **diagram/chart** (Mermaid or a small table) if the chapter is about a workflow or its structure;
   - the **research question**, or the **result + future outlook**, where those apply.
6. **Sequential nav** - `Previous` / `Next` buttons + the `.wave-decoration` block.

> The video does the teaching. The page is a brief, visual-first frame around it - never re-narrate the steps, and never add Key points / Key takeaways / appendices. No emoji or icons anywhere; no inline styles (use `.chapter-intro`, `.chapter-meta`, `.callout`, `.table-wrapper`).

---

## YAML frontmatter cheat sheet

### Index page (`index.md`)
```yaml
---
layout: default
title: "Your Training Title"
hero_title: "Region or Theme"   # appears in the hero banner
region: "Region Name"           # e.g. "Baltic Sea"
use_case: true
---
```

### Chapter pages (`NN_topic.md`)
```yaml
---
layout: default
title: "Chapter Title"
---
```

---

## Registry entry - `docs/_data/use_cases.yml`

Add your training under the correct region. Example:

```yaml
- region: "Baltic Sea"
  trainings:
    - title: "Your Training Title"
      url: "/trainings/your-use-case/"
      description: "One-sentence description visible on the Use Cases library page."
      status: "Active"                              # or "Planned"
      d2kp_url: "https://aquainfra.dev.52north.org/result/zenodo:XXXXXX"   # optional
```

After saving, your training will appear automatically in the sidebar under **Applied Use Case Training** → region.

---

## Contributor checklist

Before opening a PR, verify every chapter has:

- [ ] Chapter title as H1 (`# Title`, no numeric prefix) - the CSS adds the blue accent bar automatically.
- [ ] Meta line: `<p class="chapter-meta">Chapter X of N</p>` only.
- [ ] `.chapter-intro` box with **one short paragraph** above the video.
- [ ] Pre-clipped iframe (`start=...&end=...`) embedding the right video segment.
- [ ] Nothing after the video **except**: a diagram for workflow chapters, or the research question / result + future where they apply.
- [ ] No Key points, Key takeaways, or appendices; no re-narration of the video.
- [ ] No emoji or icons anywhere; no inline `style="..."` (use `.chapter-intro`, `.chapter-meta`, `.callout`, `.table-wrapper`).
- [ ] First mention of technical terms links to `../../reference/glossary#anchor`. (No need for `target` or `title` attributes; JS handles the hover tooltip automatically).
- [ ] Previous / Next navigation and the `.wave-decoration` block present.

And on the index page:

- [ ] Hero block with workshop recording metadata.
- [ ] Full chapter table-of-contents.
- [ ] "Back to Use Case Library" link.
- [ ] Registered in `_data/use_cases.yml`.

---

## Styling notes

The handbook uses a centralised design system. **Do not use inline styles** beyond what's shown in the template.

- **Cards**: `.step-content`
- **Buttons**: `.btn-seq` with `.btn-seq--next` / `.btn-seq--prev`
- **Callouts**: GitHub-style alerts (`> [!NOTE]` / `> [!TIP]` / `> [!WARNING]`) or `<div class="callout">` with optional `callout--warning` / `callout--info`.
- **Tables**: wrap in `<div class="table-wrapper">` for responsive overflow.
- **Diagrams**: Mermaid is enabled - use fenced ` ```mermaid ` blocks.

---

## Related references

- [Glossary](../../reference/glossary.md) - link first-mention terms here.
- [Prerequisites & Sign-Up](../../reference/prerequisites.md) - link from any chapter that requires an account.
- [FAQ & Troubleshooting](../../reference/faq.md) - link from troubleshooting sections rather than duplicating answers.
- [ARCHITECTURE.md](../../../ARCHITECTURE.md) - site-wide architecture overview.
