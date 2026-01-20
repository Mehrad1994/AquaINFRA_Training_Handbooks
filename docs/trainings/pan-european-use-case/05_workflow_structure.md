---
layout: default
title: Workflow Structure
parent: Pan-European Biodiversity Use Case
---

# Workflow Structure

<div class="btn-group">
  <a href="04_running_workflow.md" class="btn btn-default">Previous Chapter</a>
  <a href="06_results_conclusion.md" class="btn btn-blue">Next Chapter</a>
</div>

To review workflow steps in Galaxy, click on **Workflow** > **Edit**. The structure follows the **Specleaner** approach.

## Detailed Steps

### Step 1: Input Data
-   Highlights the **Area of Interest**.
-   Accepts formats like **GeoJSON** and **Shapefiles**.

### Step 2: Retrieve Biodiversity Data
-   Retrieves data from providers like **VertNet** and **iNaturalist**.
-   You can specify **Species Names** to download.
-   Set data provider and maximum number of occurrence points.

### Steps 3 & 4: Offline/Local Data
-   Relate to locally stored datasets (uploaded to Galaxy).
-   Can be skipped if relying only on online data.
-   Additional datasets on Zenodo are associated with these steps.

### Step 5: Merge Datasets
-   Merges online and offline sources.
-   **Harmonizes column names** (Species, Latitude, Longitude, Date, Country, etc.).
-   You can manually select correct columns for each variable.

### Step 6: Harmonize Species Names
-   Connects to **FishBase** to harmonize synonyms and accepted scientific names for fish species.
-   *Note*: Steps 1-6 focus on data cleaning and preparation.

### Step 7: Extract Environmental Predictors
-   Extracts predictors from **Raster files** using species coordinates.
-   Currently, **WorldClim** is available for testing.

### Step 8: Flag Outliers
-   Flags outliers based on selected detection methods.
-   **Variable of Interest**: Choose environmental variable for univariate methods.
-   **Multivariate Columns**: Select columns for multivariate methods (or leave empty for all).
-   **Detection Methods**: Specify which univariate and multivariate methods to apply (e.g., Z-score, Isolation Forest).
-   Users can choose to remove flagged points automatically or classify them for expert review.
