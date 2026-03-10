---
layout: default
title: AIP
---
# AquaINFRA Interaction Platform (AIP)

EOSC provides the raw computational power, the **AquaINFRA Interaction Platform (AIP)** is the specialized map that helps you find the exact aquatic data you need.

Instead of scouring different national databases, the AIP allows you to seamlessly search Earth observations and European hydrography in one place, and then pipe that data directly into a high-performance analysis environment.

---

## 📽️ Video Tutorial: Getting Started

This walkthrough shows you exactly how to navigate the AIP interface. It covers searching for relevant datasets, subsetting them graphically, and importing them straight into your Galaxy history.

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=YLOmD-7KBFClWB1s&start=262&end=572" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## 🛠️ The Search-to-Analysis Workflow

The core strength of the **[AquaINFRA Interaction Platform](https://aquainfra.dev.52north.org/)** is that you never have to download massive environmental datasets to your own laptop.

### 1. The Seamless Route (OGC API)

> [!TIP]
> **Before you start**
> Make sure you are already logged into the Galaxy platform in another tab. This allows the AIP to find your active session.

When you find a dataset on the AIP hosted as an **OGC API Feature service**, the workflow is incredibly smooth:

1. Visually subset the data on the map (e.g., drawing a polygon around a specific coastline).
2. Click **"Import to Galaxy"**.
3. In Galaxy, use the dedicated **AquaINFRA OGC API processes** tool to map that data URL to powerful backend operations like `points_at_polygon`.

Because the data is processed on the backend servers, you avoid heavy data transfers and get straight to analyzing your results.

### 2. The Manual Detour

Not all data partners support direct API ingestion yet. If you find a dataset you want but the "Import to Galaxy" button is missing:

> [!NOTE]
> **Bridging the Gap**
>
> 1. Visit the dataset's external metadata page and copy the direct download link (e.g., ending in `.zip`).
> 2. Look for the **"Insert URL"** option on the AIP interface. Pasting the link here will manually bridge the external file into your Galaxy environment.

---

<!-- Navigation Buttons -->

<div class="sequence-navigation">
    <a href="{{ relative_root }}02_aquainfra" class="btn-seq btn-seq--prev">← Previous: Introduction AquaINFRA</a>
    <a href="{{ relative_root }}04_aquainfra_vre" class="btn-seq btn-seq--next">Next Step: VRE →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
