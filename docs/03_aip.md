---
layout: handbook_page
nav_order: 3
title: "AIP"
---

# AquaINFRA Interaction Platform (AIP)

> [!NOTE]
> **At a Glance**
> - Search datasets across multiple providers from a single interface.
> - Subsetting spatial data graphically before importing.
> - Direct OGC API integration with Aqua Galaxy.

The **[AquaINFRA Interaction Platform (AIP)]({{ relative_root }}reference/glossary#aip)** is the search portal located at [aquainfra.dev.52north.org](https://aquainfra.dev.52north.org/).

It enables researchers to query Earth observation data, hydrographic networks, and water quality parameters across major European data providers (Zenodo, EMODnet, Copernicus Marine, HELCOM).

---

## Video Tutorial: Search-to-Analysis Workflow

Watch how to query datasets, apply spatial filters, and trigger imports into Aqua Galaxy.

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/peGqhL4_iQ8?si=dLi2SsVTtmYlr6Yi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Ingestion Methods

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Workflow Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>OGC API Feature Import</strong></td>
                <td>Direct one-click import for OGC-compliant data providers. Data is subsetted on the backend server before transfer.</td>
                <td>Click <strong>Import to Galaxy</strong> directly on AIP dataset card.</td>
            </tr>
            <tr>
                <td><strong>Direct Download URL Import</strong></td>
                <td>Manual import path for datasets requiring data-usage disclaimers or external landing pages.</td>
                <td>Copy direct dataset download link &rarr; Paste into Galaxy <strong>Insert URL</strong> dialog.</td>
            </tr>
        </tbody>
    </table>
</div>

> [!TIP]
> **Session Connection**: Keep Aqua Galaxy open in an adjacent browser tab before clicking *Import to Galaxy* on AIP to ensure automatic session detection.
