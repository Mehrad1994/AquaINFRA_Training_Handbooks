---
layout: default
title: Specleaner R Package
parent: Pan-European Biodiversity Use Case
---

# Specleaner R Package

The technical foundation of the Pan-European workflow is the **Specleaner** R package, developed at BOKU University by **[Dr. Anthony Basooma](https://boku.ac.at/en/personen/person/06473192FC3B0438)**.

## Overview
This package is designed for **outlier detection and removal** in species occurrence records during data analysis. It combines **20 different outlier detection methods** into one homogeneous and robust approach, allowing researchers to ensure high data quality before running species distribution models.

**Resources:**
- [Official Documentation](https://anthonybasooma.github.io/specleaner)
- [Published Article (Ecography)](https://doi.org/10.1002/ecog.08221) - "Specleaner: an R package for automated flagging of environmental outliers in ecological data for modeling workflows"

## Outlier Detection Process

The process within Specleaner involves several steps:

1.  **Data Collection/Standardization**:
    *   **Species Data**: From GBIF, VertNet, or local storage.
    *   **Environmental Data**: From CHELSA, WorldClim, etc.
    *   Extract environmental predictors for the species locations to create a reference dataset.

2.  **Outlier Identification Methods**:
    *   **Univariate Methods** (e.g., Z-score, Interquartile Range): Checks if values fall outside suitable ecological ranges for a single predictor.
    *   **Multivariate Methods** (e.g., Isolation Forest, One-Class Support Vector Machines): Checks for outliers in multidimensional space.

3.  **Compilation (`m_detect`)**:
    *   The function `m_detect` compiles results from selected methods.
    *   Each record is assessed as a potential outlier.

4.  **Weighting**:
    *   Records are weighted based on how many methods flagged them.
    *   **Poor/Fair Outlier**: Flagged by few methods (e.g., 1 out of 10).
    *   **Perfect Outlier**: Flagged by all methods (e.g., 10 out of 10).

5.  **Filtering/Classification**:
    *   Based on thresholds, data is filtered as potential or absolute outliers.
    *   Records can be classified as **Poor, Fair, Moderate, Strong, or Perfect** outliers.
    *   Expert knowledge can be used to decide whether to remove "perfect" outliers based on ecological consequences.

For a comprehensive understanding, reading the [Specleaner documentation](https://anthonybasooma.github.io/specleaner) is highly recommended.

<div class="callout">
    <strong>📹 Video Reference</strong>
    <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=380s" target="_blank">6:20</a> Review the Specleaner R Package
</div>

<div class="btn-group">
    <a href="02_freshwater_biodiversity.html" class="btn btn--outline">&larr; Previous Chapter</a>
    <a href="04_data_to_knowledge.html" class="btn">Next Chapter &rarr;</a>
</div>
