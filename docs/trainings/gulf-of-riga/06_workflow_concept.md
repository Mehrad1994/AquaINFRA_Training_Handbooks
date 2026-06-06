---
layout: default
title: Workflow Concept
---

# Workflow Concept: How the Analysis Works

<p class="chapter-meta">
  <strong>~3 min read</strong> · <strong>1 min video</strong> · Chapter 6 of 9
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul>
        <li>The four-stage logical structure of the <a href="{{ relative_root }}reference/glossary#dga">DGA workflow</a>.</li>
        <li>What each stage does - and what it produces for the next.</li>
        <li>The mental model you need before clicking "Run" in Chapter 7.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=bRfKveHeRXwV9vQR&start=671&end=738" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p class="chapter-meta">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=671s" target="_blank" rel="noopener">Jump to 11:11 → 12:18 in YouTube</a> - Workflow conceptual overview.</p>

---

## Key points

The DGA workflow turns scattered Secchi readings into one trend per region. Four stages:

```mermaid
flowchart LR
    A[1. Input Data] --> B[2. Pre-processing<br/>spatial + temporal]
    B --> C[3. Trend Analysis<br/>Mann-Kendall]
    C --> D[4. Visualisation<br/>map + bar chart]
```

- **Pre-processing is the whole point.** Tagging each reading with an **assessment unit** and a **season** is what makes the trend test meaningful - skip it and you average across geography and time, burying the signal.
- **Mann-Kendall** is the trend test: non-parametric, so it tolerates gaps, outliers, and non-normal data.
- The output is **one trend per unit per season** - the unit of everything you'll read in the results.

<details>
<summary><strong>Stage-by-stage detail</strong></summary>

1. **Input data** - Secchi-depth point measurements + HELCOM assessment-unit polygons.
2. **Pre-processing** - assign each point to a polygon (spatial) and a season (temporal); aggregate to one value per *unit × year × season*.
3. **Analysis** - run a Mann-Kendall non-parametric test for a monotonic trend.
4. **Visualisation** - produce an interactive map and a bar chart of Kendall's Tau per unit.

</details>

---

## ✅ Key takeaways

- Four stages: **input → pre-process → analyse → visualise**.
- **Mann-Kendall** is the workhorse statistic - it doesn't assume a particular distribution shape.
- Aggregating by **unit × year × season** is what makes the trend test interpretable.
- This conceptual map is enough to follow Chapter 7's hands-on execution.

---

<div class="sequence-navigation">
    <a href="./05_vre_galaxy" class="btn-seq btn-seq--prev">← Previous: VRE Galaxy</a>
    <a href="./07_hands_on_tutorial" class="btn-seq btn-seq--next">Next Chapter: Hands-On Tutorial →</a>
</div>

<div class="wave-decoration"></div>
