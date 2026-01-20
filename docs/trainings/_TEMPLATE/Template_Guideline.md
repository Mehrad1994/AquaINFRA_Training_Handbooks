# Training Template Directory

This directory contains template files for creating new training materials.

## How to Use This Template

1. **Copy the entire `_TEMPLATE` directory**:
   ```bash
   cp -r docs/trainings/_TEMPLATE docs/trainings/your-training-name
   ```

2. **Edit the files**:
   - `index.md` - Landing page with overview and chapter links
   - `01_introduction.md` - First chapter template
   - Add more chapter files as needed (`02_*.md`, `03_*.md`, etc.)

3. **Update front matter** in each file:
   ```yaml
   ---
   layout: default
   title: Your Chapter Title
   ---
   ```

4. **Register in navigation**:
   Edit `docs/_data/use_cases.yml` to add your training to the sidebar

5. **Test locally**:
   ```bash
   cd docs
   jekyll serve
   ```

## File Naming Convention

- Use lowercase letters
- Separate words with hyphens
- Number chapter files: `01_`, `02_`, `03_`, etc.
- Examples:
  - `index.md` (required)
  - `01_introduction.md`
  - `02_getting_started.md`
  - `03_advanced_features.md`

## Required Files

- ✅ `index.md` - Landing page (required)
- ✅ At least one chapter file (e.g., `01_introduction.md`)

## Optional Files

- `assets/images/` - Directory for training-specific images
- `README.md` - Additional notes about the training

## Tips

- Keep chapter files focused (one topic per chapter)
- Use descriptive titles

## Navigation Buttons (Required)
At the bottom of every chapter (except the introduction, which only has Next), include **Previous** and **Next** buttons using the `.btn-group` container.

**Example:**
```html
<div class="btn-group">
    <a href="01_introduction.html" class="btn btn--outline">&larr; Previous Chapter</a>
    <a href="03_next_topic.html" class="btn">Next Chapter &rarr;</a>
</div>
```

## Video References (Required)
If the handbook has an accompanying video, place a **Video Reference** callout at the *bottom* of the page, just *above* the navigation buttons.
- Use the detailed timestamps provided in the video description.
- **Link ONLY the timestamp**.

**Example:**
<div class="callout">
    <strong>📹 Video Reference</strong>
    <a href="VIDEO_URL&t=TIMESTAMP" target="_blank">MM:SS</a> Section Title
</div>
- Link between chapters for easy navigation

For more details, see [CONTRIBUTING.md](../../../CONTRIBUTING.md)
