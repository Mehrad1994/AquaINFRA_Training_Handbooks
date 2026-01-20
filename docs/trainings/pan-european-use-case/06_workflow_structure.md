---
layout: default
title: Workflow Structure
parent: Pan-European Biodiversity Use Case
---

# Workflow Structure

To understand what happens "under the hood" of the Galaxy workflow, you can view the structure by clicking **Workflow > Edit**. This reveals the connection between the Specleaner package and the Galaxy steps.

## Detailed Steps

### Step 1: Input Data
*   Highlights the **Area of Interest**.
*   Accepts formats like **GeoJSON** and **Shapefiles**.

### Step 2: Retrieve Biodiversity Data
*   Retrieves online data from providers like **VertNet** and **iNaturalist**.
*   Allows you to specify **Species Names** and maximum occurrence points.

### Steps 3 & 4: Offline/Local Data
*   Relate to locally stored datasets uploaded to Galaxy.
*   These can be used in combination with or instead of online data.

### Step 5: Merge Datasets
*   Merges online and offline sources.
*   **Harmonizes column names** (Species, Latitude, Longitude, Date, Country, etc.) to ensure consistency.

### Step 6: Harmonize Species Names
*   Connects to **FishBase** to harmonize synonyms and ensure correct scientific names.
*   *Note*: Steps 1-6 focus on data cleaning and preparation.

### Step 7: Extract Environmental Predictors
*   Extracts predictors from **Raster files** (e.g., WorldClim) based on species coordinates.

### Step 8: Flag Outliers
*   This is the core **Specleaner** step.
*   **Variable of Interest**: Choose environmental variable for univariate methods.
*   **Detection Methods**: Specify which univariate and multivariate methods to apply (e.g., Z-score, Isolation Forest).
*   Flagged points can be removed or classified for expert review.

<div class="callout">
    <strong>📹 Video Reference</strong>
    <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=941s" target="_blank">15:41</a> Review the Workflow Structure and Steps
</div>

<div class="btn-group">
    <a href="05_running_workflow.html" class="btn btn--outline">&larr; Previous Chapter</a>
    <a href="07_results_conclusion.html" class="btn">Next Chapter &rarr;</a>
</div>
