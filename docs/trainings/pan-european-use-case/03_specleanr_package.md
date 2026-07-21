---
layout: default
title: Specleaner Documentation & Data Harmonization
parent: Pan-European Biodiversity Use Case
nav_order: 3
---

# Specleaner Documentation & Data Harmonization

<p class="chapter-meta">Chapter 3 of 6</p>

<div class="chapter-intro">
    <p>Any single outlier-detection method has a blind spot. <a href="{{ relative_root }}reference/glossary#specleanr">Specleaner</a> (the <code>specleanr</code> R package) runs around 20 methods - univariate and multivariate - and votes, classifying each record from "not an outlier" through to "perfect outlier". This chapter explains the ensemble idea and how you choose a removal threshold for your model.</p>
</div>

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/MxSsaN1HvXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## How specleanr works

<div class="use-case-card" style="margin-bottom: 2rem;">
    <figure style="text-align: center; margin: 0;">
      <img src="../../assets/images/pan-european-use-case/image47.png" alt="Specleanr methodology workflow">
      <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">Figure 1: The principle of ensemble outlier detection and removal of species records obtained from open-access data repositories (Basooma et al. 2025).</figcaption>
    </figure>
</div>

---

<div class="sequence-navigation">
    <a href="./02_biodiversity_context" class="btn-seq btn-seq--prev">← Previous: Biodiversity Context</a>
    <a href="./04_aip_and_d2kp" class="btn-seq btn-seq--next">Next Chapter: AIP & D2KP →</a>
</div>

<div class="wave-decoration"></div>
