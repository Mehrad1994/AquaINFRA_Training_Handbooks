---
layout: default
title: Pan-European D2K Packages
parent: Pan-European Biodiversity Use Case
nav_order: 4
---

# Pan-European D2K Packages

<p class="chapter-meta">Chapter 4 of 6</p>

<div class="chapter-intro">
    <p>The Specleaner <a href="../../reference/glossary#d2kp">Data-to-Knowledge Package</a> gathers the workflow, a Binder virtual lab, OGC web-API endpoints, the reproducible toolbox, and the demo datasets - all citable on Zenodo. This chapter shows how to find it on the AIP and set up the run in Aqua Galaxy. You need to be signed in to your <a href="../../reference/prerequisites">Aqua Galaxy account</a> for the import to save.</p>
</div>

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/JmiQu58eDis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## How a D2KP fits together

<div class="diagram">
    <a href="../../assets/images/d2kp-fair-architecture.jpg" target="_blank" rel="noopener">
        <img src="../../assets/images/d2kp-fair-architecture.jpg" alt="How the FAIR principles flow into a Data-to-Knowledge Package and its components">
    </a>
</div>

## Workflow overview

<div class="use-case-card" style="margin-bottom: 2rem;">
    <figure style="text-align: center; margin: 0;">
      <img src="../../assets/images/pan-european-use-case/image48.png" alt="Workflow in the Galaxy Platform detailing the acquisition and merging of multiple data sources">
      <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">Figure 2: Workflow in the Galaxy Platform detailing the acquisition and merging of multiple data sources, the extraction of environmental predictors, and ensemble outlier detection and removal.</figcaption>
    </figure>
</div>

<details class="knowledge-check">
    <summary>Check Your Understanding: D2KP Architecture</summary>
    <div class="answer-content">
        <p><strong>Question:</strong> What are the 4 interaction levels provided by an AquaINFRA Data-to-Knowledge Package (D2KP)?</p>
        <p><strong>Answer:</strong> 
        1. <em>Data & Code</em> (Raw CSV/NetCDF files + R/Python source scripts)<br>
        2. <em>Aqua Galaxy Workflow</em> (No-code pipeline execution via <code>.ga</code> files)<br>
        3. <em>Web API</em> (Direct pygeoapi endpoint access for software integration)<br>
        4. <em>MyBinder Virtual Lab</em> (Live interactive RStudio/Jupyter container environment)
        </p>
    </div>
</details>

---

<div class="sequence-navigation">
    <a href="./03_specleanr_package" class="btn-seq btn-seq--prev">← Previous: Specleaner</a>
    <a href="./05_workflow_acquisition" class="btn-seq btn-seq--next">Next Chapter: Workflow Pt. 1 →</a>
</div>

<div class="wave-decoration"></div>
