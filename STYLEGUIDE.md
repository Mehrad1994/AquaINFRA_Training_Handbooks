# ✍️ AquaINFRA Handbook Style Guide

This guide codifies the writing conventions used across the handbook so that new chapters feel consistent with what's already there. Apply it whenever you author or review content. Pair it with [CONTRIBUTING.md](CONTRIBUTING.md) and the [Template Guideline](docs/trainings/_TEMPLATE/Template_Guideline.md).

---

## 1. Voice & tone

**Tone: Engaging Academic.** Substantively rigorous, accessible in delivery. Imagine writing for a marine biologist who has never used Galaxy.

- **Write to "you"**, not "the user" or "researchers" (third person feels distant).
- **Active voice over passive.** *"The workflow assigns each point to a unit"*, not *"each point is assigned to a unit by the workflow"*.
- **Short paragraphs.** 2-4 sentences. Break long blocks with subheads, bullets, or callouts.
- **Concrete over abstract.** Prefer *"click Import to Galaxy"* over *"initiate the import process"*.

### Avoid AI tics

These words and phrases are flags that the prose drifted into generic AI tone. Rewrite if they appear:

- ❌ *delve, tapestry, journey, navigate the landscape, in the realm of, harness*
- ❌ *Let's dive in / Let's explore / In this chapter we will explore*
- ❌ *It's worth noting that, It is important to note*
- ❌ *Comprehensive solution, robust framework, cutting-edge*
- ❌ Em dashes (`—`) and en dashes (`–`) — use a regular hyphen (`-`), comma, parentheses, or rephrase
- ❌ Triple-bullet padding ("First, ... Second, ... Third, ...") when two ideas would do

---

## 2. Capitalisation & brand naming

Be strict and consistent:

| Correct | Wrong |
|---|---|
| AquaINFRA | Aqua-INFRA, aquainfra, AquaInfra |
| FAIR | Fair, fair |
| EOSC, AIP, VRE, D2KP, DDAS, DGA | mixed-case variants |
| Aqua Galaxy | AquaGalaxy, aqua galaxy |
| Mann-Kendall | Mann Kendall, mann-kendall |
| Zenodo | ZENODO |
| Galaxy | (when referring to the platform) galaxy |
| OGC API | ogc api |
| GitHub, GeoJSON, MyBinder | github, geojson, mybinder |

### First-mention convention

On first mention of an acronym, spell it out and link to the [Glossary](docs/reference/glossary.md):

> the **[AquaINFRA VRE]({{ relative_root }}reference/glossary#vre)** (Virtual Research Environment, powered by [Aqua Galaxy]({{ relative_root }}reference/glossary#aqua-galaxy) at `aqua.usegalaxy.eu`)

Then plain "VRE" is fine.

---

## 3. Headings

- **Sentence case**, not Title Case. *"Workflow concept"*, not *"Workflow Concept"*.
- One `H1` per page (used by the chapter title). H2 for top-level sections. Avoid jumping H2 → H4.
- The first H1 on every page gets a blue accent bar automatically via CSS - **do not wrap it in any custom container or class**.
- No trailing punctuation in headings.
- Anchors are auto-generated from heading text by Kramdown. To set an explicit ID for cross-linking, append `{#anchor-name}`.

---

## 4. Punctuation & formatting

- **No em or en dashes.** Use `-` or rephrase.
- **No double spaces** after periods.
- **Smart quotes off** — use straight quotes (`"..."`, `'...'`) for code compatibility.
- **`code spans`** for filenames, parameter names, UI labels you click (*Run*, *Import*), short URLs, and CLI snippets.
- **Bold** for terminology emphasis on first use only. Stop bolding after that.
- *Italic* sparingly, mostly for emphasis or paper titles.
- **Bullet lists** for 3+ parallel items. For 2 items, use prose.

---

## 5. Page anatomy (chapter pages)

Every chapter follows the same structure - see [Template Guideline](docs/trainings/_TEMPLATE/Template_Guideline.md):

1. Chapter title H1 (`# Chapter X - Title`) - blue accent bar is auto-applied by CSS
2. Meta line (read time, video time, chapter position)
3. **At a glance** callout
4. **Video companion**: iframe + timestamp table (timestamps required, no "Chapter index" sub-heading)
5. **Key concepts** (not a transcript)
6. **Step-by-step** (procedural only)
7. Optional `<details>` deep dive
8. **Key takeaways**
9. Sequential nav

Don't reorder. Don't omit. Especially don't drop the timestamp table - it's the supervisor-required review feature.

---

## 6. Linking

- **Internal links** use the site's relative-root Liquid pattern:
  - `{{ relative_root }}reference/glossary#fair`
  - `{{ relative_root }}06_use_cases`
  - **Never** use `{{ '/path' | relative_url }}` - it breaks under the GitHub Pages subpath.
- **External links** open in a new tab automatically via `external-links.js` - no need to add `target="_blank"` yourself.
- **YouTube deep links** use the `&t=Xs` form so they jump to the exact second.

---

## 7. Code blocks

Always specify a language for syntax highlighting:

```markdown
    ```r
    library(specleaner)
    result <- m_detect(data, "MeanAnnualTemperature")
    ```
```

Languages used in this handbook: `r`, `python`, `bash`, `yaml`, `json`, `html`, `mermaid`, plain (no language for output traces).

---

## 8. Tables

Wrap tables in `<div class="table-wrapper">` so they get responsive overflow:

```html
<div class="table-wrapper">
    <table>...</table>
</div>
```

Use HTML tables (not markdown pipes) when you need spans, alignment, or HTML inside cells.

---

## 9. Callouts

Two flavours are supported:

**GitHub-style** (auto-styled by the alert transformer in `default.html`):

```markdown
> [!NOTE] Title here
> Body content.
```

Types: `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`.

**Custom callout block** (use for "At a glance" and other structured callouts):

```html
<div class="callout">
    <strong>📌 At a glance</strong>
    <ul>...</ul>
</div>
```

Variants: `.callout--info`, `.callout--warning`.

---

## 10. Images & media

- Place screenshots under `docs/assets/images/`.
- Use `.webp` when possible, `.png` as fallback.
- Every `<img>` needs meaningful `alt` text (not "screenshot").
- Maximum image width 1200px (file size matters for slow connections).
- YouTube embeds use the `<div class="video-container">` wrapper for responsive sizing.

---

## 11. Inclusivity

- Don't assume the reader's gender (use "they" or rewrite).
- Don't assume the reader's geography ("everyone in Europe" is fine; "every reader" is better).
- Don't assume the reader's background ("if you've used Galaxy before…" is OK as a flag, not a gate).

---

## When in doubt

Read three existing chapters and match their voice. If something feels off, it usually is - trust the instinct and rewrite.
