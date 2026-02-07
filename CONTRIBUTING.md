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
Add your training to `docs/_data/use_cases.yml` so it appears in the sidebar and the Step 4 library:
```yaml
- region: "Your Region"
  trainings:
    - title: "Training Title"
      description: "Short summary."
      url: "/trainings/your-training-name/"
      zenodo_url: "..."
      github_url: "..."
      youtube_url: "..."
```

## 🎨 Styling Rules
To keep the site looking "premium" and professional:
- **No Inline Styles**: Do not use `style="..."` attributes.
- **Use Theme Classes**: 
  - Buttons: `.btn-seq .btn-seq--next` or `.btn-seq--prev`.
  - Cards: `.use-case-card`.
  - Callouts: Use the `> [!NOTE]` or `> [!IMPORTANT]` syntax.
- **Wave Decoration**: Add the `<div class="wave-decoration"></div>` at the very bottom of main landing pages.

## 🛠️ Local Testing
We recommend testing your changes before pushing.
1. Install Ruby and Jekyll.
2. Run `bundle exec jekyll serve`.
3. Open `http://localhost:4000/AquaINFRA_Training_Handbooks/`.

## 📜 Code of Conduct
Focus on clarity, scientific accuracy, and reproducibility. Ensure all links to external data (Zenodo/GitHub) are functional.
