---
layout: default
title: Hands-On Tutorial
---

# Chapter 7 - Hands-On: Running the Gulf of Riga Workflow

<p style="color: var(--text-muted, #5a6b7a); margin-top: -0.5rem; font-size: 0.95rem;">
  <strong>~10 min read</strong> · <strong>9 min video</strong> · Chapter 7 of 9
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>Import the two input datasets (Secchi points + HELCOM polygons) into Galaxy.</li>
        <li>Import the DGA workflow and run it on those inputs.</li>
        <li>Monitor progress and inspect the outputs.</li>
    </ul>
</div>

> [!IMPORTANT]
> **Before you start:** confirm you have an <a href="{{ relative_root }}reference/prerequisites">Aqua Galaxy account</a> and that you can see your username top-right at <code>aqua.usegalaxy.eu</code>.

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=bRfKveHeRXwV9vQR&start=738&end=1289" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="table-wrapper">
    <table>
        <thead>
            <tr><th style="width: 22%;">Timestamp</th><th>Step</th></tr>
        </thead>
        <tbody>
            <tr><td><a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=769s" target="_blank" rel="noopener">12:49 → 15:19</a></td><td><a href="#step-1-1">Step 1.1 - Import Secchi depth points</a></td></tr>
            <tr><td><a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=919s" target="_blank" rel="noopener">15:19 → 19:51</a></td><td><a href="#step-1-2">Step 1.2 - Import HELCOM regions</a></td></tr>
            <tr><td><a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1191s" target="_blank" rel="noopener">19:51 → 21:29</a></td><td><a href="#step-2">Step 2 - Import the workflow</a></td></tr>
            <tr><td><a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1289s" target="_blank" rel="noopener">21:29 → 21:35</a></td><td><a href="#step-3">Step 3 - Run the workflow</a></td></tr>
            <tr><td><a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1295s" target="_blank" rel="noopener">21:35 → 25:18</a></td><td><a href="#step-4">Step 4 - Monitor progress</a></td></tr>
            <tr><td><a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1518s" target="_blank" rel="noopener">25:18 → 29:08</a></td><td><a href="#step-5">Step 5 - Review outputs</a></td></tr>
        </tbody>
    </table>
</div>

> [!TIP]
> Already watched the video? Skim **Key takeaways** at the bottom and use the timestamp table above to jump back to any moment.

---

## Step 1 - Import input data

The workflow needs two datasets: **point data** (Secchi measurements) and **polygon data** (HELCOM assessment units).

### 1.1 Secchi depth points {#step-1-1}

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=769s" target="_blank" rel="noopener">12:49 → 15:19</a> - Smooth OGC API path.</p>

This dataset uses the **smooth path** - AquaINFRA hosts it as an OGC API Feature service, so import is one click.

1. On the AIP, open the **Data-to-Knowledge Package** page → click **"Latvian Secchi depth and water color"**.
2. Choose the **AquaINFRA dataset page** (not the direct download, not Zenodo).
3. Click **"Import to Galaxy"** - the **OGC API Features subsetting window** opens.
4. Configure:
   - **Bounding Box** - leave default (full coverage) unless you want to focus on a smaller area.
   - **Number of Points** - `5871` (the full count).
   - **Query Parameters** - leave empty.
5. Click **Regenerate**, then **Import**. You're redirected to Aqua Galaxy.
6. In the **History panel** (right side), watch the status:

<div class="callout">
    <strong>⏳ Import status colours</strong><br>
    <strong>Grey</strong> = Queued · <strong>Orange</strong> = Processing · <strong>Green</strong> = Complete · <strong>Red</strong> = Error
</div>

7. **Rename** the dataset (pencil icon) to `points`. Add annotation: *"Latvian Secchi depth measurements"*.

> [!TIP]
> Renaming inputs to short names (`points`, `regions`) makes the workflow run form much easier to fill in correctly at Step 3.

### 1.2 HELCOM assessment-unit regions {#step-1-2}

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=919s" target="_blank" rel="noopener">15:19 → 19:51</a> - Manual path with disclaimer.</p>

This is the **manual path** - HELCOM requires accepting a disclaimer before serving the data, so a one-click import isn't possible.

1. From the D2KP page, click **"HELCOM subbasins"** → **"AquaINFRA"** → **"Visit"** to reach HELCOM's site.
2. Open the **direct download link** in a new tab.
3. **Accept the data-usage disclaimer**. Wait until the download link activates - but **do not download**.
4. **Copy the activated URL.**
5. Return to the AIP dataset page → paste into the **Insert URL** field → **Import**.
6. Wait for the green status indicator.
7. Rename the dataset to `regions`. Annotation: *"HELCOM assessment unit polygons"*.

<div class="callout callout--warning">
    <strong>⚠️ Common gotcha</strong> - If you skip the disclaimer step, you'll get a broken URL and a <strong>red</strong> status. See <a href="{{ relative_root }}reference/faq">FAQ - My dataset turned red</a>.
</div>

---

## Step 2 - Import the workflow {#step-2}

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1191s" target="_blank" rel="noopener">19:51 → 21:29</a></p>

**Method 1 - Direct from AIP** (recommended):
1. In the D2KP page, click **"Galaxy"** under the workflow section.
2. On the workflow preview page in Aqua Galaxy → **Import** → **Start using this workflow**.

**Method 2 - Manual `.ga` upload**:
1. Aqua Galaxy → top menu **Workflows** → **Import**.
2. Upload the `.ga` file from the [Zenodo D2KP page](https://aquainfra.dev.52north.org/result/zenodo:17175368).

---

## Step 3 - Run the workflow {#step-3}

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1289s" target="_blank" rel="noopener">21:29 → 21:35</a></p>

1. **Workflows** → find **"Gulf of Riga DGA Workflow"** → dropdown → **Run**.
2. On the run page, set inputs:
   - **Input 1 (Point Data)** → `points`
   - **Input 2 (Region Data)** → `regions`
3. *(Optional)* **Expand to full workflow** to tweak parameters - missing-value threshold, minimum point count, interpolation settings.
4. Click **Run Workflow**.

<details>
<summary><strong>🔬 Deep dive - what those parameters actually do</strong></summary>

| Parameter | Default | Effect |
|---|---|---|
| `min_points_per_unit` | 10 | Units with fewer points are excluded from trend analysis (insufficient sample). |
| `max_missing_fraction` | 0.8 | Units missing >80% of expected timesteps are excluded (interpolation would be misleading). |
| `interpolation_method` | linear | Method used to fill gaps in the time series before Mann-Kendall. |
| `significance_alpha` | 0.05 | p-value threshold used when flagging significant trends in the visualisation. |

Tightening `min_points_per_unit` (e.g. to 20) gives more confidence in each unit's trend at the cost of fewer reported units. Loosening it does the opposite.
</details>

---

## Step 4 - Monitor progress {#step-4}

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1295s" target="_blank" rel="noopener">21:35 → 25:18</a></p>

You'll be taken to a progress page with:

- **Interactive workflow graph** - each tool node coloured by status. Click a node for details.
- **History panel** - chronological list of all outputs with runtime and memory metrics.

Total runtime is typically a few minutes on this dataset. Stuck on grey for >15 min? See [FAQ - Import stuck]({{ relative_root }}reference/faq).

---

## Step 5 - Review outputs {#step-5}

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1518s" target="_blank" rel="noopener">25:18 → 29:08</a></p>

<div class="table-wrapper">
    <table>
        <thead><tr><th>Output</th><th>What to look for</th></tr></thead>
        <tbody>
            <tr><td>Spatial-aggregation result</td><td>Each point now carries a <code>unit_id</code> attribute.</td></tr>
            <tr><td>Temporal-aggregation result</td><td>New <code>season</code> column (Spring / Summer / Autumn / Winter).</td></tr>
            <tr><td>Interpolated time series</td><td>Gaps filled; units with &lt;10 points excluded.</td></tr>
            <tr><td>Mann-Kendall results</td><td>Kendall's Tau per unit - <strong>negative = darkening</strong>.</td></tr>
            <tr><td><code>map_shape_file_points.html</code></td><td>Click the 👁 eye → "Open in new tab" - units coloured by trend.</td></tr>
            <tr><td>Bar chart of Kendall's Tau</td><td>Negative bars = decreasing transparency.</td></tr>
        </tbody>
    </table>
</div>

### Example findings (from the video)

Significant **negative trends** found in **LAT-003 (Summer)**, **LAT-004 (Summer)**, and **LAT-005 (Autumn)** - all Latvian coastline units. **LAT-005** covers the Daugava River outflow near Riga, consistent with the catchment-runoff hypothesis.

---

## ✅ Key takeaways

- Two data import paths: **smooth (OGC API)** for AquaINFRA-hosted data, **manual (Insert URL)** for providers with disclaimers like HELCOM.
- **Rename inputs to `points` and `regions`** before running - saves errors at the run-form step.
- Workflow parameters have sensible defaults; tighten `min_points_per_unit` for more confidence per unit.
- Map outputs are HTML files - open them in a new tab via the eye icon.
- Negative Kendall's Tau = water transparency decreasing.

---

## Troubleshooting

- **Red status on import** → re-accept disclaimers and copy a fresh URL. See [FAQ]({{ relative_root }}reference/faq).
- **Workflow stuck on orange >10 min** → refresh; check [Galaxy status](https://status.galaxyproject.org/).
- **No results** → verify both inputs imported green and are renamed exactly as the workflow expects.

---

<div class="sequence-navigation">
    <a href="./06_workflow_concept" class="btn-seq btn-seq--prev">← Previous: Workflow Concept</a>
    <a href="./08_workflow_details" class="btn-seq btn-seq--next">Next Chapter: Workflow Details →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
