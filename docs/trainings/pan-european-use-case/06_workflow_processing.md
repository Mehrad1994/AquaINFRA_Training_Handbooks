---
layout: default
title: Conclusion & Synthesis Sequence
parent: Pan-European Biodiversity Use Case
nav_order: 6
---

# Conclusion & Synthesis Sequence

<p class="chapter-meta">Chapter 6 of 6</p>

<div class="chapter-intro">
    <p>The second half of the pipeline: merging the sources, resolving synonyms against FishBase, extracting predictors, and flagging outliers with Specleaner. Finally, preview the workflow output and download the final classified CSV. The workflow is geography-agnostic, serves coders and non-coders alike, and is FAIR and citable via its <a href="https://aquainfra.dev.52north.org/result/zenodo:17175591" target="_blank" rel="noopener">Zenodo DOI</a>.</p>
</div>

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/RQZmhttOu5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Workflow: steps 5-8

```mermaid
%%{init: {'theme':'base','themeVariables':{'lineColor':'#3564ac','fontFamily':'Inter, system-ui, sans-serif','fontSize':'14px'}}}%%
flowchart LR
    M(["5. Merge &<br/>harmonise"]) --> N(["6. Harmonise names<br/>(FishBase)"])
    N --> O(["7. Extract predictors<br/>(WorldClim)"])
    O --> P(["8. Flag outliers<br/>(Specleaner)"])
    style M fill:#eaf1fc,stroke:#3564AC,color:#070608
    style N fill:#eaf1fc,stroke:#3564AC,color:#070608
    style O fill:#eaf1fc,stroke:#3564AC,color:#070608
    style P fill:#76b943,stroke:#4f8a23,color:#ffffff
```

## What's next

Endangered species like the Danube sturgeon and Huchen depend on clean, defensible data: cleaner occurrences mean better species distribution models and better-targeted protection. The same workflow runs anywhere - just swap the GeoJSON area of interest.

- Browse the other [Applied Use Case Trainings]({{ relative_root }}06_use_cases).
- Refresh terms in the [Glossary]({{ relative_root }}reference/glossary).
- Reach the team via the [Contact page]({{ relative_root }}07_contact).

---

<div class="sequence-navigation">
    <a href="./05_workflow_acquisition" class="btn-seq btn-seq--prev">← Previous: Workflow Pt. 1</a>
    <a href="../../" class="btn-seq btn-seq--next">Return Home</a>
</div>

<div class="wave-decoration"></div>
