---
layout: default
title: Workflow Concept
---

# Workflow concept

<p class="chapter-meta">Chapter 6 of 9</p>

<div class="chapter-intro">
    <p>Before running anything, it helps to see the shape of the analysis. The <a href="{{ relative_root }}reference/glossary#dga">DGA workflow</a> - named after the Daugava river - turns scattered Secchi readings into one transparency trend per region and season.</p>
</div>

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=bRfKveHeRXwV9vQR&start=671&end=738" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## The workflow

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#eaf1fc','primaryBorderColor':'#3564ac','primaryTextColor':'#070608','lineColor':'#3564ac','fontFamily':'Inter, system-ui, sans-serif','fontSize':'15px'}}}%%
flowchart LR
    A([Input data]) --> B([Pre-processing<br/>spatial + temporal])
    B --> C([Trend analysis<br/>Mann-Kendall])
    C --> D([Visualisation<br/>map + bar chart])
```

---

<div class="sequence-navigation">
    <a href="./05_vre_galaxy" class="btn-seq btn-seq--prev">← Previous: VRE Galaxy</a>
    <a href="./07_hands_on_tutorial" class="btn-seq btn-seq--next">Next Chapter: Hands-On Tutorial →</a>
</div>

<div class="wave-decoration"></div>
