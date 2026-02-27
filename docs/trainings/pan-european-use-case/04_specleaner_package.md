---
layout: default
title: 4. Specleaner R Package
parent: Pan-European Biodiversity Use Case
nav_order: 4
---

# 4. Specleaner R Package

The technical foundation of the Pan-European workflow is the **Specleaner** R package. It provides a homogeneous and robust approach for identifying outliers in species occurrence records.

## Automated Flagging & Ensemble Methods
Rather than relying on a single method, Specleaner combines **20 different outlier detection methods** into one approach. This "ensemble" logic ensures higher reliability for data used in species distribution modeling.

## 1. Outlier Identification Methods

### Univariate Methods
These require a **single environmental predictor** (e.g., Temperature).
*   **Z-score**: Flags records that deviate significantly from the mean.
*   **Interquartile Range (IQR)**: Flags records outside the statistical "whiskers."
*   **Ecological Ranges**: Checks if records exceed known suitable ecological ranges for the species.

### Multivariate Methods
These check for outliers in **multi-dimensional space**, considering multiple predictors simultaneously.
*   **Isolation Forest**: Isolates anomalies by randomly partitioning data.
*   **One-Class Support Vector Machines (SVM)**: Learns the boundary of "normal" points and flags those outside.

## 2. Weighting & Voting System
Specleaner doesn't just say "Outlier" or "Not Outlier." It uses the function `m_detect` to compile results and **weight** each record:
*   **Poor/Fair Outlier**: Flagged by only 1 out of 10 selected methods.
*   **Perfect Outlier**: Flagged by ALL 10 methods.
*   **Not an Outlier**: Flagged by none.

Researchers can then use thresholds (e.g., Poor, Fair, Moderate, Strong, Perfect) to filter data or apply expert knowledge to decide which records have an "ecological consequence" and should be removed.

<div class="callout">
    <strong>📹 Video Reference</strong>
    <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=380s" target="_blank">6:20</a> Review the Specleaner R Package
</div>

<div class="sequence-navigation">
    <a href="{{ relative_root }}trainings/pan-european-use-case/03_biodiversity_importance" class="btn-seq btn-seq--prev">← Previous: Biodiversity</a>
    <a href="{{ relative_root }}trainings/pan-european-use-case/05_data_to_knowledge" class="btn-seq btn-seq--next">Next Chapter: D2K Package →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
