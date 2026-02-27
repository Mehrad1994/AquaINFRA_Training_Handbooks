# ✍️ Contributor Guide: AquaINFRA Handbooks

Thank you for contributing to the AquaINFRA Training Handbooks! This guide explains how to add new content and maintain the sequential learning path.

## 🚪 How to Add a New Training (Use Case)

### 1. Use the Template

The easiest way to start is by copying the `_TEMPLATE` directory:

```bash
cp -r docs/trainings/_TEMPLATE docs/trainings/your-training-name
```

### 2. Configure the Handbook

- **`index.md`**: Update the video ID and learning objectives.
- **Chapters**: Create individual Markdown files (e.g., `01_intro.md`) for each workshop section.
- **Navigation**: Use the `btn-seq` buttons at the bottom of every page to link them together.

### 3. Register your Training

Add your training to `docs/_data/use_cases.yml` so it appears in the sidebar and the library:

```yaml
- region: "Your Region"
  trainings:
    - title: "Training Title"
      description: "Short summary."
      url: "/trainings/your-training-name/"
      d2kp_url: "..." # Required: Link to Zenodo/D2KP package
      github_url: "..." # Optional: Data/Code path
      youtube_url: "..." # Optional: Video path
```

## 🎨 Styling Rules

To keep the site looking "premium" and professional:

- **No Inline Styles**: Do not use `style="..."` attributes.
- **Unified Logic**: All fonts and spacing must match the centralized design system.
- **Use Theme Classes**:
  - Buttons: `.btn-seq .btn-seq--next` or `.btn-seq--prev`.
  - Cards: `.use-case-card` or `.step-content`.
  - Callouts: Use the `> [!NOTE]` or `> [!IMPORTANT]` syntax.
- **Wave Decoration**: Add the `<div class="wave-decoration"></div>` at the very bottom of main landing pages.

## 🛠️ Local Testing

We recommend testing your changes before pushing.

1. Install Ruby and Jekyll.
2. Run:

```bash
# Navigate into the docs directory
cd docs
# Start the server
bundle exec jekyll serve --livereload
```

3. Open `http://localhost:4000/`. 

> [!IMPORTANT]
> **Do not change `baseurl`** in `_config.yml`. The site uses dynamic pathing and will work automatically on GitHub and locally without any changes.

## 📜 Code of Conduct

Focus on clarity, scientific accuracy, and reproducibility. Ensure all links to external resources (D2KP/GitHub) are functional.
