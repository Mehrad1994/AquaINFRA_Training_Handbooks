---
layout: default
title: Hands-On Tutorial
---

# Hands-on: running the Gulf of Riga workflow

<p class="chapter-meta">
  <strong>~3 min read</strong> · <strong>9 min video</strong> · Chapter 7 of 9
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul>
        <li>The two import paths - one-click (Secchi points) vs manual disclaimer (HELCOM).</li>
        <li>The handful of settings that actually matter when you run it.</li>
        <li>A full click-by-click walkthrough, kept collapsed for when you need it.</li>
    </ul>
</div>

> [!IMPORTANT]
> **Before you start:** confirm you have an <a href="{{ relative_root }}reference/prerequisites">Aqua Galaxy account</a> and that you can see your username top-right at <code>aqua.usegalaxy.eu</code>.

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=bRfKveHeRXwV9vQR&start=738&end=1289" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p class="chapter-meta">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=738s" target="_blank" rel="noopener">Jump to 12:18 → 21:29 in YouTube</a> - import, run, monitor.</p>

---

## Key points

The video shows every click. These are the things worth remembering when you run it yourself:

- **Two import paths.** The Secchi points are AquaINFRA-hosted, so import is **one click** (OGC API). The HELCOM polygons need you to **accept a disclaimer first**, then import by URL.
- **HELCOM gotcha.** After accepting the disclaimer, **copy the activated link - do not download the file**, and paste it into **Insert URL**. Skip the disclaimer and you get a broken URL and a red dataset.
- **Use the full dataset.** Set **Number of Points = `5,871`**. Galaxy never copies the data - it stores the access URL and the OGC process fetches the data when the workflow runs.
- **Rename before running.** Rename the two inputs to **`points`** and **`regions`** so the run form is unambiguous.
- **Run it.** Workflows → *Gulf of Riga DGA Workflow* → Run → pick `points` and `regions` → Run workflow. Use **Expand to full workflow** to change any step's parameters.
- **Status colours.** Grey = queued · Orange = running · Green = done · Red = error.
- **Open the map output.** Outputs are text files that link to the real results (CSV/HTML). The map is HTML - open it via the **👁 eye → "Open in new tab"**.

<div class="callout callout--info">
    <strong>What the result means:</strong> in the Mann-Kendall output, <strong>negative Kendall's Tau = transparency decreasing (darkening)</strong>. In the bar chart, significant units (p &lt; 0.05) are solid; translucent bars are not significant.
</div>

<details>
<summary><strong>Full click-by-click walkthrough</strong></summary>

### Step 1.1 - Secchi depth points (smooth OGC API path) {#step-1-1}

<p class="chapter-meta">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=769s" target="_blank" rel="noopener">12:49 → 15:19</a></p>

1. On the AIP, open the **Data-to-Knowledge Package** page → click **"Latvian Secchi depth and water color"**.
2. Choose the **AquaINFRA dataset page** (not the direct download, not Zenodo).
3. Click **"Import to Galaxy"** - the **OGC API Features subsetting window** opens.
4. Configure: **Bounding Box** = default (full coverage); **Number of Points** = `5871`; **Query Parameters** = empty.
5. Click **Regenerate**, then **Import**. You're redirected to Aqua Galaxy.
6. In the **History panel**, watch the status (grey → orange → green; red = error).
7. **Rename** the dataset (pencil icon) to `points`.

### Step 1.2 - HELCOM regions (manual path with disclaimer) {#step-1-2}

<p class="chapter-meta">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=919s" target="_blank" rel="noopener">15:19 → 19:51</a></p>

1. From the D2KP page, click **"HELCOM subbasins"** → **"AquaINFRA"** → **"Visit"** to reach HELCOM's site.
2. Open the **direct download link** in a new tab and **accept the data-usage disclaimer**. Wait until the link activates - but **do not download**.
3. **Copy the activated URL**, return to the AIP dataset page, paste into **Insert URL** → **Import**.
4. Wait for green, then rename the dataset to `regions`.

### Step 2 - Import the workflow {#step-2}

<p class="chapter-meta">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1191s" target="_blank" rel="noopener">19:51 → 21:29</a></p>

- **From AIP (recommended):** D2KP page → **"Galaxy"** → on the preview page, **Import** → **Start using this workflow**.
- **Manual `.ga` upload:** Aqua Galaxy → **Workflows** → **Import** → upload the `.ga` from the [Zenodo D2KP page](https://aquainfra.dev.52north.org/result/zenodo:17175368).

### Step 3 - Run, monitor, review {#step-3}

<p class="chapter-meta">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1289s" target="_blank" rel="noopener">21:29 → 29:08</a></p>

1. **Workflows** → *Gulf of Riga DGA Workflow* → **Run** → set Input 1 = `points`, Input 2 = `regions` → **Run Workflow**.
2. Monitor on the progress page (interactive graph + history). Runtime is a few minutes; stuck on grey >15 min? See the [FAQ]({{ relative_root }}reference/faq).
3. Review outputs via the 👁 eye icon:

<div class="table-wrapper">
    <table>
        <thead><tr><th>Output</th><th>What to look for</th></tr></thead>
        <tbody>
            <tr><td>Spatial aggregation</td><td>Each point gains a <code>unit_id</code>.</td></tr>
            <tr><td>Temporal aggregation</td><td>New <code>season</code> column.</td></tr>
            <tr><td>Interpolated series</td><td>Gaps filled; units with &lt;10 points excluded.</td></tr>
            <tr><td>Mann-Kendall</td><td>Kendall's Tau per unit - negative = darkening.</td></tr>
            <tr><td><code>map_shape_file_points.html</code></td><td>Eye → "Open in new tab" - units coloured by trend.</td></tr>
            <tr><td>Tau bar chart</td><td>Solid bars = significant; translucent = not.</td></tr>
        </tbody>
    </table>
</div>

#### Parameters you can change

<em>The names below are illustrative; the exact labels on the run form may differ. The behaviour is what matters.</em>

| Parameter | Default | Effect |
|---|---|---|
| `min_points_per_unit` | 10 | Units with fewer points are excluded (insufficient sample). |
| `max_missing_fraction` | 0.8 | Units missing >80% of the time series are excluded. |
| `interpolation_method` | linear | Fills gaps before Mann-Kendall. |
| `significance_alpha` | 0.05 | p-value threshold for flagging significant trends. |

</details>

---

## ✅ Key takeaways

- Two import paths: **one-click OGC API** for AquaINFRA data, **manual Insert URL** for disclaimer providers like HELCOM.
- **Rename inputs to `points` / `regions`** before running.
- Galaxy passes the **access URL**, not the data itself.
- Map outputs are HTML - open them via the eye icon.
- **Negative Kendall's Tau = transparency decreasing.**

---

## Troubleshooting

- **Red status on import** → re-accept the disclaimer and copy a fresh URL. See [FAQ]({{ relative_root }}reference/faq).
- **Stuck on orange >10 min** → refresh; check [Galaxy status](https://status.galaxyproject.org/).
- **No results** → verify both inputs are green and renamed exactly as the workflow expects.

---

<div class="sequence-navigation">
    <a href="./06_workflow_concept" class="btn-seq btn-seq--prev">← Previous: Workflow Concept</a>
    <a href="./08_workflow_details" class="btn-seq btn-seq--next">Next Chapter: Workflow Details →</a>
</div>

<div class="wave-decoration"></div>
