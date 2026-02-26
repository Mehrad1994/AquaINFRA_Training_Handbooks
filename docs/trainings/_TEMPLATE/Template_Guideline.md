# Training Template Guide

This directory provides the building blocks for new AquaINFRA training handbooks.

## 🚀 Quick Start

1. **Copy the directory**:
   ```bash
   cp -r docs/trainings/_TEMPLATE docs/trainings/your-use-case
   ```

2. **Update the filenames and content**:
   - `index.md`: The landing page with video embed.
   - `01_introduction.md`: The first content page.
   - Add more numbered files as needed.

3. **Register in `docs/_data/use_cases.yml`**:
   Add your training under the correct region to make it appear in the library and sidebar.

## 🎨 Styling Best Practices
We use a centralized design system. **Do not use inline styles**.

- **Cards**: Use the `step-content` class for introductory blocks.
- **Buttons**: Use `.btn-seq` with `.btn-seq--next` or `.btn-seq--prev`.
- **Callouts**: Use Jekyll/GitHub alerts (`> [!NOTE]`).
- **Unified Logic**: Ensure all content fits the "smaller" font proportions (Headers ~1.4rem).

## 🛤️ Navigation Structure
Every page should maintain the "Guided Path" feeling:
- **Index Pages**: Should always have a `<a href="{{ '/06_use_cases' | relative_url }}" class="btn-seq btn-seq--prev">&larr; Back to Use Case Library</a>` button.
- **Chapter Pages**: Should have both **Previous** and **Next** buttons.

## 📹 Video Referencing
Use the `<div class="callout">` block provided in `index.md` for video stats. If linking to specific timestamps in chapters, use the syntax:
`[MM:SS](https://youtube.com/...)`

For more details on the site architecture, see [ARCHITECTURE.md](../../../ARCHITECTURE.md).
