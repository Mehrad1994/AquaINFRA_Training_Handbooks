---
layout: default
title: Interaction Platform
---

# Using the AIP for this Case Study

<p class="chapter-meta">
  <strong>~3 min read</strong> · <strong>2.5 min video</strong> · Chapter 3 of 9
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>How to search the <a href="{{ relative_root }}reference/glossary#aip">AIP</a> for Gulf-of-Riga-relevant resources.</li>
        <li>The two filters that matter most: <strong>data provider</strong> and <strong>spatial coverage</strong>.</li>
        <li>How ontology-based search surfaces related concepts you might not have searched for directly.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=bRfKveHeRXwV9vQR&start=261&end=411" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=261s" target="_blank" rel="noopener">Jump to 4:21 → 6:51 in YouTube</a> - Searching AIP for the case study resources.</p>

---

## Key concepts

The **[AIP](https://aquainfra.dev.52north.org/)** is the single gateway you'll use to find every resource for this case study - the Secchi point data, the HELCOM subbasin polygons, and the published D2KP.

### Search functionality

- **Keyword search** - type natural terms (e.g. *Gulf of Riga*, *secchi*).
- **Ontology search** - surfaces semantically related resources even if the keyword doesn't match exactly. Useful when you don't know the precise vocabulary used by data providers.

### The two filters worth knowing

**1. Data Provider** - uncheck providers you don't need. For this case study you'll mostly use **AquaINFRA**, **HELCOM**, and **Copernicus Marine**.

**2. Spatial coverage** - two ways to narrow geographically:
- Pick a predefined **European Catchment Area** (the Daugava catchment for this study).
- Draw a **custom bounding box** directly on the map.

> [!TIP]
> Start with a generous bounding box. You can always tighten the subset *at import time* via the OGC API - no need to over-filter at search time.

---

## ✅ Key takeaways

- AIP search = **keyword + ontology** - try both phrasings if your first attempt returns too little.
- Filter by **provider** to cut noise; filter by **spatial coverage** to focus on your region.
- For Gulf of Riga: expect to use the **AquaINFRA** provider for Secchi data and **HELCOM** for assessment-unit polygons.
- Browsing AIP needs no account - running anything you find still needs [Aqua Galaxy]({{ relative_root }}reference/prerequisites).

---

<div class="sequence-navigation">
    <a href="./02_case_study" class="btn-seq btn-seq--prev">← Previous: Case Study</a>
    <a href="./04_d2k_package" class="btn-seq btn-seq--next">Next Chapter: D2KP →</a>
</div>

<div class="wave-decoration"></div>
