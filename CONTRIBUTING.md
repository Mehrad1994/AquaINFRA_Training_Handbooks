# ✍️ Contributing to AquaINFRA Handbooks

We welcome technical trainings, use cases, and documentation improvements. Our pipeline ensures that all content maintains a sequential and uniform learning experience.

## 🚿 The Contribution Pipeline
1.  **Duplicate**: Copy the `_TEMPLATE` directory in `docs/trainings/` to maintain the required structural consistency.
2.  **Author**: Write your training steps in numbered Markdown files. Every page must link to the next/previous step using the standard sequential navigation.
3.  **Register**: Add your training metadata (ZENODO/D2KP link, GitHub, YouTube) to `docs/_data/use_cases.yml`.
4.  **Review**: Ensure content follows the **Engaging Academic** tone—academic in substance but accessible in delivery.

## 🛠️ Technical Requirements
To test your changes locally, you must have **Ruby** and **Jekyll** installed.
- Navigate to the `docs/` folder.
- Execute: `bundle exec jekyll serve --livereload`.

---
*For detailed styling classes and callout syntax, refer to the [Project Rules](.gemini/rules/).*
