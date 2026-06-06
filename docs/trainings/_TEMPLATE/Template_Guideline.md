# Training Template Guide

Scaffolding for new AquaINFRA training handbooks. Copy this directory, fill in the templates, and register your training in `_data/use_cases.yml`.

---

## 🚀 Quick start

```bash
# 1. Copy the template
cp -r docs/trainings/_TEMPLATE docs/trainings/your-use-case

# 2. Rename / add chapter files (keep the NN_name.md numbering pattern)
# 3. Edit each chapter to follow the standard page anatomy (below)
# 4. Register in docs/_data/use_cases.yml (see "Registry entry" below)
# 5. Test locally: cd docs && bundle exec jekyll serve --livereload
```

---

## 📐 The standard page anatomy

Every chapter page should be built from these blocks (top to bottom):

1. **Chapter title (H1)** - `# Title`, with **no numeric prefix** (sequence is shown by the meta line and `nav_order`, not the title). The site CSS automatically adds the blue accent bar; do not wrap it in any container.
2. **Meta line** - `<p class="chapter-meta">` showing read time, video time, and `Chapter X of N`.
3. **At-a-glance callout** - 2-3 bullets summarising what the reader will know after this chapter.
4. **Video companion** - the pre-clipped iframe (`start=` / `end=`) followed by a single `<p class="chapter-meta">📍 Jump to …</p>` line. (Per-segment timestamp tables have been retired.)
5. **Key points** - concise keynotes that **assume the reader watched the video**. Capture the reusable facts, decisions, and gotchas - do **not** re-narrate the steps. Use bullets and small tables; Mermaid only where it clarifies more than words.
6. **`<details>` appendix** (optional) - the fuller click-by-click walkthrough, parameter tables, code, or internals trimmed out of the keynotes. Collapsed by default; mark any illustrative example clearly.
7. **✅ Key takeaways** - 3-5 bullets for fast review.
8. **Troubleshooting** (when relevant) - short list, or link to the global `/reference/faq` page.
9. **Sequential nav** - `Previous` / `Next` buttons.

> Don't repeat the video in prose. The page is the **reference layer** - it helps a reader who watched recall the keynotes and grab the reusable bits without rewatching, not an alternative to the video.

---

## 🧾 YAML frontmatter cheat sheet

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

## 📋 Registry entry - `docs/_data/use_cases.yml`

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

## ✅ Contributor checklist

Before opening a PR, verify every chapter has:

- [ ] Chapter title as H1 (`# Title`, no numeric prefix) - the CSS adds the blue accent bar automatically.
- [ ] Meta line beneath the title with read/video time and `Chapter X of N`.
- [ ] At-a-glance callout (2-3 bullets).
- [ ] Pre-clipped iframe (`start=...&end=...`) embedding the right video segment, followed by a single `📍 Jump to …` line (`class="chapter-meta"`).
- [ ] **Key points** that assume the reader watched - keynotes and reusable facts, **not** a re-narration of the steps.
- [ ] Fuller walkthrough / technical detail tucked into a collapsible `<details>` appendix (when there is any).
- [ ] Key takeaways at the end.
- [ ] No inline `style="..."` - use the `.chapter-meta` class and the `.callout` / `.table-wrapper` CSS.
- [ ] First mention of technical terms links to `{{ relative_root }}reference/glossary#anchor`.
- [ ] Previous / Next navigation present and correct.
- [ ] Wave decoration block at the bottom (consistency with rest of site).

And on the index page:

- [ ] Hero block with workshop recording metadata.
- [ ] Full chapter table-of-contents.
- [ ] "Back to Use Case Library" link.
- [ ] Registered in `_data/use_cases.yml`.

---

## 🎨 Styling notes

The handbook uses a centralised design system. **Do not use inline styles** beyond what's shown in the template.

- **Cards**: `.step-content`
- **Buttons**: `.btn-seq` with `.btn-seq--next` / `.btn-seq--prev`
- **Callouts**: GitHub-style alerts (`> [!NOTE]` / `> [!TIP]` / `> [!WARNING]`) or `<div class="callout">` with optional `callout--warning` / `callout--info`.
- **Tables**: wrap in `<div class="table-wrapper">` for responsive overflow.
- **Diagrams**: Mermaid is enabled - use fenced ` ```mermaid ` blocks.

---

## 🔗 Related references

- [Glossary](../../reference/glossary.md) - link first-mention terms here.
- [Prerequisites & Sign-Up](../../reference/prerequisites.md) - link from any chapter that requires an account.
- [FAQ & Troubleshooting](../../reference/faq.md) - link from troubleshooting sections rather than duplicating answers.
- [ARCHITECTURE.md](../../../ARCHITECTURE.md) - site-wide architecture overview.
