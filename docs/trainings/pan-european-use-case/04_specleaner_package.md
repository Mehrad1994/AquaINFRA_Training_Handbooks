---
layout: default
title: Specleaner R Package
parent: Pan-European Biodiversity Use Case
nav_order: 4
---

# The Specleaner package

<p class="chapter-meta">
  <strong>~2 min read</strong> · <strong>5 min video</strong> · Chapter 4 of 10
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul>
        <li>Why "ensemble" beats any single outlier method.</li>
        <li>The two method families and what they need.</li>
        <li>How voting turns ~20 detectors into one strength class.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=380&end=671" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p class="chapter-meta">📍 <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=380s" target="_blank" rel="noopener">Jump to 6:20 → 11:11 in YouTube</a>.</p>

---

## Key points

- **Why ensemble:** every single method has a blind spot (z-score breaks on skew, Isolation Forest over-flags sparse regions, fixed rules miss novel patterns). **[Specleaner]({{ relative_root }}reference/glossary#specleanr)** (`specleanr`) runs ~20 methods and **votes** - flagged by all ≈ an error; flagged by one ≈ fine. That mirrors how an expert would weigh a suspect record.
- **Two method families:**

<div class="table-wrapper">
<table>
    <thead><tr><th>Family</th><th>Needs</th><th>Examples</th></tr></thead>
    <tbody>
        <tr><td><strong>Univariate</strong></td><td>one predictor (e.g. mean annual temperature)</td><td>Z-score · IQR · ecological range</td></tr>
        <tr><td><strong>Multivariate</strong></td><td>several predictors at once (catches odd combinations)</td><td>Isolation Forest · One-Class SVM</td></tr>
    </tbody>
</table>
</div>

- **Voting → a strength class per record**, weakest to strongest: **not an outlier → poor → fair → moderate → very strong → perfect**.
- **You pick the threshold:** conservative (remove only *perfect / very strong*) or aggressive (remove from *moderate* up), depending on how sensitive your [SDM]({{ relative_root }}reference/glossary#sdm) is to noise. You'll apply this in [Chapter 9](./09_reviewing_results).

<details>
<summary><strong>Calling specleanr directly from R</strong></summary>

Outside Galaxy (the MyBinder lab or your own RStudio), it centres on `multidetect()`. <em>The snippet is illustrative - see the <a href="https://anthonybasooma.github.io/specleanr/">specleanr documentation</a> for exact arguments.</em>

```r
library(specleanr)

# `occurrences`: a data.frame with environmental predictor columns
# (e.g. bio1 = mean annual temperature from WorldClim).
out <- multidetect(data = occurrences, var = "bio1", ...)
# Each record is classified non-outlier / poor / fair / moderate / very strong / perfect.
```

The Galaxy tool wraps this call - the UI sets the methods and threshold for you.

</details>

---

## ✅ Key takeaways

- **Ensemble beats any single method** on messy occurrence data.
- **Univariate** = one variable; **multivariate** = combinations.
- Voting gives a **strength of evidence**, not a binary flag - so the threshold is yours to choose.

---

<div class="sequence-navigation">
    <a href="./03_biodiversity_importance" class="btn-seq btn-seq--prev">← Previous: Biodiversity</a>
    <a href="./05_data_to_knowledge" class="btn-seq btn-seq--next">Next Chapter: D2KP →</a>
</div>

<div class="wave-decoration"></div>
