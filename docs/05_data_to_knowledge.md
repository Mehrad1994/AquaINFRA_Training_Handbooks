---
layout: handbook_page
nav_order: 5
title: "Data-to-Knowledge Package"
---

# Data-to-Knowledge Package (D2KP)

> [!NOTE]
> **At a Glance**
> - A D2KP bundles data, source code, workflow definitions, and container execution links.
> - Supports four interaction levels (GUI, R/Python Code, OGC Web API, MyBinder Sandbox).
> - Published on Zenodo with persistent DOIs for academic citation.

A **Data-to-Knowledge Package (D2KP)** bundles all foundational assets required to reproduce an environmental analysis end-to-end.

---

## Video Tutorial: D2KP Concepts

Learn how D2KPs structure scientific workflows for open science and FAIR data sharing.

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/sphUGI2_WlI?si=Bzd_J5h4MXKSeoQe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## The Four D2KP Execution Levels

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Execution Level</th>
                <th>Target Audience</th>
                <th>Technical Asset</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>1. Aqua Galaxy (GUI)</strong></td>
                <td>Domain researchers & policy advisors</td>
                <td>Pre-configured <code>.ga</code> Galaxy workflow.</td>
            </tr>
            <tr>
                <td><strong>2. Source Code (R / Python)</strong></td>
                <td>Data scientists & programmers</td>
                <td>Open R package / Python analytical scripts.</td>
            </tr>
            <tr>
                <td><strong>3. OGC Web API</strong></td>
                <td>Software developers & Digital Twins</td>
                <td>Automated <code>pygeoapi</code> REST execution endpoints.</td>
            </tr>
            <tr>
                <td><strong>4. Virtual Sandbox</strong></td>
                <td>Researchers needing live experimentation</td>
                <td>Containerized MyBinder RStudio / Jupyter lab.</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="diagram">
    <a href="{{ relative_root }}assets/images/d2kp-fair-architecture.jpg" target="_blank" rel="noopener">
        <img src="{{ relative_root }}assets/images/d2kp-fair-architecture.jpg" alt="D2KP Architecture Diagram showing connection between datasets, workflows, APIs, and Zenodo DOI records.">
    </a>
</div>
