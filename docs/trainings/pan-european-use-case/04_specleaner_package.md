---
layout: default
title: Specleaner R Package
parent: Pan-European Biodiversity Use Case
nav_order: 4
---

# Chapter 4 — The Specleaner Package

<p style="color: var(--text-muted, #5a6b7a); margin-top: -0.5rem; font-size: 0.95rem;">
  <strong>~4 min read</strong> · <strong>5 min video</strong> · Chapter 4 of 10
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>What <strong>Specleaner</strong> does and why "ensemble" matters for outlier detection.</li>
        <li>The two method families: <strong>univariate</strong> vs <strong>multivariate</strong>.</li>
        <li>How the voting / weighting system turns 20 detectors into one classification.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=380&end=671" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=380s" target="_blank" rel="noopener">Jump to 6:20 → 11:11 in YouTube</a>.</p>

---

## Key concepts

### Why ensemble

Any single outlier-detection method has known weaknesses. Z-score breaks down with skewed distributions. Isolation Forest can over-flag in sparse regions. Domain-specific rules miss novel patterns.

**Specleaner combines ~20 detection methods** and votes. A record flagged by *every* method is almost certainly an error. One flagged by only one method is probably fine. This consensus approach mirrors how an expert ecologist would actually evaluate a suspicious record.

### Univariate methods

Need a **single environmental predictor** (e.g. mean annual temperature):

| Method | Idea |
|---|---|
| **Z-score** | Flags records whose value is many SDs from the mean. |
| **Interquartile range (IQR)** | Flags records outside Q1 − 1.5·IQR or Q3 + 1.5·IQR. |
| **Ecological ranges** | Flags records outside known suitable ranges for the species. |

### Multivariate methods

Consider **multiple predictors at once**, so an unusual combination flags even when each variable alone looks fine.

| Method | Idea |
|---|---|
| **Isolation Forest** | Anomalies need fewer random splits to isolate from the rest. |
| **One-Class SVM** | Learns the boundary of "normal" points; flags those outside. |

### The voting system

The `m_detect` function compiles results and **weights each record** by how many methods flagged it. Output classes:

- **Not an outlier** — no method flagged.
- **Poor / Fair outlier** — flagged by a few methods.
- **Moderate / Strong outlier** — flagged by most methods.
- **Perfect outlier** — flagged by every method run.

You then choose your **threshold**: be conservative (remove only Perfect) or aggressive (remove everything ≥ Moderate), depending on your downstream Species Distribution Model's sensitivity to noise.

<details>
<summary><strong>🔬 Deep dive — calling Specleaner directly from R</strong></summary>

If you'd rather run Specleaner outside Galaxy (e.g. in the MyBinder lab or your own RStudio), the API looks roughly like:

```r
library(specleaner)

# `occurrences` is a data.frame with Species, Decimal Latitude, Decimal Longitude,
# Date, and one or more environmental predictor columns.

result <- m_detect(
  data = occurrences,
  variable = "MeanAnnualTemperature",
  methods = c("zscore", "iqr", "isolation_forest", "ocsvm", "ecorange"),
  threshold = "moderate"
)

clean <- result$data[result$data$outlier_class != "perfect", ]
```

The Galaxy tool wraps exactly this call — picking it via the Galaxy UI sets `methods` and `threshold` for you.
</details>

---

## ✅ Key takeaways

- **Ensemble beats any single method** at outlier detection in messy occurrence data.
- **Univariate** = one variable at a time; **multivariate** = combinations matter.
- The **voting + weighting** system gives you a *strength of evidence* per record, not just a binary flag.
- Choose your threshold based on downstream model sensitivity — it's not one-size-fits-all.

---

<div class="sequence-navigation">
    <a href="./03_biodiversity_importance" class="btn-seq btn-seq--prev">← Previous: Biodiversity</a>
    <a href="./05_data_to_knowledge" class="btn-seq btn-seq--next">Next Chapter: D2K Package →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
