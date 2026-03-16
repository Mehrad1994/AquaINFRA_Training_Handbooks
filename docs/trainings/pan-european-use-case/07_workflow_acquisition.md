---
layout: default
title: Workflow Structure (Part 1)
parent: Pan-European Biodiversity Use Case
nav_order: 7
---

# Workflow Structure (Part 1)
> [!NOTE] 📹 **Video Reference**
> [15:41](https://www.youtube.com/watch?v=v_0zyUVY--E&t=941s) Review the Workflow Structure Part 1

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=941&end=1000" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



The workflow consists of **8 interconnected steps** categorized into two phases. The first phase (Steps 1-4) focuses on defining the study area and acquiring biodiversity data.

## Phase 1: Data Acquisition

| Step | Goal | Action |
| :--- | :--- | :--- |
| **Step 1: Input Data (Area of Interest)** | Define the geographical boundaries of the study. | Highlights the area on the map where biodiversity records will be analysed. |
| **Step 2: Retrieve Biodiversity Data** | Fetch global occurrence records directly into Galaxy. | Connects to VertNet, GBIF, and iNaturalist. Retrieves up to a maximum number of points for defined target species. |
| **Steps 3 & 4: Offline/Local Data** | Incorporate the own locally stored datasets. | Handles tabular files uploaded directly to Galaxy. Used to complement online data or as the sole source. |

*Note: If the user don't have local data, Steps 3 & 4 can be skipped in a custom run.*

<div class="sequence-navigation">
    <a href="./06_galaxy_workflow_setup" class="btn-seq btn-seq--prev">← Previous: Galaxy Setup</a>
    <a href="./08_workflow_processing" class="btn-seq btn-seq--next">Next Chapter: Workflow Pt. 2 →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>

