---
layout: default
title: AIP
---
# AquaINFRA Interaction Platform (AIP)

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>What the <strong><a href="{{ relative_root }}reference/glossary#aip">AIP</a></strong> does and how it relates to <a href="{{ relative_root }}reference/glossary#ddas">DDAS</a> behind the scenes.</li>
        <li>The two import paths into Galaxy: smooth (OGC API) vs. manual (insert URL).</li>
        <li>How to subset data visually before importing - saving bandwidth and time.</li>
    </ul>
</div>

EOSC provides the raw computational power; the **[AquaINFRA Interaction Platform (AIP)]({{ relative_root }}reference/glossary#aip)** is the specialised map that helps you find the exact aquatic data you need.

Instead of scouring different national databases, the AIP lets you search Earth observations and European hydrography in one place, and then pipe that data directly into a high-performance analysis environment.

---

## 📽️ Video tutorial: getting started

This walkthrough shows you exactly how to use the AIP interface. It covers searching for relevant datasets, subsetting them graphically, and importing them straight into your Galaxy history.

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/peGqhL4_iQ8?si=dLi2SsVTtmYlr6Yi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## 🛠️ The search-to-analysis workflow

The core strength of the **[AquaINFRA Interaction Platform](https://aquainfra.dev.52north.org/)** is that you never have to download massive environmental datasets to your own computer.

### 1. The seamless route (OGC API)

> [!TIP]
> **Before you start**
> Make sure you are already logged into the Galaxy platform in another tab.
This allows the AIP to find your active session.

When you find a dataset on the AIP hosted as an **OGC API Feature service**, the workflow is incredibly smooth:

1. Visually subset the data on the map (e.g., drawing a polygon around a specific coastline).
2. Click **"Import to Galaxy"**.
3. In Galaxy, use the dedicated **AquaINFRA OGC API processes** tool to map that data URL to backend operations like `points_at_polygon`.

Because the data is processed on the backend servers, you avoid heavy data transfers and get straight to analysing your results.

### 2. The manual detour

Not all data partners support direct API ingestion yet. If you find a dataset you want but the "Import to Galaxy" button is missing:

> [!NOTE]
> **Bridging the Gap**
>
> 1. Visit the dataset's external metadata page and copy the direct download link (e.g., ending in `.zip`).
> 2. Look for the **"Insert URL"** option on the AIP interface. Pasting the link here will manually bridge the external file into your Galaxy environment.

<details>
<summary><strong>🔬 Deep dive - what an OGC API Features request looks like</strong></summary>

<em>The endpoint path and parameters below are an illustrative example. Copy the exact request from the AIP "Import to Galaxy" dialog for the dataset you are using.</em>

When you visually draw a bounding box on AIP and click "Import to Galaxy," DDAS builds a URL like:

```
https://aquainfra.dev.52north.org/dasas/collections/secchi/items
  ?bbox=21.5,57.3,24.8,58.9
  &limit=5871
  &f=geojson
```

That URL is what gets handed to Galaxy. You can hit it directly from any HTTP client (curl, requests, R `httr`, …) to integrate AquaINFRA datasets into your own scripts:

```bash
curl "https://aquainfra.dev.52north.org/dasas/collections/secchi/items?bbox=21.5,57.3,24.8,58.9&limit=100&f=geojson"
```

This is what makes the data **FAIR-by-construction**: anyone with the URL can reproduce the exact slice you used.

</details>

---

## ✅ Key takeaways

- AIP is the **single search interface** spanning many aquatic data providers.
- Prefer the **OGC API path** when it's offered - no manual downloads, easy spatial subsetting.
- For datasets requiring disclaimers (e.g. HELCOM), use **Insert URL** after accepting on the source site.
- AIP works without an account for browsing; running workflows still needs an [Aqua Galaxy account]({{ relative_root }}reference/prerequisites).

---

<!-- Navigation Buttons -->

<div class="sequence-navigation">
    <a href="{{ relative_root }}02_aquainfra" class="btn-seq btn-seq--prev">← Previous: Introduction AquaINFRA</a>
    <a href="{{ relative_root }}04_aquainfra_vre" class="btn-seq btn-seq--next">Next Step: VRE →</a>
</div>

<div class="wave-decoration"></div>
