---
layout: default
title: AIP
---
# AquaINFRA Interaction Platform (AIP)

The **AquaINFRA Interaction Platform (AIP)** provide a seamless pathway from finding aquatic data to analyzing it in the **Galaxy Virtual Research Environment**.

---

## 📽️ Video Tutorial: Getting Started

Learn how to search for data on the AIP, subset it via DDAS, and import it directly into your analysis history in Galaxy.

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=YLOmD-7KBFClWB1s&start=262&end=572" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## 🛠️ Step-by-Step Guide

### 1. Preparation

Before starting, ensure you are **logged into the Galaxy platform**. The integration requires an active session to automatically target your analysis history.

### 2. Finding Data on the AIP

Visit the **[AquaINFRA Interaction Platform](https://aquainfra.dev.52north.org/)** and use the search interface:

- **Keywords**: Use specific terms like "Secchi" or "water quality".
- **Providers**: Filter results to show only **AquaINFRA datasets** for the most direct integration path.

### 3. Importing Data to Galaxy

Depending on the data source, there are two primary paths:

> [!TIP]
> **The "Best Case" Scenario (OGC API)**
> For datasets sitting on the DDAS as an **OGC API Feature service**, simply click the **"Import to Galaxy"** button on the landing page. You can subset the data by drawing a polygon or limiting the number of data points before regenerating the import URL.

> [!NOTE]
> **The Manual Detour**
> If a direct import button is missing, visit the metadata source to find the download link. Copy the data address (ensure it ends in an extension like `.zip`) and paste it into the **"Insert URL"** field in the AIP interface to bridge it to Galaxy.

### 4. Running OGC API Processes

Once your data URLs are in Galaxy (appearing as `.txt` files in your history), use the **AquaINFRA OGC API processes** tool:

1. **Select Process**: Choose from available operations like `points_at_polygon` or `period_grouping`.
2. **Configure Parameters**: Map your imported URLs (Points, Regions, etc.) to the tool's input fields.
3. **Execute**: The processing happens on the backend servers to reduce heavy data transfer, returning a URL to your final results.

---

<!-- Navigation Buttons -->

<div class="sequence-navigation">
    <a href="{{ relative_root }}02_aquainfra" class="btn-seq btn-seq--prev">← Previous: Introduction AquaINFRA</a>
    <a href="{{ relative_root }}04_aquainfra_vre" class="btn-seq btn-seq--next">Next Step: VRE →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
