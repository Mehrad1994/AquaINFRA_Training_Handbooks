---
layout: default
title: "Workflow"
---
# Workflow

<p class="chapter-meta">Chapter 3 of 3</p>

<div class="chapter-intro">
    <p>A sequential breakdown of how river fluxes and FerryBox marine data are integrated for extreme event analysis.</p>
</div>

<div class="action-bar">
    <a href="https://aqua.usegalaxy.eu/" target="_blank" class="btn-launch btn-launch--galaxy">
       🚀 Open Oslofjord Workflow in Aqua Galaxy
    </a>
    <a href="https://aquainfra.dev.52north.org/" target="_blank" class="btn-launch btn-launch--d2kp">
       🔍 Search Oslofjord D2KP on AIP
    </a>
</div>

```mermaid
graph TD
    A["1. Ingest River Gauges & FerryBox Data<br>(Glomma River Discharge & Kiel-Oslo Transects)"] --> B["2. Calculate Mass Fluxes<br>(Interpolate Continuous Chemical Loads)"]
    B --> C["3. Isolate Storm Event Windows<br>(Threshold Filter for Extreme Run-off)"]
    C --> D["4. Spatio-Temporal Plume Dispersion Maps<br>(Compare Baseline vs Post-Storm Conditions)"]

    style A fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff
    style B fill:#0f172a,stroke:#eab308,stroke-width:2px,color:#fff
    style C fill:#0f172a,stroke:#ef4444,stroke-width:2px,color:#fff
    style D fill:#0f172a,stroke:#22c55e,stroke-width:2px,color:#fff
```

### Execution Options & Tool Tabs

<div class="tool-tabs-container">
    <div class="tool-tabs">
        <button class="tab-btn active" data-tab="galaxy">Aqua Galaxy (No-Code GUI)</button>
        <button class="tab-btn" data-tab="r-code">R Trend Script</button>
        <button class="tab-btn" data-tab="python-code">Python API</button>
    </div>
    <div class="tab-content active" data-tab-content="galaxy">
        <p>Run the <strong>Oslofjord River-Marine Trend Analysis Tool</strong> in Aqua Galaxy. Input Glomma River discharge time series and FerryBox sensor transects to calculate storm plume dispersion.</p>
    </div>
    <div class="tab-content" data-tab-content="r-code">
        <pre><code class="language-r"># Calculate Glomma river flux and FerryBox marine chemistry trends
library(tidyverse)

river_discharge <- read_csv("glomma_river_flux.csv")
ferrybox_data <- read_csv("oslofjord_ferrybox.csv")

# Filter storm event window
storm_window <- filter(river_discharge, discharge_m3s > 1200)
matched_marine <- inner_join(ferrybox_data, storm_window, by = "date")</code></pre>
    </div>
    <div class="tab-content" data-tab-content="python-code">
        <pre><code class="language-python">import pandas as pd

# Match FerryBox transect sensor readings with river storm events
flux_df = pd.read_csv("glomma_river_flux.csv")
ferry_df = pd.read_csv("oslofjord_ferrybox.csv")

storm_events = flux_df[flux_df["discharge"] > 1200]
merged_ds = pd.merge_asof(ferry_df.sort_values("time"), storm_events.sort_values("time"), on="time")
print(merged_ds.head())</code></pre>
    </div>
</div>

### Processing Stages

1. **Calculate River Fluxes:**
   - Ingest daily water discharge data from the Glomma River alongside discrete water quality sampling data.
   - Interpolate missing data points and calculate the continuous mass flux (load) of specific materials (e.g., nitrogen, phosphorus, suspended particulate matter) entering the fjord.

2. **Isolate Extreme Events:**
   - Apply statistical thresholds to the river discharge data to identify and isolate specific time windows representing "extreme events" (e.g., storms, flash floods).

3. **FerryBox Marine Matching:**
   - Ingest FerryBox transect data from commercial vessels crossing the Oslofjord.
   - Filter the FerryBox dataset temporally to match the isolated "extreme event" windows (and their immediate aftermath).

4. **Spatial-Temporal Analysis:**
   - Perform trend analyses comparing baseline marine conditions to the post-storm marine conditions.
   - Generate spatial maps showing the extent of the freshwater plume and the dispersion of river-transported materials throughout the coastal zone.

<div class="use-case-card" style="margin-bottom: 2rem;">
    <figure style="text-align: center; margin: 0;">
      <img src="../../assets/images/oslofjord/image36.png" alt="Schematic workflow for calculating river fluxes" >
      <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">Figure 2: Schematic workflow for calculating river fluxes and Marine-river chemistry trends based on either river fluxes or marine data.</figcaption>
    </figure>
</div>

<div class="use-case-card" style="margin-bottom: 2rem;">
    <figure style="text-align: center; margin: 0;">
      <img src="../../assets/images/oslofjord/image37.png" alt="Global workflow of FerryBox and River sensors" >
      <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">Figure 3: Global workflow of FerryBox and River sensors in the Oslofjord for analyses of spatial and temporal variation before, during, and after a storm event.</figcaption>
    </figure>
</div>

<details class="knowledge-check">
    <summary>Check Your Understanding: FerryBox &amp; River Matching</summary>
    <div class="answer-content">
        <p><strong>Question:</strong> Why is FerryBox monitoring uniquely suited for evaluating land-sea interactions after extreme storm events in the Oslofjord?</p>
        <p><strong>Answer:</strong> FerryBox systems installed on commercial ferries travel fixed, high-frequency transects across the Oslofjord daily. This provides continuous spatial and temporal surface water quality data before, during, and after flash floods, capturing short-lived river plume dispersion that static monitoring stations might miss.</p>
    </div>
</details>

---

<div class="sequence-navigation">
    <a href="./02_research_questions" class="btn-seq btn-seq--prev">&larr; Previous: Research Questions</a>
    <a href="../../06_use_cases" class="btn-seq btn-seq--next">Back to Use Case Library &rarr;</a>
</div>
<div class="wave-decoration"></div>
