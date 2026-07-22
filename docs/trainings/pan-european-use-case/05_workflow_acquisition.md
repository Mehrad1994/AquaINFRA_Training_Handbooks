---
layout: chapter
title: Functional Traits (fwtraits) Analysis
parent: Pan-European Biodiversity Use Case
nav_order: 5
---

# Functional Traits (fwtraits) Analysis

<p class="chapter-meta">Chapter 5 of 6</p>

<div class="chapter-intro">
    <p>The first half of the eight-step pipeline: defining the study area from a GeoJSON polygon, then pulling occurrence records from GBIF, iNaturalist, and VertNet. Steps 3 and 4 are optional - they let you mix in your own local data.</p>
</div>

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/vdoHCh_vr0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Workflow: steps 1-4

```mermaid
%%{init: {'theme':'base','themeVariables':{'lineColor':'#3564ac','fontFamily':'Inter, system-ui, sans-serif','fontSize':'14px'}}}%%
flowchart LR
    A(["1. AOI<br/>GeoJSON"]) --> B(["2. Online data<br/>GBIF, iNat, VertNet"])
    A --> C(["3-4. Offline data<br/>optional CSV"])
    B --> M(["5-8. Processing<br/>(next chapter)"])
    C --> M
    style A fill:#eaf1fc,stroke:#3564AC,color:#070608
    style B fill:#eaf1fc,stroke:#3564AC,color:#070608
    style C fill:#eaf1fc,stroke:#3564AC,color:#070608
    style M fill:#eef0f2,stroke:#9aa3ad,color:#5a6b7a
```

---

<div class="sequence-navigation">
    <a href="./04_aip_and_d2kp" class="btn-seq btn-seq--prev">← Previous: AIP & D2KP</a>
    <a href="./06_workflow_processing" class="btn-seq btn-seq--next">Next Chapter: Workflow Pt. 2 →</a>
</div>

<div class="wave-decoration"></div>
