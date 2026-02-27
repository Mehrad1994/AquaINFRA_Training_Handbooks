---
layout: default
title: 7. Workflow Structure (Part 1)
parent: Pan-European Biodiversity Use Case
nav_order: 7
---

# 7. Workflow Structure (Part 1)

The workflow consists of **8 interconnected steps** categorized into two phases. The first phase (Steps 1-4) focuses on defining the study area and acquiring biodiversity data.

## Phase 1: Data Acquisition

### Step 1: Input Data (Area of Interest)
*   **Goal**: Define the geographical boundaries of your study.
*   **Formats**: Supports **GeoJSON** and **Shapefiles**.
*   **Action**: Highlights the area on the map where biodiversity records will be analyzed.

### Step 2: Retrieve Biodiversity Data (Online)
*   **Goal**: Fetch global occurrence records directly into Galaxy.
*   **Providers**: Connects to **VertNet**, **GBIF**, and **iNaturalist**.
*   **Parameters**:
    *   **Species Names**: Specify the target species.
    *   **Max Points**: Set a limit on the number of points to retrieve (to manage processing time).

### Steps 3 & 4: Offline/Local Data
*   **Goal**: Incorporate your own locally stored datasets.
*   **Action**: These steps handle tabular files uploaded directly to Galaxy. They can be used to complement online data or as the sole source of records.
*   *Note*: If you don't have local data, these steps can be skipped in a custom run.

<div class="callout">
    <strong>📹 Video Reference</strong>
    <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=941s" target="_blank">15:41</a> Review the Workflow Structure Part 1
</div>

<div class="sequence-navigation">
    <a href="{{ relative_root }}trainings/pan-european-use-case/06_galaxy_workflow_setup" class="btn-seq btn-seq--prev">← Previous: Galaxy Setup</a>
    <a href="{{ relative_root }}trainings/pan-european-use-case/08_workflow_processing" class="btn-seq btn-seq--next">Next Chapter: Workflow Pt. 2 →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
