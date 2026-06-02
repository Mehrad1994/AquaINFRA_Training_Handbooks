---
layout: default
title: Data-to-Knowledge Package
---

# The Gulf of Riga Data-to-Knowledge Package

<p class="chapter-meta">
  <strong>~3 min read</strong> · <strong>2.5 min video</strong> · Chapter 4 of 9
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>What a <a href="{{ relative_root }}reference/glossary#d2kp">D2KP</a> packages together (data, workflow, code, virtual lab).</li>
        <li>How the Gulf of Riga D2KP supports the darkening research question end-to-end.</li>
        <li>The four "doors" into a D2KP - pick the one that matches your skill level.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=bRfKveHeRXwV9vQR&start=411&end=572" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=411s" target="_blank" rel="noopener">Jump to 6:51 → 9:32 in YouTube</a> - Introduction to the Data-to-Knowledge Package.</p>

---

## Key concepts

A **D2KP** structures everything needed to reproduce a specific analysis. For the Gulf of Riga case, that means: the Secchi-depth dataset, the HELCOM polygons, the Galaxy workflow, the R source code, a virtual lab to edit it, and the documentation tying it together.

### What's in the Gulf of Riga D2KP

| Component | Purpose |
|---|---|
| **Step-by-step guide** | Plain-language walkthrough of running the workflow. |
| **Galaxy workflow** | The `.ga` file you'll import in Chapter 7. |
| **Virtual lab** (MyBinder) | Interactive RStudio with the code pre-loaded - edit and re-run live. |
| **Web API services** | OGC API endpoints if you want to drive the analysis from your own scripts. |

### Why this matters

Each component is a different **interaction level**. A domain researcher can run the Galaxy workflow without touching code. A developer can hit the Web API from their own pipeline. A methodologist can open the MyBinder lab and tweak the R code. All four paths produce the same canonical analysis.

🔗 **Live D2KP**: <a href="https://aquainfra.dev.52north.org/result/zenodo:17175368" target="_blank" rel="noopener">Gulf of Riga D2KP on AIP</a>

---

## ✅ Key takeaways

- A D2KP is **not** a zip of files - it's a multi-modal reproducibility bundle with four interaction paths.
- The Gulf of Riga D2KP **answers a specific research question** by tying its data, workflow, and code to the darkening hypothesis.
- Use the **AIP "Related Content"** sidebar to find the D2KP from any of its component datasets.
- All D2KPs are citable via **DOI on Zenodo**.

---

<div class="sequence-navigation">
    <a href="./03_aip_platform" class="btn-seq btn-seq--prev">← Previous: AIP Platform</a>
    <a href="./05_vre_galaxy" class="btn-seq btn-seq--next">Next Chapter: VRE Galaxy →</a>
</div>

<div class="wave-decoration"></div>
