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

The process within Specleaner involves several detailed steps tailored for species distribution modeling:

1.  **Data Collection & Standardization**:
    *   **Species Data**: Can be sourced from global repositories like **GBIF**, **VertNet**, or local storage.
    *   **Environmental Data**: Essential for creating predictors. Sources include **CHELSA** and **WorldClim**.
    *   **Reference Dataset**: The species data is used to extract environmental predictors from the environmental layers, creating a reference dataset for analysis.

2.  **Outlier Identification Methods**:
    *   **Univariate Methods**: These require a single environmental predictor (e.g., Temperature or Precipitation). Examples include:
        *   **Z-score**
        *   **Interquartile Range (IQR)**
        *   *Logic*: Checks if values fall outside suitable ecological ranges for that specific variable.
    *   **Multivariate Methods**: These analyze multiple variables simultaneously. Examples include:
        *   **Isolation Forest**
        *   **One-Class Support Vector Machines**
        *   *Logic*: Identifies records that are anomalous in the multidimensional environmental space.

3.  **Compilation (`m_detect`)**:
    *   The core function `m_detect` compiles results from all selected methods.
    *   Each occurrence record is assessed against **20 different potential detection methods**.

4.  **Weighting System**:
    Instead of a binary "clean/dirty" classification, Specleaner uses a voting system:
    *   Records are **weighted** based on how many methods flagged them.
    *   **Poor/Fair Outlier**: Flagged by very few methods (e.g., 1 out of 20).
    *   **Perfect Outlier**: Flagged by all or nearly all methods (e.g., 20 out of 20).

5.  **Filtering & Expert Classification**:
    *   Records are classified into categories: **Poor, Fair, Moderate, Strong, or Perfect** outliers.
    *   **Thresholding**: Users can set a threshold (e.g., "Remove only Strong and Perfect outliers").
    *   **Expert Review**: This nuanced approach allows ecologists to decide whether to keep a "perfect" outlier that might represent a real but rare ecological event, or remove it as an error.

For a comprehensive understanding, reading the [Specleaner documentation](https://anthonybasooma.github.io/specleaner) is highly recommended.

<div class="callout">
    <strong>📹 Video Reference</strong>
    <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=380s" target="_blank">6:20</a> Review the Specleaner R Package
</div>

<div class="btn-group">
    <a href="02_freshwater_biodiversity.html" class="btn btn--outline">&larr; Previous Chapter</a>
    <a href="04_data_to_knowledge.html" class="btn">Next Chapter &rarr;</a>
</div>
