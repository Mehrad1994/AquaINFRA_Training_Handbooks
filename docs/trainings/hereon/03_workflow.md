---
layout: default
title: "Workflow"
---
# Workflow

<p class="chapter-meta">Chapter 3 of 3</p>

<div class="chapter-intro">
    <p>A step-by-step breakdown of how satellite and in-situ data are integrated to classify Optical Water Types.</p>
</div>

The HEREON workflow is implemented within the **Aqua Galaxy** platform, taking advantage of its computational scalability to handle heavy Earth Observation datasets. 

### Processing Stages

The analytical pipeline is broken down into four core steps:

1. **Data Ingestion:**
   - Retrieve satellite Level-2 products (remote-sensing reflectance) for the North Sea and Baltic Sea.
   - Import corresponding in-situ observation datasets containing physical water samples.

2. **Optical Classification:**
   - Apply specialized algorithms to the satellite reflectance data to calculate the probability of each pixel belonging to predefined **Optical Water Types (OWTs)**.
   - Mask out clouds, land, and invalid pixels.

3. **Match-Up Analysis (Validation):**
   - Spatially and temporally align ("match-up") the satellite-derived classifications with the in-situ measurements.
   - Evaluate the algorithm's performance, checking if the satellite accurately predicted the true optical state of the water at the exact location and time the physical sample was taken.

4. **Result Generation:**
   - Output statistical validation reports.
   - Generate raster maps displaying the dominant Optical Water Type across the entire sea region for selected time periods.

> [!NOTE]
> By executing this workflow in Aqua Galaxy, researchers can easily swap out different classification algorithms or atmospheric correction models and immediately benchmark their performance against the in-situ baseline.

---

<div class="sequence-navigation">
    <a href="./02_research_questions" class="btn-seq btn-seq--prev">&larr; Previous</a>
</div>
<div class="wave-decoration"></div>
