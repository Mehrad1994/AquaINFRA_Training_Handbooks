---
layout: default
title: Introduction
parent: Pan-European Biodiversity Use Case
nav_order: 1
---

# Introduction to AquaINFRA & the Use Case

<p style="color: var(--text-muted, #5a6b7a); margin-top: -0.5rem; font-size: 0.95rem;">
  <strong>~2 min read</strong> · <strong>1.5 min video</strong> · Chapter 1 of 10
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>What <a href="{{ relative_root }}reference/glossary#fair">FAIR</a> data means in practice for this biodiversity use case.</li>
        <li>Why fragmented occurrence datasets are a Europe-wide problem.</li>
        <li>How AquaINFRA's VRE helps you produce more robust biodiversity estimates.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=0&end=75" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=0s" target="_blank" rel="noopener">Jump to 0:00 → 1:15 in YouTube</a>.</p>

---

## Key concepts

### Why this use case exists

Pan-European biodiversity data comes from many sources - different countries, different projects, different quality standards. Combining them naïvely produces estimates dominated by sampling artefacts rather than real ecological signal.

The Pan-European use case demonstrates how AquaINFRA's tools let you:
1. **Pull occurrence records** from major aggregators (GBIF, iNaturalist, VertNet) for a defined area.
2. **Mix in your own data** when you have it.
3. **Clean the merged set** with ensemble outlier detection.
4. **Produce a robust dataset** ready for Species Distribution Modelling.

The result: estimates that are reproducible end-to-end and citable as a [D2KP]({{ relative_root }}reference/glossary#d2kp).

### What "FAIR" looks like here

- **Findable** - data and workflow indexed on AIP and Zenodo.
- **Accessible** - open access via web APIs.
- **Interoperable** - harmonised to a standard column schema (you'll meet this in Chapter 8).
- **Reusable** - workflow runs on any area of interest, anywhere in the world.

---

## ✅ Key takeaways

- The use case targets a real problem: **fragmented biodiversity data** across European sources.
- AquaINFRA's value-add is the **end-to-end workflow** - pull, merge, harmonise, clean - not just storage.
- The output is **reusable** beyond Europe - same workflow, different area of interest.

---

<div class="sequence-navigation">
    <a href="./" class="btn-seq btn-seq--prev">← Overview</a>
    <a href="./02_boku_researchers" class="btn-seq btn-seq--next">Next Chapter: Meet the Researchers →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
