---
layout: default
title: Workflow Structure (Part 2)
parent: Pan-European Biodiversity Use Case
nav_order: 8
---

# Workflow steps 5-8: processing and detection

<p class="chapter-meta">Chapter 8 of 10</p>

<div class="chapter-intro">
    <p>The second half of the pipeline: merging the sources into one schema, resolving species synonyms against FishBase, extracting WorldClim predictors, and flagging outliers with Specleaner. The FishBase step is small but critical - without it, one species under three synonyms would be treated as three species.</p>
</div>

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=1000&end=1122" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

---

<div class="sequence-navigation">
    <a href="./07_workflow_acquisition" class="btn-seq btn-seq--prev">← Previous: Workflow Pt. 1</a>
    <a href="./09_reviewing_results" class="btn-seq btn-seq--next">Next Chapter: Results →</a>
</div>

<div class="wave-decoration"></div>
