---
layout: default
title: "Workflow"
---
# Workflow

<p class="chapter-meta">Chapter 3 of 3</p>

<div class="chapter-intro">
    <p>A breakdown of the coupled modelling approaches used for the two Mediterranean case studies.</p>
</div>

Because the Mediterranean case studies address two fundamentally different hydrological problems, the workflow is split into two specialized modelling approaches within the AquaINFRA infrastructure.

### Tordera Workflow: Coupled Inland-Marine Modelling

The Tordera workflow adapts the hydrological models originally built for northern catchments to simulate extreme Mediterranean flash floods.

1. **Inland Catchment Model:** 
   - Utilizes adapted SWAT (Soil and Water Assessment Tool) models to simulate the rapid accumulation and run-off of water during intense rainfall events over the Tordera basin.
2. **Coupled Marine Model:** 
   - The output of the inland model (freshwater, sediment, and nutrient loads) is fed directly into a coastal hydrodynamic model.
   - This simulates how the flood plume disperses into the Mediterranean Sea and impacts coastal water quality.

### Malta Workflow: Groundwater Modelling

The Malta workflow shifts the focus entirely underground, utilizing specialized groundwater simulation tools.

1. **Aquifer Simulation (SEAWAT):**
   - Implements a SEAWAT-based groundwater component. SEAWAT is specifically designed to simulate variable-density groundwater flow, making it ideal for tracking the delicate balance between fresh groundwater and dense seawater.
2. **Coastal Interaction:**
   - The model maps the subterranean pathways where fresh water escapes into the sea (Submarine Groundwater Discharge).
   - Simultaneously, it tracks the inland migration of the saltwater wedge (Saltwater Intrusion) under different climate and extraction scenarios.

> [!NOTE]
> Together, these workflows demonstrate that the AquaINFRA platform is not limited to surface-level riverine transport; its tools can be successfully adapted for both episodic extreme events and subterranean variable-density flow.

---

<div class="sequence-navigation">
    <a href="./02_research_questions" class="btn-seq btn-seq--prev">&larr; Previous</a>
</div>
<div class="wave-decoration"></div>
