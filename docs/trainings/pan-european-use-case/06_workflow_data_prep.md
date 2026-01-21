---
layout: default
title: Workflow Part 1 - Data Acquisition
parent: Pan-European Biodiversity Use Case
---

# Workflow Part 1: Data Acquisition & Preparation

The Pan-European workflow is divided into two main phases. This first phase focuses on defining the study area and gathering the necessary biodiversity data from both online and offline sources.

## Phase 1 Steps

### Step 1: Input Data (Area of Interest)
*   **Goal**: Define the geographical scope of your study.
*   **Format**: The workflow accepts standard geospatial formats such as **GeoJSON** and **Shapefiles**.
*   **Function**: This input acts as a spatial filter, ensuring that subsequent data retrieval is limited to your specific region of interest.

### Step 2: Retrieve Biodiversity Data (Online)
*   **Goal**: Fetch occurrence records from major global biodiversity repositories.
*   **Sources**: Connects to providers like **VertNet**, **GBIF**, and **iNaturalist**.
*   **Parameters**:
    *   **Species Name**: Specify the scientific name of the target species.
    *   **Max Points**: Set a limit on the number of occurrence points to retrieve to manage processing time.

### Steps 3 & 4: Offline/Local Data
*   **Goal**: Incorporate your own private or locally stored datasets.
*   **Flexibility**: This is crucial for researchers who have unpublished data or data not yet available on GBIF.
*   **Mechanism**: These steps allow you to upload tabular data (e.g., CSV) directly into Galaxy and merge it with the online data streams.

<div class="callout">
    <strong>📹 Video Reference</strong>
    <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=941s" target="_blank">15:41</a> Review the Workflow Structure (Steps 1-4)
</div>

<div class="btn-group">
    <a href="05_running_workflow.html" class="btn btn--outline">&larr; Previous Chapter</a>
    <a href="07_workflow_processing.html" class="btn">Next Chapter &rarr;</a>
</div>
