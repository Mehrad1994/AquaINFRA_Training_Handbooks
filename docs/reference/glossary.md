---
layout: default
title: Glossary
---

# Glossary

Definitions of the terms you'll meet across the AquaINFRA handbook and training videos. Click any anchor to deep-link a term (e.g. `…/reference/glossary#d2kp`).

<div class="callout">
    <strong>📘 How to use this page</strong>
    Skim before your first training, then return whenever a term in a chapter feels unfamiliar. Where a term has its own dedicated handbook chapter, the entry links to it.
</div>

---

## A

### AIP - AquaINFRA Interaction Platform {#aip}
The web portal at [aquainfra.dev.52north.org](https://aquainfra.dev.52north.org/) where you discover datasets, tools, workflows, and Data-to-Knowledge Packages across multiple data providers (Zenodo, DDAS, OGC services, INSPIRE, Copernicus Marine, HELCOM, EMODnet, …). It's the single entry point for finding *what* exists. See [AIP chapter](../03_aip).

### Aqua Galaxy {#aqua-galaxy}
The AquaINFRA-tailored Galaxy server at [aqua.usegalaxy.eu](https://aqua.usegalaxy.eu/). It *is* the VRE in practical terms - when this handbook says "open the VRE," it means "open Aqua Galaxy."

---

## D

### D2KP - Data-to-Knowledge Package {#d2kp}
A bundle that ties together every resource needed to reproduce a specific analysis end-to-end: the **dataset(s)**, the **workflow**, the **source code**, a **step-by-step guide**, and a **virtual lab** for live experimentation. Published with a DOI on Zenodo so it's citable. See [D2KP chapter](../05_data_to_knowledge).

### DDAS - Data Discovery and Access Service {#ddas}
The backend service that powers AIP search and exposes datasets through standard APIs (notably OGC API Features). When you click "Import to Galaxy" on an AIP dataset page, DDAS is what wires the data through.

### DGA - Data, Galaxy, Analysis workflow {#dga}
Short-hand used in the Gulf of Riga training for the trend-detection workflow that combines a point dataset (Secchi depth) with assessment-unit polygons (HELCOM subbasins) and runs spatial aggregation, temporal aggregation, interpolation, and Mann-Kendall trend testing.

### DOI - Digital Object Identifier {#doi}
A persistent, citable identifier. AquaINFRA D2KPs are released on Zenodo with DOIs so they can be referenced in papers without link-rot.

---

## E

### EOSC - European Open Science Cloud {#eosc}
The European Commission's federated environment for storing, analysing, and sharing research data across borders and disciplines. AquaINFRA plugs into EOSC so aquatic resources are discoverable alongside other domains. See [EOSC chapter](../01_eosc).

### EOSC EU Node {#eosc-eu-node}
The operational entry point of EOSC at [open-science-cloud.ec.europa.eu](https://open-science-cloud.ec.europa.eu/) - where you log in (typically with your institutional account via EduGAIN or EU Login), claim cloud credits, and launch tools.

---

## F

### FAIR {#fair}
**F**indable, **A**ccessible, **I**nteroperable, **R**eusable - the four principles that govern how AquaINFRA datasets and services are published. Each principle has practical implications: standard metadata (Findable), open endpoints (Accessible), shared vocabularies (Interoperable), clear licences (Reusable).

---

## G

### Galaxy {#galaxy}
An open-source web-based workflow engine that chains analysis "tools" into reproducible pipelines, with every input, parameter, and output tracked in a per-user "history." Aqua Galaxy is the AquaINFRA-flavoured deployment at `aqua.usegalaxy.eu`.

### `.ga` file {#ga-file}
A Galaxy workflow file (JSON under the hood). You can export a workflow you built into a `.ga` file and import it into any Galaxy instance to recreate it exactly.

---

## H

### HELCOM {#helcom}
The Baltic Marine Environment Protection Commission. Provides the assessment-unit polygons used in the Gulf of Riga case study.

### History (Galaxy) {#history}
The right-hand panel in Galaxy that lists every dataset and output for your current session, colour-coded by status (grey = queued, orange = running, green = complete, red = error).

---

## O

### OGC API Features {#ogc-api-features}
An Open Geospatial Consortium standard for exposing geographic data via HTTP. AIP uses it to let you spatially subset a dataset (bounding box, attribute filters) before importing only the slice you need into Galaxy - saving bandwidth and analysis time.

---

## V

### VRE - Virtual Research Environment {#vre}
AquaINFRA's analytical execution environment, implemented as **Aqua Galaxy** (`aqua.usegalaxy.eu`). When the docs say "VRE," they mean the Galaxy server you'll run workflows in. See [VRE chapter](../04_aquainfra_vre).

---

## W

### Workflow {#workflow}
An ordered pipeline of analysis steps (tools) connected by data flows. In Galaxy, workflows are reusable: build once, run with new inputs whenever needed; share as a `.ga` file or via a D2KP.

---

## Z

### Zenodo {#zenodo}
An open research-output repository run by CERN. AquaINFRA D2KPs are published there with DOIs. Browse them via the AIP search filter "Data to Knowledge Package."

---

<div class="sequence-navigation">
    <a href="{{ relative_root }}index" class="btn-seq btn-seq--prev">← Home</a>
    <a href="{{ relative_root }}reference/prerequisites" class="btn-seq btn-seq--next">Next: Prerequisites →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
