---
layout: default
title: Workflow Structure (Part 2)
parent: Pan-European Biodiversity Use Case
nav_order: 8
---

# Workflow Structure (Part 2)

The second phase of the workflow (Steps 5-8) handles the cleaning, harmonization, and the core outlier detection logic powered by Specleaner.

## Phase 2: Processing & Detection

| Step | Goal | Details |
| :--- | :--- | :--- |
| **Step 5: Merge & Harmonize Columns** | Combine online and offline data into a unified structure. | Maps divergent column names to a standard set: `Species`, `Decimal Latitude`, `Decimal Longitude`, `Date`, `Country`. |
| **Step 6: Harmonize Species Names** | Ensure taxonomic consistency. | Connects to FishBase. Resolves scientific synonyms and ensures all records use the currently accepted scientific name. |
| **Step 7: Extract Environmental Predictors** | Add environmental context to each occurrence point. | Uses WorldClim raster files. For every coordinate pair, it extracts environmental values (e.g., Mean Annual Temperature). |
| **Step 8: Flag Outliers (The Core)** | Apply Specleaner algorithms. | Tests a chosen variable (e.g., Temp) against selected univariate and multivariate methods. Flagged by outlier strength (Poor, Fair, Strong, Perfect). |

> [!NOTE] 📹 **Video Reference**
> [16:40](https://www.youtube.com/watch?v=v_0zyUVY--E&t=1000s) Review the Workflow Structure Part 2

<div class="sequence-navigation">
    <a href="./07_workflow_acquisition" class="btn-seq btn-seq--prev">← Previous: Workflow Pt. 1</a>
    <a href="./09_reviewing_results" class="btn-seq btn-seq--next">Next Chapter: Results →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>

