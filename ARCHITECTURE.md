# 🏗️ AquaINFRA Handbook Architecture

The AquaINFRA Training Handbook is a static, portable, and data-driven educational platform designed for the European Open Science Cloud (EOSC) community.

## 🛠️ Design Philosophy
1.  **Zero-Configuration**: The site is 100% portable. It uses dynamic pathing to work on any domain or repository path without manual adjustments.
2.  **Sequential Learning**: The UI is optimized for a "Guided Path," ensuring researchers follow a logical progression from theory to practice.
3.  **Modular Branding**: A decoupled CSS system ensures a premium, responsive look across all devices without the overhead of heavy frameworks.

## 📁 Technical Core
- **Engine**: Jekyll (Static Site Generator) using Liquid Templating.
- **Source**: All site source code and content resides in the `/docs` directory.
- **Navigation**: Sidebar and library menus are dynamically generated from centralized YAML data in `docs/_data/`.
- **Diagrams**: Native support for Mermaid.js for architectural and workflow visualizations.
