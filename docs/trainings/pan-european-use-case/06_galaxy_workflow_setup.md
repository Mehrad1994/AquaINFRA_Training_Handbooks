---
layout: default
title: Galaxy Workflow Setup
parent: Pan-European Biodiversity Use Case
nav_order: 6
---

# Galaxy workflow setup

<p class="chapter-meta">
  <strong>~1 min read</strong> · <strong>2.5 min video</strong> · Chapter 6 of 10
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul>
        <li>Where the workflow and the input data each come from.</li>
        <li>The import gotcha (copy the URL, don't download).</li>
        <li>What the status colours mean.</li>
    </ul>
</div>

> [!IMPORTANT]
> Sign in to your <a href="{{ relative_root }}reference/prerequisites">Aqua Galaxy account</a> first - imports aren't saved otherwise.

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=792&end=941" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p class="chapter-meta">📍 <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=792s" target="_blank" rel="noopener">Jump to 13:12 → 15:41 in YouTube</a>.</p>

---

## Key points

- **Two sources:** the **workflow** comes from the AIP (D2KP → VRE section → Galaxy → **Import**); the **input data** (a GeoJSON area of interest) comes from the D2KP **Datasets → Zenodo**.
- **Import gotcha:** **copy the Zenodo download link, don't download the file** - paste it into **Import to Galaxy** so it streams straight in.
- **Status colours:** Grey = queued · Orange = running · Green = done · Red = error.
- Wait for the GeoJSON to go **green**, then **Run** the workflow with it as the area-of-interest input.

<details>
<summary><strong>Step-by-step</strong></summary>

1. **Workflow:** D2KP page → **Galaxy** (VRE section) → **Import** → confirm you're logged in (username top-right).
2. **Data:** D2KP **Datasets** → **Zenodo** → right-click the GeoJSON link → **Copy link address** → back on the D2KP page choose **Aqua Galaxy** → paste into **Import to Galaxy** → **Import**.
3. When the GeoJSON is green, **Run** the workflow and select it as the area-of-interest input.

</details>

---

## ✅ Key takeaways

- Workflow from **AIP**; demo data from **Zenodo**.
- **Copy the URL, don't download.**
- Wait for **green** before running.

---

<div class="sequence-navigation">
    <a href="./05_data_to_knowledge" class="btn-seq btn-seq--prev">← Previous: D2KP</a>
    <a href="./07_workflow_acquisition" class="btn-seq btn-seq--next">Next Chapter: Workflow Pt. 1 →</a>
</div>

<div class="wave-decoration"></div>
