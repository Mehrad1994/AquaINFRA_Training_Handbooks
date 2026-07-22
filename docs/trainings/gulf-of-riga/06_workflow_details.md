---
layout: chapter
title: Running the Daugava Workflow
---

# Running the Daugava Workflow

<p class="chapter-meta">Chapter 6 of 7</p>

<div class="chapter-intro">
    <p>With data imported, the workflow begins executing its tools. The process involves spatial aggregation (assigning points to polygons), temporal aggregation (assigning seasons), calculating mean values, filtering out regions with insufficient data, and finally running the nonparametric <a href="../../reference/glossary#mann-kendall" target="_blank" rel="noopener">Mann-Kendall</a> trend analysis to detect significant trends.</p>
</div>

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/1G9DKzqceog" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Workflow structure

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#eaf1fc','primaryBorderColor':'#3564ac','primaryTextColor':'#070608','lineColor':'#3564ac','fontFamily':'Inter, system-ui, sans-serif','fontSize':'15px'}}}%%
flowchart LR
    A([Input data]) --> B([Pre-processing<br/>spatial + temporal])
    B --> C([Trend analysis<br/>Mann-Kendall])
    C --> D([Visualisation<br/>map + bar chart])
```

<div class="use-case-card" style="margin-bottom: 2rem;">
    <figure style="text-align: center; margin: 0;">
      <a href="../../assets/images/gulf-of-riga-dga-workflow.png" target="_blank" rel="noopener">
          <img src="../../assets/images/gulf-of-riga-dga-workflow.png" alt="The Gulf of Riga DGA workflow">
      </a>
      <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1rem;">Figure 2: The Gulf of Riga DGA workflow involving data pre-processing, Mann-Kendall trend analysis, and visualisation.</figcaption>
    </figure>
</div>

### Workflow Transferability

The reusability of this workflow has been demonstrated by successfully applying it to other regions, such as the Bothnian Bay and the Gulf of Finland.

<div class="use-case-card" style="margin-bottom: 2rem;">
    <figure style="text-align: center; margin: 0;">
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; align-items: flex-start;">
        <img src="../../assets/images/gulf-of-riga/image49.png" alt="Workflow upscaling to the Bothnian Bay" style="flex: 1; min-width: 250px;">
        <img src="../../assets/images/gulf-of-riga/image50.png" alt="Transferability to the Gulf of Finland" style="flex: 1; min-width: 250px;">
      </div>
      <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1rem;">Figure 3: Demonstration of workflow transferability. Left: Upscaling to the Bothnian Bay showing seasonal Mann-Kendall trend results for Secchi depth across HELCOM subbasins. Right: Transferability to the Gulf of Finland showing input monitoring stations and HELCOM spatial regions.</figcaption>
    </figure>
</div>

---

<div class="sequence-navigation">
    <a href="./05_importing_data" class="btn-seq btn-seq--prev">← Previous: Importing Data</a>
    <a href="./07_results_conclusion" class="btn-seq btn-seq--next">Next Chapter: Results & Conclusion →</a>
</div>

<div class="wave-decoration"></div>
