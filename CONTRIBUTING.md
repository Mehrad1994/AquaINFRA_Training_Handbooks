# Contributing to AquaINFRA Training Handbooks

Thank you for your interest in contributing! This guide will help you add new training materials from AquaINFRA YouTube videos to the handbook.

## 🎯 Quick Start

1. **Fork** this repository
2. **Clone** your fork locally
3. **Add** your training content following the structure below
4. **Test** locally with Jekyll
5. **Submit** a pull request

## 📹 Adding a New Training from YouTube

### Step 1: Prepare Your Content

Watch the AquaINFRA YouTube training video and prepare:
- Video title and description
- Chapter breakdown with timestamps
- Key learning objectives
- Screenshots or diagrams (optional)

### Step 2: Choose the Region

Training materials are organized by geographic region:
- `Baltic Sea` - Gulf of Riga, etc.
- `North Sea` - Coming soon
- `Mediterranean` - Coming soon
- `Pan-European` - Cross-regional content

### Step 3: Create Training Directory

```bash
cd docs/trainings/
mkdir -p your-training-name
cd your-training-name
```

### Step 4: Create Required Files

#### 4.1 Create `index.md` (Landing Page)

```markdown
---
layout: default
title: Your Training Title
region: "Baltic Sea"  # or your region
use_case: "Your Use Case Name"
---

# Your Training Title

Brief introduction to what this training covers.

## 📺 Source Video
[Watch on YouTube](https://youtube.com/watch?v=YOUR_VIDEO_ID)

## 🎓 Learning Objectives
- Objective 1
- Objective 2
- Objective 3

## 📚 Chapters

| Chapter | Title | Link |
|---------|-------|------|
| 1 | Introduction | [View](01_introduction.html) |
| 2 | Main Content | [View](02_main_content.html) |
| 3 | Conclusion | [View](03_conclusion.html) |
```

#### 4.2 Create Chapter Files

Create numbered markdown files for each chapter:
- `01_introduction.md`
- `02_main_content.md`
- `03_conclusion.md`

**Template for chapter files:**

```markdown
---
layout: default
title: Chapter Title
---

# Chapter Title

Content from the video transcript, organized with:

## Headings for major sections

Regular paragraphs for explanations.

### Code blocks for examples
\`\`\`python
# Example code
\`\`\`

### Images
![Description](../assets/images/your-image.png)

---

<a href="02_next_chapter.html" class="btn">Next Chapter →</a>
```

### Step 5: Register in Navigation

Edit `docs/_data/use_cases.yml`:

```yaml
- region: "Baltic Sea"
  trainings:
    - title: "Gulf of Riga Case Study"
      url: "/trainings/gulf-of-riga/"
    - title: "Your New Training"  # Add this
      url: "/trainings/your-training-name/"  # Add this
```

### Step 6: Test Locally

```bash
cd docs
bundle install  # First time only
jekyll serve --livereload
```

Visit `http://localhost:4000/AquaINFRA_Training_Handbooks/` to preview.

### Step 7: Submit Pull Request

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add [Your Training Name] training material"
   git push origin main
   ```

2. Go to GitHub and create a Pull Request
3. Fill in the PR template with:
   - Link to source YouTube video
   - Brief description of content
   - Checklist confirmation

## 📁 File Structure

```
docs/
├── _data/
│   └── use_cases.yml          # Register your training here
├── trainings/
│   ├── your-training-name/
│   │   ├── index.md           # Landing page
│   │   ├── 01_chapter.md      # Chapter files
│   │   ├── 02_chapter.md
│   │   └── assets/            # Images/diagrams (optional)
│   │       └── images/
└── assets/
    └── images/                # Shared images
```

## ✅ Checklist Before Submitting

- [ ] Training is based on official AquaINFRA YouTube content
- [ ] All chapter files have proper front matter (`layout`, `title`)
- [ ] Navigation is registered in `use_cases.yml`
- [ ] Links between chapters work correctly
- [ ] Tested locally with `jekyll serve`
- [ ] Images (if any) are optimized and < 500KB each
- [ ] No broken links or missing pages

## 🎨 Style Guidelines

### Markdown Formatting
- Use `##` for main sections, `###` for subsections
- Use **bold** for emphasis, `code` for technical terms
- Add horizontal rules (`---`) between major sections

### Code Blocks
Always specify the language:
\`\`\`python
# Python code
\`\`\`

### Mermaid Diagrams
For workflows and diagrams:
\`\`\`mermaid
graph LR
    A[Start] --> B[Process]
    B --> C[End]
\`\`\`

## 🐛 Troubleshooting

**Jekyll won't start?**
- Run `bundle install` first
- Check Ruby version: `ruby --version` (need 2.7+)

**Changes not showing?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check browser console for errors

**Navigation not updating?**
- Verify `use_cases.yml` syntax (YAML is indent-sensitive!)
- Restart Jekyll server

## 📞 Getting Help

- Open an issue on GitHub
- Check existing training examples in `docs/trainings/gulf-of-riga/`
- Review the [Architecture Documentation](ARCHITECTURE.md)

## 📜 License

By contributing, you agree that your contributions will be licensed under the same license as this project.
