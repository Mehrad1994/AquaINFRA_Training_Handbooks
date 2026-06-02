---
layout: default
title: Workflow Structure (Part 2)
parent: Pan-European Biodiversity Use Case
nav_order: 8
---

# Chapter 8 - Workflow Steps 5-8: Processing & Detection

<p style="color: var(--text-muted, #5a6b7a); margin-top: -0.5rem; font-size: 0.95rem;">
  <strong>~4 min read</strong> · <strong>2 min video</strong> · Chapter 8 of 10
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>How the workflow merges and harmonises data from different sources.</li>
        <li>Why species-name resolution against <strong>FishBase</strong> matters.</li>
        <li>Where the Specleaner outlier-detection actually happens.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=1000&end=1122" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=1000s" target="_blank" rel="noopener">Jump to 16:40 → 18:42 in YouTube</a>.</p>

---

## Phase 2 - Processing & detection

<div class="table-wrapper">
    <table>
        <thead><tr><th>Step</th><th>Goal</th><th>What it does</th></tr></thead>
        <tbody>
            <tr>
                <td><strong>5. Merge & harmonise columns</strong></td>
                <td>Unify schema across sources.</td>
                <td>Maps divergent column names to: <code>Species</code>, <code>Decimal Latitude</code>, <code>Decimal Longitude</code>, <code>Date</code>, <code>Country</code>.</td>
            </tr>
            <tr>
                <td><strong>6. Harmonise species names</strong></td>
                <td>Resolve taxonomic synonyms.</td>
                <td>Queries <strong>FishBase</strong> to map every name to the currently accepted scientific name.</td>
            </tr>
            <tr>
                <td><strong>7. Extract environmental predictors</strong></td>
                <td>Add the context outlier-detection needs.</td>
                <td>Uses <strong>WorldClim</strong> rasters: for each (lat, lon), extracts climate values (e.g. mean annual temperature).</td>
            </tr>
            <tr>
                <td><strong>8. Flag outliers (Specleaner core)</strong></td>
                <td>Apply ensemble detection.</td>
                <td>Tests your chosen variable with selected univariate + multivariate methods (Chapter 4). Outputs strength classification per record.</td>
            </tr>
        </tbody>
    </table>
</div>

<details>
<summary><strong>🔬 Deep dive - the harmonised schema (Step 5 output)</strong></summary>

After Step 5, every record in your dataset has at minimum these columns:

```
Species             Decimal Latitude   Decimal Longitude   Date         Country
Hucho hucho         47.823             14.221              2018-04-12   Austria
Hucho hucho         48.105             14.882              2019-06-03   Austria
Acipenser ruthenus  44.892             20.451              2015-09-21   Serbia
…
```

After Step 7 it picks up extra columns from WorldClim (e.g. `bio1` mean annual temperature, `bio12` annual precipitation), which become the candidate predictors for Specleaner in Step 8.

</details>

> [!NOTE]
> Step 6 (FishBase lookup) is what makes the merged dataset usable downstream. Without it, a single species appearing under three different synonyms in GBIF/VertNet/iNaturalist would be treated as three different species by Specleaner.

---

## ✅ Key takeaways

- The four-step processing chain is **deterministic and idempotent** - you can re-run with new parameters without re-importing data.
- **FishBase harmonisation** is small but critical - it prevents synonym-driven false-positive flags later.
- **WorldClim variables** are the most common predictors for Step 8 - but any covariate column you attach can be used.
- Step 8's output carries the outlier classification you'll inspect in [Chapter 9](./09_reviewing_results).

---

<div class="sequence-navigation">
    <a href="./07_workflow_acquisition" class="btn-seq btn-seq--prev">← Previous: Workflow Pt. 1</a>
    <a href="./09_reviewing_results" class="btn-seq btn-seq--next">Next Chapter: Results →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
