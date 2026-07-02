---
layout: default
title: Workflow Details
---

# Workflow details and execution

<p class="chapter-meta">Chapter 6 of 7</p>

<div class="chapter-intro">
    <p>With data imported, the workflow begins executing its tools. The process involves spatial aggregation (assigning points to polygons), temporal aggregation (assigning seasons), calculating mean values, filtering out regions with insufficient data, and finally running the nonparametric <a href="{{ relative_root }}reference/glossary#mann-kendall">Mann-Kendall</a> trend analysis to detect significant trends.</p>
</div>

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/1G9DKzqceog" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Workflow structure

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#eaf1fc','primaryBorderColor':'#3564ac','primaryTextColor':'#070608','lineColor':'#3564ac','fontFamily':'Inter, system-ui, sans-serif','fontSize':'15px'}}}%%
flowchart LR
    A([Input data]) --> B([Pre-processing<br/>spatial + temporal])
    B --> C([Trend analysis<br/>Mann-Kendall])
    C --> D([Visualisation<br/>map + bar chart])
```

<div class="diagram">
    <a href="../../assets/images/gulf-of-riga-dga-workflow.png" target="_blank" rel="noopener">
        <img src="../../assets/images/gulf-of-riga-dga-workflow.png" alt="The Gulf of Riga DGA workflow: input data (points, region polygons), data pre-processing (spatial and temporal aggregation), data analysis (mean values by group, time-series selection and interpolation, Mann-Kendall trend analysis), and visualisation (bar plot and interactive map).">
    </a>
</div>

---

<div class="sequence-navigation">
    <a href="./05_importing_data" class="btn-seq btn-seq--prev">← Previous: Importing Data</a>
    <a href="./07_results_conclusion" class="btn-seq btn-seq--next">Next Chapter: Results & Conclusion →</a>
</div>

<div class="wave-decoration"></div>
