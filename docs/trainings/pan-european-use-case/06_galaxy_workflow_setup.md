---
layout: default
title: Galaxy Workflow Setup
parent: Pan-European Biodiversity Use Case
nav_order: 6
---

# Chapter 6 - Galaxy Workflow Setup

<p style="color: var(--text-muted, #5a6b7a); margin-top: -0.5rem; font-size: 0.95rem;">
  <strong>~3 min read</strong> · <strong>2.5 min video</strong> · Chapter 6 of 10
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>Import the Pan-European workflow into Aqua Galaxy.</li>
        <li>Import the Area-of-Interest GeoJSON from Zenodo.</li>
        <li>Read the status colours so you know what's happening during a run.</li>
    </ul>
</div>

> [!IMPORTANT]
> Confirm an <a href="{{ relative_root }}reference/prerequisites">Aqua Galaxy account</a> first - you can't save workflow imports without being logged in.

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=792&end=941" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=792s" target="_blank" rel="noopener">Jump to 13:12 → 15:41 in YouTube</a>.</p>

---

## Step 1 - Import the workflow

1. From the D2KP page on AIP, click the **Galaxy** link in the VRE section.
2. In Galaxy, click **Import** to add the workflow to your list.
3. Verify you're **logged in** (username top-right) so the import is saved.

## Step 2 - Import the input data (GeoJSON Area of Interest)

The workflow needs a **GeoJSON polygon** defining where to query occurrences.

1. Open the **Datasets** section of the D2KP.
2. Click **Zenodo** to see the file list.
3. **Right-click** the GeoJSON download link → **Copy link address**.
4. Back on the D2KP page, choose **Aqua Galaxy** → paste the URL into **Import to Galaxy** → import.

## Status colours

<div class="callout">
    <strong>⏳ History colour key</strong><br>
    <strong>Grey</strong> = Queued · <strong>Orange</strong> = Running · <strong>Green</strong> = Complete · <strong>Red</strong> = Error
</div>

Once the workflow is imported and the GeoJSON shows green, click **Run** on the workflow, select the GeoJSON as the area-of-interest input, and wait for every step to turn green.

---

## ✅ Key takeaways

- The Galaxy workflow comes from AIP; the demo input data comes from Zenodo.
- **Copy the Zenodo URL, don't download** - the Insert URL path streams it into Galaxy directly.
- Wait for the GeoJSON to go **green** before clicking Run on the workflow.

---

<div class="sequence-navigation">
    <a href="./05_data_to_knowledge" class="btn-seq btn-seq--prev">← Previous: D2KP</a>
    <a href="./07_workflow_acquisition" class="btn-seq btn-seq--next">Next Chapter: Workflow Pt. 1 →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
