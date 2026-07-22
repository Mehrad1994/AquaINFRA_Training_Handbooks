---
layout: chapter
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

<div class="use-case-card" style="margin-bottom: 2rem;">
    <figure style="text-align: center; margin: 0;">
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; align-items: flex-start;">
        <img src="../../assets/images/tordera-malta/image41.png" alt="Global workflow of coupled inland-marine model" style="flex: 1; min-width: 250px;">
        <img src="../../assets/images/tordera-malta/image42.png" alt="Detailed workflow of the marine component" style="flex: 1; min-width: 250px;">
      </div>
      <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1rem;">Figure 4: Global workflow of the coupled inland-marine model (left) and detailed workflow of the marine component (right) for the Tordera catchment.</figcaption>
    </figure>
</div>

### Malta Workflow: Groundwater Modelling

The Malta workflow shifts the focus entirely underground, utilizing specialized groundwater simulation tools.

1. **Aquifer Simulation (SEAWAT):**
   - Implements a SEAWAT-based groundwater component. SEAWAT is specifically designed to simulate variable-density groundwater flow, making it ideal for tracking the delicate balance between fresh groundwater and dense seawater.
2. **Coastal Interaction:**
   - The model maps the subterranean pathways where fresh water escapes into the sea (Submarine Groundwater Discharge).
   - Simultaneously, it tracks the inland migration of the saltwater wedge (Saltwater Intrusion) under different climate and extraction scenarios.

<div class="use-case-card" style="margin-bottom: 2rem;">
    <figure style="text-align: center; margin: 0;">
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; align-items: flex-start;">
        <img src="../../assets/images/tordera-malta/image45.png" alt="Detailed workflow of the groundwater (SEAWAT) model" style="flex: 1; min-width: 250px;">
        <img src="../../assets/images/tordera-malta/image46.png" alt="Submarine groundwater discharge along the Maltese coastline" style="flex: 1; min-width: 250px;">
      </div>
      <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1rem;">Figure 5: Detailed workflow of the groundwater SEAWAT model (left) and submarine groundwater discharge mapping along the Maltese coastline (right).</figcaption>
    </figure>
</div>

> [!NOTE]
> Together, these workflows demonstrate that the AquaINFRA platform is not limited to surface-level riverine transport; its tools can be successfully adapted for both episodic extreme events and subterranean variable-density flow.

---

<div class="sequence-navigation">
    <a href="./02_research_questions" class="btn-seq btn-seq--prev">&larr; Previous</a>
</div>
<div class="wave-decoration"></div>
