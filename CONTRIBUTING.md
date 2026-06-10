# Contributing to AquaINFRA Handbook

We welcome technical trainings, use cases, and documentation improvements. The handbook is a **companion** to the AquaINFRA YouTube trainings, not a transcript of them - every page should add value beyond watching the video.

## The contribution pipeline

1. **Duplicate.** Copy `docs/trainings/_TEMPLATE/` into a new folder named after the use case (e.g. `docs/trainings/gulf-of-finland/`).
2. **Author.** Fill in each chapter using the page anatomy below. Numbered file names control the chapter order.
3. **Register.** Add the training to `docs/_data/use_cases.yml` under the right region. The sidebar and Use Cases page pick it up automatically.
4. **Review.** Walk the pre-publish checklist below before opening a PR.
5. **Open a PR.** Target `main` (or the active update branch).

## Page anatomy (every chapter)

1. Chapter title H1 (`# Title`, no numeric prefix) - the blue accent bar is added automatically by CSS
2. Meta line (`<p class="chapter-meta">Chapter X of N</p>` - position only)
3. **"About this chapter" box** (`<div class="chapter-intro">`) - one short paragraph framing the video
4. **Video** - the pre-clipped iframe
5. **Then nothing**, except: a diagram/chart for workflow chapters, or the research question / result + future where they apply
6. Sequential `Previous` / `Next` navigation + `.wave-decoration`

The video teaches; the page is a brief, visual-first frame. No Key points, Key takeaways, appendices, re-narration, emoji, or inline styles.

Full template and CSS conventions: [`docs/trainings/_TEMPLATE/Template_Guideline.md`](docs/trainings/_TEMPLATE/Template_Guideline.md).

## Style

The full style guide lives at [STYLEGUIDE.md](STYLEGUIDE.md). Highlights:

- **Engaging Academic** tone - substantively rigorous, accessibly delivered.
- Strict brand capitalisation: `AquaINFRA`, `FAIR`, `EOSC`, `AIP`, `VRE`, `D2KP`, `Aqua Galaxy`.
- **No em or en dashes** - use hyphens or rephrase.
- First mention of a technical term links to `{{ relative_root }}reference/glossary#anchor`.
- Sentence case headings.
- Internal links use `{{ relative_root }}path` (never `{{ '/path' | relative_url }}`).

## Pre-publish review checklist

Before opening the PR, verify:

**Per chapter**
- [ ] Chapter title as H1 (`# Title`, no numeric prefix) - the blue accent bar will appear automatically.
- [ ] Meta line: `<p class="chapter-meta">Chapter X of N</p>` only.
- [ ] `.chapter-intro` box with one short paragraph above the video.
- [ ] Pre-clipped video iframe (`start=...&end=...`) loads the right segment.
- [ ] Nothing after the video except: a diagram for workflow chapters, or the research question / result + future where they apply.
- [ ] No Key points, Key takeaways, appendices, or re-narration of the video.
- [ ] No emoji or icons anywhere; no inline `style="..."` (use `.chapter-intro`, `.chapter-meta`, `.callout`, `.table-wrapper`).
- [ ] First mention of every technical term links to the Glossary.
- [ ] Sequential `Previous` / `Next` buttons point to the right files.
- [ ] No em/en dashes (`—`, `–`).
- [ ] Code blocks have a language tag.
- [ ] External links use plain markdown syntax - the site script adds `target="_blank"` automatically.

**Use-case index page**
- [ ] Hero block with workshop recording metadata.
- [ ] Full chapter table-of-contents.
- [ ] "Back to Use Case Library" link.

**Registration**
- [ ] Entry in `docs/_data/use_cases.yml` with correct region, title, url, description, status, and `d2kp_url` (if Active).

**Cross-page**
- [ ] New glossary terms added to `docs/reference/glossary.md` with stable anchors.
- [ ] Any new FAQ-worthy issue added to `docs/reference/faq.md`.

**Final smoke test**
- [ ] `cd docs && bundle exec jekyll serve --livereload` builds without warnings.
- [ ] Walk the new training start-to-finish in the browser. Click every link.
- [ ] Test mobile at 375px width (DevTools).

## Local development

You need **Ruby** and **Jekyll** installed.

```bash
cd docs
bundle install         # first time only
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000/` and edit-as-you-go.

## Related docs

- [STYLEGUIDE.md](STYLEGUIDE.md) - full writing conventions.
- [ARCHITECTURE.md](ARCHITECTURE.md) - site structure and design philosophy.
- [`docs/trainings/_TEMPLATE/Template_Guideline.md`](docs/trainings/_TEMPLATE/Template_Guideline.md) - scaffolding and CSS conventions for new trainings.
