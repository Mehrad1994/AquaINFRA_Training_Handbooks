---
layout: default
title: Workflow Structure (Part 1)
parent: Pan-European Biodiversity Use Case
nav_order: 7
---

# Chapter 7 — Workflow Steps 1–4: Data Acquisition

<p style="color: var(--text-muted, #5a6b7a); margin-top: -0.5rem; font-size: 0.95rem;">
  <strong>~3 min read</strong> · <strong>1 min video</strong> · Chapter 7 of 10
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>How the workflow defines the study area from a GeoJSON polygon.</li>
        <li>Which online aggregators (GBIF, iNaturalist, VertNet) it queries.</li>
        <li>When you can skip Steps 3 & 4 (offline data).</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=941&end=1000" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=941s" target="_blank" rel="noopener">Jump to 15:41 → 16:40 in YouTube</a>.</p>

---

## The 8-step pipeline

```mermaid
flowchart LR
    A[1. AOI] --> B[2. Online data<br/>GBIF, iNat, VertNet]
    A --> C[3-4. Offline data<br/>optional]
    B --> M[5. Merge & harmonize<br/>see Ch. 8]
    C --> M
```

This chapter covers Steps 1–4. The processing half (Steps 5–8) is in [Chapter 8](./08_workflow_processing).

## Phase 1 — Data acquisition

<div class="table-wrapper">
    <table>
        <thead><tr><th>Step</th><th>Goal</th><th>What it does</th></tr></thead>
        <tbody>
            <tr>
                <td><strong>1. Input data (AOI)</strong></td>
                <td>Define the spatial boundary.</td>
                <td>Highlights the GeoJSON polygon you uploaded — every subsequent query is clipped to this area.</td>
            </tr>
            <tr>
                <td><strong>2. Retrieve biodiversity data</strong></td>
                <td>Fetch global occurrence records.</td>
                <td>Queries <strong>VertNet</strong>, <strong>GBIF</strong>, and <strong>iNaturalist</strong> for your target species, capped at a maximum point count.</td>
            </tr>
            <tr>
                <td><strong>3 & 4. Offline / local data</strong></td>
                <td>Bring in your own tabular records.</td>
                <td>Handles CSVs uploaded directly to Galaxy. Either <em>complements</em> online sources or replaces them entirely.</td>
            </tr>
        </tbody>
    </table>
</div>

> [!TIP]
> **No local data?** Skip Steps 3 & 4 in a custom run — set them to "no input" on the workflow form. The remaining steps will work fine with online-only data.

---

## ✅ Key takeaways

- Step 1 fixes the **where**; Step 2 fetches the **what** from three global aggregators.
- Steps 3–4 are **optional** — only needed if you have your own occurrence records to mix in.
- The output of this phase is one consolidated dataset, ready for the cleaning steps in Chapter 8.

---

<div class="sequence-navigation">
    <a href="./06_galaxy_workflow_setup" class="btn-seq btn-seq--prev">← Previous: Galaxy Setup</a>
    <a href="./08_workflow_processing" class="btn-seq btn-seq--next">Next Chapter: Workflow Pt. 2 →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
