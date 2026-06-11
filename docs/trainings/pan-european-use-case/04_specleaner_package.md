---
layout: default
title: Specleaner R Package
parent: Pan-European Biodiversity Use Case
nav_order: 4
---

# The Specleaner package

<p class="chapter-meta">Chapter 4 of 10</p>

<div class="chapter-intro">
    <p>Any single outlier-detection method has a blind spot. <a href="{{ relative_root }}reference/glossary#specleanr">Specleaner</a> (the <code>specleanr</code> R package) runs around 20 methods - univariate and multivariate - and votes, classifying each record from "not an outlier" through to "perfect outlier". This chapter explains the ensemble idea and how you choose a removal threshold for your model.</p>
</div>

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=380&end=671" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## How specleanr works

<div class="diagram">
    <a href="{{ relative_root }}assets/images/specleanr-workflow.png" target="_blank" rel="noopener">
        <img src="{{ relative_root }}assets/images/specleanr-workflow.png" alt="The specleanr methodology in four phases: data collection and standardisation (harmonising local and online occurrence data with environmental predictors), outlier detection (univariate, ecological-range, and multivariate methods via multidetect), outlier weighting and threshold setting, and data extraction of clean records for species distribution models.">
    </a>
</div>

---

<div class="sequence-navigation">
    <a href="./03_biodiversity_importance" class="btn-seq btn-seq--prev">← Previous: Biodiversity</a>
    <a href="./05_data_to_knowledge" class="btn-seq btn-seq--next">Next Chapter: D2KP →</a>
</div>

<div class="wave-decoration"></div>
