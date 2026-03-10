---
layout: default
title: Data to Knowledge Package
---
# Data to Knowledge Package (D2KP)

The end goal of the AquaINFRA project isn't just to do good science; it's to create science that can be verified and reused by anyone.

If a published paper is the menu, the **Data-to-Knowledge Package (D2KP)** is the recipe and the ingredients. It is the structured package that bundles your raw aquatic data, your analysis scripts, and your exact software environment together.

---

## 📽️ Video Tutorial: The D2KP Concept

Explore how D2KPs organize these resources and why they are essential for moving away from "black-box" environmental research.

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=YLOmD-7KBFClWB1s&start=262&end=572" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## 🏗️ Inside a D2KP

A D2KP is not just a zip file of PDFs. It is a fully functional toolkit designed to offer different interaction levels depending on what the next researcher needs:

- **The Data & Code**: Every D2KP contains direct links to the raw data sources and the foundational source code (like Python or R scripts), guaranteeing full transparency.
- **The Application (Galaxy)**: For those who want to use your methodology without writing code, the package includes a pre-configured workflow that can be executed directly in the [Galaxy interface](https://aqua.usegalaxy.eu/).
- **The Raw Engine (API)**: Developers can use the underlying **Web API (PyGEOAPI)** to directly hook your analytical processes into their own custom systems or Digital Twins.
- **The Developer Sandbox**: For those who want to deeply interrogate or edit your code, they can launch a containerized **Virtual Lab (R Studio via MyBinder)** linked directly to your package.

---

## 🔍 Finding and Using D2KPs

> [!TIP]
> **D2KP Publication**
> All official AquaINFRA workflows are released as **Data-to-Knowledge Packages (D2KP)** to provide citable records (DOIs). You can find these packages directly via the **[AIP Search Interface](https://aquainfra.dev.52north.org/)** by filtering for "Data to Knowledge Package".

> [!NOTE]
> **Interconnectivity**
> When you find a dataset on the AIP, look for the "Related Content" section on the right side. This will indicate if an associated D2KP exists, showing you exactly how that data was used in previous research.

---

<!-- Navigation Buttons -->

<div class="sequence-navigation">
    <a href="{{ relative_root }}04_aquainfra_vre" class="btn-seq btn-seq--prev">← Previous: VRE</a>
    <a href="{{ relative_root }}06_use_cases" class="btn-seq btn-seq--next">Next Step: Applied Use Case Training →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
