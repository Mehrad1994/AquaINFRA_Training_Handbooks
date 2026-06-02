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

## B

### Binder / MyBinder {#mybinder}
A service that turns a code repository into a live, executable environment in your browser. AquaINFRA D2KPs include a MyBinder link that launches a containerised RStudio with the analysis code pre-loaded, so you can edit and re-run it without installing anything locally.

---

## D

### D2KP - Data-to-Knowledge Package {#d2kp}
A bundle that ties together every resource needed to reproduce a specific analysis end-to-end: the **dataset(s)**, the **workflow**, the **source code**, a **step-by-step guide**, and a **virtual lab** for live experimentation. Published with a DOI on Zenodo so it's citable. See [D2KP chapter](../05_data_to_knowledge).

### DDAS - Data Discovery and Access Service {#ddas}
The backend service that powers AIP search and exposes datasets through standard APIs (notably OGC API Features). When you click "Import to Galaxy" on an AIP dataset page, DDAS is what wires the data through.

### DGA - Data, Galaxy, Analysis workflow {#dga}
Short-hand used in the Gulf of Riga training for the trend-detection workflow that combines a point dataset (Secchi depth) with assessment-unit polygons (HELCOM subbasins) and runs spatial aggregation, temporal aggregation, interpolation, and Mann-Kendall trend testing.

### Digital Twin of the Ocean - DTO {#dto}
A dynamic, data-driven digital replica of the ocean used to model and forecast marine conditions. AquaINFRA supplies high-quality aquatic data and models to DTO initiatives such as EDITO, Blue-Cloud, and ILIAD.

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

### FishBase {#fishbase}
A global database of fish species information. The Pan-European biodiversity workflow queries FishBase to resolve species synonyms to a single accepted scientific name, so the same species recorded under different names is not treated as several species.

---

## G

### Galaxy {#galaxy}
An open-source web-based workflow engine that chains analysis "tools" into reproducible pipelines, with every input, parameter, and output tracked in a per-user "history." Aqua Galaxy is the AquaINFRA-flavoured deployment at `aqua.usegalaxy.eu`.

### `.ga` file {#ga-file}
A Galaxy workflow file (JSON under the hood). You can export a workflow you built into a `.ga` file and import it into any Galaxy instance to recreate it exactly.

### GBIF - Global Biodiversity Information Facility {#gbif}
An international open-data network that aggregates species occurrence records worldwide. One of the online sources the Pan-European biodiversity workflow queries for a given area of interest.

---

## H

### HELCOM {#helcom}
The Baltic Marine Environment Protection Commission. Provides the assessment-unit polygons used in the Gulf of Riga case study.

### History (Galaxy) {#history}
The right-hand panel in Galaxy that lists every dataset and output for your current session, colour-coded by status (grey = queued, orange = running, green = complete, red = error).

---

## I

### iNaturalist {#inaturalist}
A community-science platform where people record and share species observations. One of the online occurrence sources the Pan-European biodiversity workflow can query.

---

## M

### Mann-Kendall {#mann-kendall}
A non-parametric statistical test for a monotonic upward or downward trend in a time series. It makes no assumption about the data's distribution, which makes it well suited to noisy environmental records. It outputs **Kendall's Tau** (-1 to +1, direction and strength) and a p-value. Used per assessment unit in the Gulf of Riga case study.

---

## O

### OGC API Features {#ogc-api-features}
An Open Geospatial Consortium standard for exposing geographic data via HTTP. AIP uses it to let you spatially subset a dataset (bounding box, attribute filters) before importing only the slice you need into Galaxy - saving bandwidth and analysis time.

---

## P

### pygeoapi {#pygeoapi}
An open-source Python server that publishes geospatial data and processing as OGC APIs. AquaINFRA D2KPs expose their analytical processes through a pygeoapi Web API, so developers can call the same processing from their own systems or Digital Twins.

---

## S

### Secchi depth {#secchi-depth}
A simple, long-established measure of water transparency: the depth at which a white "Secchi disk" lowered into the water is no longer visible. Decades of Secchi-depth records are the input to the Gulf of Riga case study.

### Species Distribution Model - SDM {#sdm}
A model that relates species occurrence records to environmental variables to predict where a species can live. Clean occurrence data - the output of the Pan-European workflow - is a prerequisite for reliable SDMs.

### specleanr {#specleanr}
An R package for automated flagging of environmental outliers in species occurrence data, developed by Anthony Basooma (BOKU) and published in *Ecography* (2025). It ensembles around 20 outlier-detection methods - ecological-range, univariate, and multivariate - through its `multidetect()` function, and classifies each record as **non-outlier, poor, fair, moderate, very strong, or perfect** outlier. It is the engine of the Pan-European biodiversity case study. (Some AquaINFRA materials write the name as "Specleaner".) Docs: [anthonybasooma.github.io/specleanr](https://anthonybasooma.github.io/specleanr/).

---

## V

### VertNet {#vertnet}
A network that publishes biodiversity records digitised from natural-history collections. One of the online occurrence sources the Pan-European biodiversity workflow can query.

### VRE - Virtual Research Environment {#vre}
AquaINFRA's analytical execution environment, implemented as **Aqua Galaxy** (`aqua.usegalaxy.eu`). When the docs say "VRE," they mean the Galaxy server you'll run workflows in. See [VRE chapter](../04_aquainfra_vre).

---

## W

### Workflow {#workflow}
An ordered pipeline of analysis steps (tools) connected by data flows. In Galaxy, workflows are reusable: build once, run with new inputs whenever needed; share as a `.ga` file or via a D2KP.

### WorldClim {#worldclim}
A set of global climate raster layers (e.g. mean annual temperature, annual precipitation). The Pan-European workflow extracts WorldClim values at each occurrence's coordinates, providing the environmental predictors that outlier detection needs.

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
