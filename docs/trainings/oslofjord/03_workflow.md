---
layout: default
title: "Workflow"
---
# Workflow

<p class="chapter-meta">Chapter 3 of 3</p>

<div class="chapter-intro">
    <p>A sequential breakdown of how river fluxes and FerryBox marine data are integrated for extreme event analysis.</p>
</div>

The Oslofjord workflow focuses on combining high-frequency inland hydrological data with continuous marine observations. By processing this within a unified environment, researchers can isolate the specific impacts of individual storm events.

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

> [!TIP]
> This workflow is designed to be highly modular. While it defaults to the Glomma River and Oslofjord, the same algorithms can be applied to any coupled river-estuary system equipped with FerryBox monitoring.

---

<div class="sequence-navigation">
    <a href="./02_research_questions" class="btn-seq btn-seq--prev">&larr; Previous</a>
</div>
<div class="wave-decoration"></div>
