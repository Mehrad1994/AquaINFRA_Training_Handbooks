---
layout: default
title: Reviewing the Results
parent: Pan-European Biodiversity Use Case
nav_order: 9
---

# Reviewing the Workflow Results

<p class="chapter-meta">
  <strong>~3 min read</strong> · <strong>1 min video</strong> · Chapter 9 of 10
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>How to inspect any step's output in Galaxy.</li>
        <li>How to download the final cleaned CSV for use elsewhere.</li>
        <li>How to read the outlier strength classes and pick a removal threshold.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=1122&end=1182" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=1122s" target="_blank" rel="noopener">Jump to 18:42 → 19:42 in YouTube</a>.</p>

---

## Inspecting outputs in Galaxy

Once every step turns **green**:

1. Click the dataset name in the history panel.
2. Click the **👁 eye icon** to preview the table.
3. Galaxy shows the first rows inline.

For Step 8 specifically (the outlier flags) the preview is where you'll spend most of your time.

## Downloading the final CSV

Each step writes a text file that contains a **direct link to the actual results**, usually in CSV format.

1. Open the step's output file.
2. Follow the link → save the CSV locally.
3. Use it in your own R or Python environment for downstream Species Distribution Modelling.

## Reading the outlier classifications

The final table extends every record with the environmental predictors *and* an outlier class:

<div class="callout">
    <strong>✅ Not an outlier</strong> - keep, no method flagged.
</div>

> [!TIP] **Minor outliers** - usually keep, but worth inspecting:
> - Poor outlier
> - Fair outlier
> - Moderate outlier

> [!WARNING] **Major outliers** - usually remove:
> - Very Strong outlier
> - Perfect outlier

### Picking a threshold

The right cut-off depends on your downstream model:

- **Sensitive SDMs** (e.g. MaxEnt with few records) → conservative, remove only Perfect / Very Strong.
- **Robust ensembles** (RF + GBM averages) → more aggressive, remove from Moderate up.
- **Critical applications** (red-list assessments) → defer borderline cases to expert review rather than auto-remove.

---

## ✅ Key takeaways

- The **eye icon** in Galaxy is your fastest preview tool - use it on every step output.
- The final CSV download is what you use **outside** Galaxy.
- Outlier classes are **strength of evidence**, not binary - pick a threshold consciously.
- For high-stakes work, treat borderline classes as **flag for expert review**, not auto-delete.

---

<div class="sequence-navigation">
    <a href="./08_workflow_processing" class="btn-seq btn-seq--prev">← Previous: Workflow Pt. 2</a>
    <a href="./10_conclusion" class="btn-seq btn-seq--next">Next Chapter: Conclusion →</a>
</div>

<div class="wave-decoration"></div>
