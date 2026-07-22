---
layout: default
title: "Workflow"
---
# Workflow

<p class="chapter-meta">Chapter 3 of 3</p>

<div class="chapter-intro">
    <p>A step-by-step breakdown of how satellite and in-situ data are integrated to classify Optical Water Types.</p>
</div>

<div class="action-bar">
    <a href="https://aqua.usegalaxy.eu/" target="_blank" class="btn-launch btn-launch--galaxy">
       🚀 Open HEREON Workflow in Aqua Galaxy
    </a>
    <a href="https://aquainfra.dev.52north.org/" target="_blank" class="btn-launch btn-launch--d2kp">
       🔍 Search HEREON D2KP on AIP
    </a>
</div>

```mermaid
graph TD
    A["1. Data Ingestion<br>(Sentinel-3 OLCI & FerryBox In-situ)"] --> B["2. Optical Classification<br>(Calculate OWT Probabilities)"]
    B --> C["3. Match-Up Validation<br>(Spatio-Temporal Alignment)"]
    C --> D["4. Raster & Map Generation<br>(Dominant OWT Maps & POC Estimates)"]

    style A fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff
    style B fill:#0f172a,stroke:#a3e635,stroke-width:2px,color:#fff
    style C fill:#0f172a,stroke:#fcd34d,stroke-width:2px,color:#fff
    style D fill:#0f172a,stroke:#22c55e,stroke-width:2px,color:#fff
```

### Execution Options & Tool Tabs

<div class="tool-tabs-container">
    <div class="tool-tabs">
        <button class="tab-btn active" data-tab="galaxy">Aqua Galaxy (No-Code GUI)</button>
        <button class="tab-btn" data-tab="r-code">R Analysis Script</button>
        <button class="tab-btn" data-tab="python-code">Python EO API</button>
    </div>
    <div class="tab-content active" data-tab-content="galaxy">
        <p>Run the <strong>Optical Water Type Classification Tool</strong> in Aqua Galaxy. Select satellite NetCDF/GeoTIFF reflectance input files and set the classification confidence threshold.</p>
    </div>
    <div class="tab-content" data-tab-content="r-code">
        <pre><code class="language-r"># Classify Optical Water Types from remote sensing reflectance
library(raster)

reflectance_data <- stack("sentinel3_olci_rrs.nc")
owt_probabilities <- calc(reflectance_data, fun = classify_owt)
plot(owt_probabilities)</code></pre>
    </div>
    <div class="tab-content" data-tab-content="python-code">
        <pre><code class="language-python">import xarray as xr

# Load EO satellite reflectance data & execute OWT classification
ds = xr.open_dataset("sentinel3_olci_rrs.nc")
owt_classes = ds["Rrs"].groupby("time").map(classify_optical_water_type)
print(owt_classes)</code></pre>
    </div>
</div>

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

<div class="use-case-card" style="margin-bottom: 2rem;">
    <figure style="text-align: center; margin: 0;">
      <img src="../../assets/images/hereon/image31.png" alt="Merging of satellite data with in-situ measurements" >
      <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">Figure 2: Merging of satellite data with in-situ measurements of remote-sensing reflectance.</figcaption>
    </figure>
</div>

<div class="use-case-card" style="margin-bottom: 2rem;">
    <figure style="text-align: center; margin: 0;">
      <img src="../../assets/images/hereon/image32.png" alt="Workflow for Optical Water Type classification in Galaxy" >
      <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">Figure 3: Workflow for Optical Water Type classification from diverse sources in the Galaxy environment.</figcaption>
    </figure>
</div>

<details class="knowledge-check">
    <summary>Check Your Understanding: Optical Water Type Validation</summary>
    <div class="answer-content">
        <p><strong>Question:</strong> Why is spatio-temporal match-up analysis essential when combining Sentinel-3 satellite imagery with FerryBox in-situ measurements?</p>
        <p><strong>Answer:</strong> Coastal water optical properties change rapidly due to tides, wind mixing, and algal blooms. Aligning satellite pixels with ground-truth FerryBox readings in exact space and time ensures that atmospheric correction errors and optical classification uncertainties are accurately calibrated.</p>
    </div>
</details>

---

<div class="sequence-navigation">
    <a href="./02_research_questions" class="btn-seq btn-seq--prev">&larr; Previous: Research Questions</a>
    <a href="../../06_use_cases" class="btn-seq btn-seq--next">Back to Use Case Library &rarr;</a>
</div>
<div class="wave-decoration"></div>
