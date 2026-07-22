---
layout: default
title: "Analytical Workflow & D2KP Execution"
parent: "Elbe Estuary"
nav_order: 3
---

# Analytical Workflow & D2KP Execution

<p class="chapter-meta">Chapter 3 of 3</p>

<div class="chapter-intro">
    <p>This chapter presents the end-to-end analytical workflow for the Elbe Estuary use case. It details how river discharge, salinity, and water quality datasets are ingested, processed through hydrodynamic transport models, and published as a FAIR Data-to-Knowledge Package (D2KP).</p>
</div>

---

## 4-Stage Processing Pipeline

```mermaid
graph TD
    A["1. Data Ingestion<br>(In-situ Buoys, River Gauges, Satellite Rrs)"] --> B["2. Hydrodynamic Preprocessing<br>(SCHISM Mesh / Salinity Gradients)"]
    B --> C["3. Biogeochemical Simulation<br>(Oxygen Respiration & Nutrient Flux)"]
    C --> D["4. FAIR D2KP Package Output<br>(Zenodo DOI 19919514 / pygeoapi Endpoint)"]
    
    style A fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff
    style B fill:#0f172a,stroke:#eab308,stroke-width:2px,color:#fff
    style C fill:#0f172a,stroke:#ef4444,stroke-width:2px,color:#fff
    style D fill:#0f172a,stroke:#22c55e,stroke-width:2px,color:#fff
```

---

## Execution Options & Implementation

Select your preferred environment below to explore or execute the Elbe Estuary workflow:

<div class="tool-tabs-container">
    <div class="tool-tabs">
        <button class="tab-btn active" data-tab="galaxy">Aqua Galaxy (No-Code GUI)</button>
        <button class="tab-btn" data-tab="r-code">R Package Scripts</button>
        <button class="tab-btn" data-tab="python-code">Python API (pygeoapi)</button>
    </div>
    <div class="tab-content active" data-tab-content="galaxy">
        <p>Import the pre-configured <strong>Elbe Estuary River-to-Sea Workflow</strong> directly into your Aqua Galaxy history.</p>
        <ol>
            <li>Log in to your account at <a href="https://aqua.usegalaxy.eu/" target="_blank">aqua.usegalaxy.eu</a>.</li>
            <li>Go to <strong>Shared Data ➔ Workflows</strong> and search for <code>Elbe Estuary D2KP</code>.</li>
            <li>Select your discharge input dataset (CSV/NetCDF) and click <strong>Run Workflow</strong>.</li>
        </ol>
    </div>
    <div class="tab-content" data-tab-content="r-code">
        <pre><code class="language-r"># Load estuarine water quality & salinity analysis tools
library(tidyverse)

# Fetch Elbe Estuary monitoring dataset from D2KP endpoint
elbe_url <- "https://aquainfra.dev.52north.org/result/zenodo:19919514/data/elbe_monitoring.csv"
elbe_data <- read_csv(elbe_url)

# Calculate oxygen deficit & salinity gradient statistics
elbe_summary <- elbe_data %>%
  group_by(station_km) %>%
  summarise(
    mean_salinity = mean(salinity_psu, na_rm = TRUE),
    min_oxygen = min(dissolved_oxygen_mgL, na_rm = TRUE)
  )

print(elbe_summary)</code></pre>
    </div>
    <div class="tab-content" data-tab-content="python-code">
        <pre><code class="language-python">import requests

# Execute Elbe Estuary transport model process via pygeoapi Web API
api_endpoint = "https://aquainfra.dev.52north.org/pygeoapi/processes/elbe-transport-sim/execution"
payload = {
    "inputs": {
        "discharge_m3s": 650.0,
        "temperature_celsius": 21.5,
        "d2kp_doi": "10.5281/zenodo.19919514"
    }
}

response = requests.post(api_endpoint, json=payload)
result = response.json()
print("Execution Status:", result.get("status"))</code></pre>
    </div>
</div>

---

<details class="knowledge-check">
    <summary>Check Your Understanding: FAIR D2KP Reproducibility</summary>
    <div class="answer-content">
        <p><strong>Question:</strong> How does publishing the Elbe Estuary workflow as a Data-to-Knowledge Package (D2KP) ensure reproducible science?</p>
        <p><strong>Answer:</strong> A D2KP bundles all foundational elements into a single citable package on Zenodo (DOI: 10.5281/zenodo.19919514): raw input datasets, Galaxy workflow pipelines (<code>.ga</code> files), executable R/Python source scripts, container environment definitions (Conda/Binder), and automated OGC Web API endpoints (<code>pygeoapi</code>). Any researcher can re-run or inspect the exact pipeline without software configuration hurdles.</p>
    </div>
</details>

---

<div class="sequence-navigation">
    <a href="./02_research_questions" class="btn-seq btn-seq--prev">← Previous: Research Questions</a>
    <a href="../../06_use_cases" class="btn-seq btn-seq--next">Back to Use Case Library →</a>
</div>

<div class="wave-decoration"></div>
