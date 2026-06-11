---
layout: default
title: Workflow Details
---

# Workflow details: tool by tool

<p class="chapter-meta">Chapter 8 of 9</p>

<div class="chapter-intro">
    <p>A closer look at how the eight tools inside the DGA workflow connect - spatial and temporal aggregation, a quality gate, the <a href="{{ relative_root }}reference/glossary#mann-kendall">Mann-Kendall</a> trend test, and the two visualisations. The gate drops any unit with fewer than 10 points or more than 80% missing data, so the trend test only runs where the data can support it.</p>
</div>

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=bRfKveHeRXwV9vQR&start=1289&end=1507" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Workflow structure

<div class="diagram">
    <a href="../../assets/images/gulf-of-riga-dga-workflow.png" target="_blank" rel="noopener">
        <img src="../../assets/images/gulf-of-riga-dga-workflow.png" alt="The Gulf of Riga DGA workflow: input data (points, region polygons), data pre-processing (spatial and temporal aggregation), data analysis (mean values by group, time-series selection and interpolation, Mann-Kendall trend analysis), and visualisation (bar plot and interactive map).">
    </a>
</div>

---

<div class="sequence-navigation">
    <a href="./07_hands_on_tutorial" class="btn-seq btn-seq--prev">← Previous: Hands-On Tutorial</a>
    <a href="./09_results" class="btn-seq btn-seq--next">Next Chapter: Results →</a>
</div>

<div class="wave-decoration"></div>
