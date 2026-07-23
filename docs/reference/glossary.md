---
layout: reference_page
title: "Glossary"
---

# Glossary

Definitions of core terminology used across the AquaINFRA handbook, platform, and training modules.

> [!NOTE]
> Terminology definitions include anchor links (e.g. `../reference/glossary#d2kp`) that enable hover tooltips across all handbook chapters.

---

## Core Infrastructure & Services

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Term / Abbreviation</th>
                <th>Definition & Architectural Role</th>
            </tr>
        </thead>
        <tbody>
            <tr id="aip">
                <td><strong>AIP</strong><br><small>AquaINFRA Interaction Platform</small></td>
                <td>The central web portal at <a href="https://aquainfra.dev.52north.org/" target="_blank" rel="noopener">aquainfra.dev.52north.org</a> for discovering datasets, tools, workflows, and Data-to-Knowledge Packages. See <a href="../03_aip">AIP Chapter</a>.</td>
            </tr>
            <tr id="aqua-galaxy">
                <td><strong>Aqua Galaxy</strong></td>
                <td>The AquaINFRA-tailored Galaxy server at <a href="https://aqua.usegalaxy.eu/" target="_blank" rel="noopener">aqua.usegalaxy.eu</a> providing no-code workflow processing and analytical tools.</td>
            </tr>
            <tr id="d2kp">
                <td><strong>D2KP</strong><br><small>Data-to-Knowledge Package</small></td>
                <td>A FAIR digital package bundling datasets, workflows, source code, execution metadata, and sandbox links with a persistent Zenodo DOI. See <a href="../05_data_to_knowledge">D2KP Chapter</a>.</td>
            </tr>
            <tr id="ddas">
                <td><strong>DDAS</strong><br><small>Data Discovery & Access Service</small></td>
                <td>The backend service powering AIP search and exposing datasets through standard OGC Web APIs.</td>
            </tr>
            <tr id="eosc">
                <td><strong>EOSC</strong><br><small>European Open Science Cloud</small></td>
                <td>The European federated research environment for cross-border data sharing and cloud computing. See <a href="../01_eosc">EOSC Chapter</a>.</td>
            </tr>
            <tr id="vre">
                <td><strong>VRE</strong><br><small>Virtual Research Environment</small></td>
                <td>The conceptual framework for online analytical environments, implemented in AquaINFRA via Aqua Galaxy.</td>
            </tr>
        </tbody>
    </table>
</div>

---

## Technical & Data Standards

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Concept / Standard</th>
                <th>Technical Description</th>
            </tr>
        </thead>
        <tbody>
            <tr id="fair">
                <td><strong>FAIR Principles</strong></td>
                <td>Guidelines ensuring scientific data and workflows are <strong>Findable, Accessible, Interoperable, and Reusable</strong>.</td>
            </tr>
            <tr id="ogc">
                <td><strong>OGC Web APIs</strong></td>
                <td>Open Geospatial Consortium standards (including OGC API Features and <code>pygeoapi</code>) for spatial data querying and web process execution.</td>
            </tr>
            <tr id="mybinder">
                <td><strong>MyBinder</strong></td>
                <td>An online service that builds interactive, containerized RStudio and Jupyter environments directly from code repositories.</td>
            </tr>
            <tr id="zenodo">
                <td><strong>Zenodo</strong></td>
                <td>An open European research repository operated by CERN, used by AquaINFRA for assigning DOIs to published D2KPs.</td>
            </tr>
        </tbody>
    </table>
</div>

---

## Use-Case & Analysis Methods

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Term</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr id="secchi-depth">
                <td><strong>Secchi Depth</strong></td>
                <td>A measure of water transparency: the depth at which a standardised white disc (Secchi disk) is no longer visible from the surface. Used as a proxy for light attenuation and phytoplankton biomass in aquatic monitoring.</td>
            </tr>
            <tr id="mann-kendall">
                <td><strong>Mann-Kendall Test</strong></td>
                <td>A non-parametric statistical test for detecting monotonic trends in time-series data. It is rank-based and makes no assumption of normality, making it well-suited for environmental and hydrological datasets with seasonal variation or outliers.</td>
            </tr>
            <tr id="specleanr">
                <td><strong>specleanr</strong></td>
                <td>An R package for ensemble-based outlier detection in species occurrence datasets. It runs multiple univariate and multivariate methods simultaneously and classifies each record on a spectrum from "not an outlier" to "perfect outlier", allowing threshold-based removal before species distribution modelling.</td>
            </tr>
        </tbody>
    </table>
</div>
