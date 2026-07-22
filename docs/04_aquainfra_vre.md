---
layout: handbook_page
nav_order: 4
title: "AquaINFRA VRE"
---

# The AquaINFRA Virtual Research Environment

> [!NOTE]
> **At a Glance**
> - The VRE is implemented online as **Aqua Galaxy** (`aqua.usegalaxy.eu`).
> - Cloud-hosted analytical platform supporting no-code workflows, R, and Python.
> - Automated history logging ensures full reproducibility.

The **AquaINFRA Virtual Research Environment (VRE)** is a cloud-based analytical platform tailored for aquatic data modelling.

---

## Video Tutorial: VRE Overview

Watch how the VRE handles data ingestion, workflow execution, and dataset visualization.

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/fdnxH0Lnirs?si=oZxdpCn9xabOB_vH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Interface Layout Overview

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Panel Region</th>
                <th>Interface Content</th>
                <th>Primary Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Left - Tools Panel</strong></td>
                <td>Searchable catalogue of domain processing tools and models.</td>
                <td>Select tool, configure inputs, click <strong>Run</strong>.</td>
            </tr>
            <tr>
                <td><strong>Center - Working Canvas</strong></td>
                <td>Active tool forms, workflow editor, or dataset visualization.</td>
                <td>Configure parameters and inspect intermediate outputs.</td>
            </tr>
            <tr>
                <td><strong>Right - History Panel</strong></td>
                <td>Chronological log of inputs, tools, and outputs.</td>
                <td>Track job status (grey &rarr; green/red), preview maps.</td>
            </tr>
        </tbody>
    </table>
</div>

> [!TIP]
> **Reproducibility**: Every action is automatically recorded in your History panel, allowing you to export your entire analysis as a reusable `.ga` workflow file.
