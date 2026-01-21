---
layout: default
title: Workflow Part 2 - Processing & Detection
parent: Pan-European Biodiversity Use Case
---

# Workflow Part 2: Harmonization & Outlier Detection

Once the data is gathered, the second phase focuses on cleaning, harmonizing, and applying the Specleaner algorithms to detect outliers.

## Phase 2 Steps

### Step 5: Merge Datasets
*   **Goal**: Combine the online and offline datasets into a single, unified file.
*   **Harmonization**: This step is critical for standardizing column names. It maps varying headers (e.g., "lat", "latitude", "decimalLatitude") to a common standard:
    *   `Species`
    *   `Latitude`
    *   `Longitude`
    *   `Date`
    *   `Country`

### Step 6: Harmonize Species Names
*   **Goal**: Ensure taxonomic consistency.
*   **Tool**: Connects to **FishBase** (and potentially other taxonomic backbones).
*   **Function**: It resolves synonyms and updates species names to their currently accepted scientific names, preventing duplicate entries for the same species under different names.

### Step 7: Extract Environmental Predictors
*   **Goal**: Gather environmental context for each occurrence point.
*   **Process**:
    *   The workflow takes the coordinates of each species occurrence.
    *   It extracts values from uploaded **Raster files** (e.g., **WorldClim** temperature or precipitation layers) at those specific locations.
    *   This creates the "Reference Dataset" mentioned in the [Specleaner chapter](03_specleaner.html).

### Step 8: Flag Outliers (Specleaner)
*   **Goal**: Apply the outlier detection algorithms.
*   **Configuration**:
    *   **Variable of Interest**: Select the specific environmental variable (e.g., Mean Annual Temperature) to test against.
    *   **Detection Methods**: Choose which methods to apply. You can select a mix of univariate (e.g., **Z-score**) and multivariate (e.g., **Isolation Forest**) methods.
*   **Output**: The final output is a dataset with an added "Outlier Status" column, indicating the strength of the outlier evidence (Poor, Fair, Strong, Perfect).

<div class="callout">
    <strong>📹 Video Reference</strong>
    <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=1000s" target="_blank">16:40</a> Review the Processing Steps
</div>

<div class="btn-group">
    <a href="06_workflow_data_prep.html" class="btn btn--outline">&larr; Previous Chapter</a>
    <a href="08_results_conclusion.html" class="btn">Next Chapter &rarr;</a>
</div>
