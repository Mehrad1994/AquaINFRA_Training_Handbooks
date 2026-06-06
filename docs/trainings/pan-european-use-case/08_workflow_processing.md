---
layout: default
title: Workflow Structure (Part 2)
parent: Pan-European Biodiversity Use Case
nav_order: 8
---

# Workflow steps 5-8: processing & detection

<p class="chapter-meta">
  <strong>~2 min read</strong> · <strong>2 min video</strong> · Chapter 8 of 10
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul>
        <li>How the sources are merged into one schema.</li>
        <li>Why the FishBase name-resolution step is critical.</li>
        <li>Where outlier detection actually happens.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=1000&end=1122" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p class="chapter-meta">📍 <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=1000s" target="_blank" rel="noopener">Jump to 16:40 → 18:42 in YouTube</a>.</p>

---

## Key points

<div class="table-wrapper">
    <table>
        <thead><tr><th>Step</th><th>What it does</th></tr></thead>
        <tbody>
            <tr><td><strong>5. Merge & harmonise columns</strong></td><td>Maps divergent column names to one schema: <code>Species</code>, <code>Decimal Latitude</code>, <code>Decimal Longitude</code>, <code>Date</code>, <code>Country</code>.</td></tr>
            <tr><td><strong>6. Harmonise species names</strong></td><td>Queries <strong>FishBase</strong> to map every name to the accepted scientific name.</td></tr>
            <tr><td><strong>7. Extract predictors</strong></td><td>Uses <strong>WorldClim</strong> rasters: for each (lat, lon), pulls climate values (e.g. mean annual temperature).</td></tr>
            <tr><td><strong>8. Flag outliers</strong></td><td>Runs Specleaner on your chosen variable with selected methods (Chapter 4); outputs a strength class per record.</td></tr>
        </tbody>
    </table>
</div>

> [!NOTE]
> **Step 6 is small but critical.** Without the FishBase lookup, one species appearing under three synonyms across GBIF/VertNet/iNaturalist would be treated as three species - and flagged as outliers.

<details>
<summary><strong>The harmonised schema (Step 5 output)</strong></summary>

```
Species             Decimal Latitude   Decimal Longitude   Date         Country
Hucho hucho         47.823             14.221              2018-04-12   Austria
Acipenser ruthenus  44.892             20.451              2015-09-21   Serbia
…
```

After Step 7 it gains WorldClim columns (e.g. `bio1` mean annual temperature, `bio12` annual precipitation) - the candidate predictors for Step 8.

</details>

---

## ✅ Key takeaways

- The processing chain is **re-runnable** with new parameters without re-importing data.
- **FishBase harmonisation** prevents synonym-driven false flags.
- **WorldClim** variables are the usual predictors, but any covariate column works.

---

<div class="sequence-navigation">
    <a href="./07_workflow_acquisition" class="btn-seq btn-seq--prev">← Previous: Workflow Pt. 1</a>
    <a href="./09_reviewing_results" class="btn-seq btn-seq--next">Next Chapter: Results →</a>
</div>

<div class="wave-decoration"></div>
