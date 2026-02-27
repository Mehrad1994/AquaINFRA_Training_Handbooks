---
layout: default
title: Data to Knowledge Package
---
# Data to Knowledge Package (D2KP)

Creating readily sharable and reusable workflows is a key ambition of the **AquaINFRA project**. The **Data-to-Knowledge Package (D2KP)** is the bridge that makes this possible, linking raw aquatic data with the source code and scientific workflows needed for reproducible research.

---

## 📽️ Video Tutorial: The D2KP Concept

Explore how D2KPs organize resources and provide multiple entry points for researchers, from high-level workflow execution to low-level code exploration.

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=YLOmD-7KBFClWB1s&start=262&end=572" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## 🏗️ The Anatomy of a D2KP

A D2KP is more than just a file; it is a **collection of interconnected resources** categorized into two main layers:

### 1. The Virtual Research Environment (VRE)
The top tier of the package provides three ways to interact with the analysis:
- **Galaxy Workflow**: Execute the pre-configured workflow directly in the [Galaxy platform](https://aqua.usegalaxy.eu/).
- **Web API (PyGEOAPI)**: Interact directly with the underlying **OGC API Processes** for integration into your own custom scripts or digital twin infrastructures.
- **Virtual Lab (R Studio)**: Launch a containerized R Studio environment via **MyBinder**, pre-installed with all necessary packages for deep-dive code exploration.

### 2. The Reproducible Basis
The foundation of every package includes:
- **Source Code**: The raw analytical scripts (e.g., R or Python) stored in repositories like GitHub.
- **Raw Data**: Direct links to the datasets used, ensuring provenance and transparency.

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
