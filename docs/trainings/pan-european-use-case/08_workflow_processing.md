---
layout: default
title: 8. Workflow Structure (Part 2)
parent: Pan-European Biodiversity Use Case
nav_order: 8
---

# 8. Workflow Structure (Part 2)

The second phase of the workflow (Steps 5-8) handles the cleaning, harmonization, and the core outlier detection logic powered by Specleaner.

## Phase 2: Processing & Detection

### Step 5: Merge & Harmonize Columns
*   **Goal**: Combine online and offline data into a unified structure.
*   **Action**: Maps divergent column names to a standard set:
    *   `Species`
    *   `Decimal Latitude`
    *   `Decimal Longitude`
    *   `Date`
    *   `Country`

### Step 6: Harmonize Species Names
*   **Goal**: Ensure taxonomic consistency.
*   **Backbone**: Connects to **FishBase**.
*   **Action**: Resolves scientific synonyms and ensures all records use the currently accepted научное название.

### Step 7: Extract Environmental Predictors
*   **Goal**: Add environmental context to each occurrence point.
*   **Backbone**: Uses **WorldClim** raster files.
*   **Action**: For every coordinate pairs, it extracts environmental values (e.g., Mean Annual Temperature) from the raster, creating the "Reference Dataset."

### Step 8: Flag Outliers (The Core)
*   **Goal**: Apply Specleaner algorithms.
*   **Parameters**:
    *   **Variable of Interest**: Select which environmental variable to test (e.g., Temp).
    *   **Detection Methods**: Choose from the univariate and multivariate methods discussed in [Chapter 4](04_specleaner_package.html).
*   **Result**: Records are flagged by their outlier strength (Poor, Fair, Strong, Perfect).

<div class="callout">
    <strong>📹 Video Reference</strong>
    <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=1000s" target="_blank">16:40</a> Review the Workflow Structure Part 2
</div>

<div class="btn-group">
    <a href="07_workflow_acquisition.html" class="btn btn--outline">&larr; Previous Chapter</a>
    <a href="09_reviewing_results.html" class="btn">Next Chapter &rarr;</a>
</div>
