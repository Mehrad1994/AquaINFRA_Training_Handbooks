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
            <tr id="edugain">
                <td><strong>eduGAIN</strong></td>
                <td>An international authentication federation allowing researchers to access scientific services using their home institution credentials.</td>
            </tr>
            <tr id="eosc">
                <td><strong>EOSC</strong><br><small>European Open Science Cloud</small></td>
                <td>The European federated research environment for cross-border data sharing and cloud computing. See <a href="../01_eosc">EOSC Chapter</a>.</td>
            </tr>
            <tr id="eosc-eu-node">
                <td><strong>EOSC EU Node</strong></td>
                <td>The operational cloud platform of the European Open Science Cloud providing browser-based analytical tools, federated compute credits, and collaborative workspaces.</td>
            </tr>
            <tr id="eu-login">
                <td><strong>EU Login</strong></td>
                <td>The European Commission's single sign-on user authentication service supporting access to European digital platforms and services.</td>
            </tr>
            <tr id="pygeoapi">
                <td><strong>pygeoapi</strong></td>
                <td>An open-source Python server implementation of OGC API standards, used to expose analytical processes and spatial datasets as RESTful endpoints.</td>
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
            <tr id="corine-land-cover">
                <td><strong>CORINE Land Cover</strong><br><small>CLC</small></td>
                <td>A standardised European inventory categorising land cover and land use into thematic classes based on satellite observations.</td>
            </tr>
            <tr id="earth-observation">
                <td><strong>Earth Observation</strong><br><small>EO</small></td>
                <td>The collection of physical, chemical, and biological measurements of Earth via satellite remote sensing, aircraft, and in-situ monitoring networks.</td>
            </tr>
            <tr id="fair">
                <td><strong>FAIR Principles</strong></td>
                <td>Guidelines ensuring scientific data and workflows are <strong>Findable, Accessible, Interoperable, and Reusable</strong>.</td>
            </tr>
            <tr id="mybinder">
                <td><strong>MyBinder</strong></td>
                <td>An online service that builds interactive, containerised RStudio and Jupyter environments directly from code repositories.</td>
            </tr>
            <tr id="ogc">
                <td><strong>OGC Web APIs</strong></td>
                <td>Open Geospatial Consortium standards (including OGC API Features and <code>pygeoapi</code>) for spatial data querying and web process execution.</td>
            </tr>
            <tr id="sentinel-3">
                <td><strong>Sentinel-3 / OLCI</strong></td>
                <td>A European Space Agency Earth Observation satellite equipped with the Ocean and Land Colour Instrument (OLCI) for ocean color and sea surface monitoring.</td>
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
            <tr id="cdom">
                <td><strong>CDOM</strong><br><small>Colored Dissolved Organic Matter</small></td>
                <td>The optically active fraction of dissolved organic carbon in water that absorbs light strongly in the blue and ultraviolet spectrum, giving natural water a yellowish tint.</td>
            </tr>
            <tr id="copernicus-marine">
                <td><strong>Copernicus Marine Service</strong><br><small>CMEMS</small></td>
                <td>The EU Earth observation service providing free oceanographic datasets, sea surface temperatures, and marine biogeochemical forecasts.</td>
            </tr>
            <tr id="dapsim">
                <td><strong>DAPSIM Framework</strong></td>
                <td>An environmental policy and management framework (Drivers, Activities, Pressures, States, Impacts, Measures) linking human drivers to ecosystem health and management measures.</td>
            </tr>
            <tr id="dto">
                <td><strong>Digital Twin of the Ocean</strong><br><small>EU DTO</small></td>
                <td>High-resolution digital representations of the marine environment combining multi-source data and predictive models for ocean forecasting and decision support.</td>
            </tr>
            <tr id="emodnet">
                <td><strong>EMODnet</strong><br><small>European Marine Observation and Data Network</small></td>
                <td>A network of marine organisations providing unified access to European marine data across bathymetry, biology, geology, and chemistry.</td>
            </tr>
            <tr id="estuarine-turbidity-maximum">
                <td><strong>Estuarine Turbidity Maximum</strong><br><small>ETM</small></td>
                <td>A zone within an estuary characterised by significantly elevated suspended sediment concentrations trapped by tidal forces and density-driven circulation.</td>
            </tr>
            <tr id="eutrophication">
                <td><strong>Eutrophication</strong></td>
                <td>The over-enrichment of water bodies with nutrients (nitrogen, phosphorus), leading to dense algal blooms, reduced light penetration, and risk of hypoxia.</td>
            </tr>
            <tr id="ferrybox">
                <td><strong>FerryBox</strong></td>
                <td>An automated oceanographic monitoring system installed on commercial ferries and cargo vessels to continuously measure surface water properties along fixed maritime routes.</td>
            </tr>
            <tr id="flash-flood">
                <td><strong>Flash Flood</strong></td>
                <td>A sudden, high-volume surface water flow caused by intense rainfall over a short duration, driving heavy sediment and terrestrial nutrient loads into rivers and coastal waters.</td>
            </tr>
            <tr id="helcom">
                <td><strong>HELCOM</strong><br><small>Helsinki Commission</small></td>
                <td>The Baltic Marine Environment Protection Commission, an intergovernmental organisation working to protect the marine environment of the Baltic Sea.</td>
            </tr>
            <tr id="hypoxia">
                <td><strong>Hypoxia</strong></td>
                <td>A low oxygen condition in aquatic environments (dissolved oxygen below 2–3 mg/L), impairing fish survival and benthic macro-invertebrate communities.</td>
            </tr>
            <tr id="land-sea-continuum">
                <td><strong>Land-Sea Continuum</strong></td>
                <td>The interconnected hydrological and ecological system spanning inland river catchments, estuaries, coastal zones, and open marine waters.</td>
            </tr>
            <tr id="mann-kendall">
                <td><strong>Mann-Kendall Test</strong></td>
                <td>A non-parametric statistical test for detecting monotonic trends in time-series data. It is rank-based and makes no assumption of normality, making it well-suited for environmental and hydrological datasets with seasonal variation or outliers.</td>
            </tr>
            <tr id="optical-water-types">
                <td><strong>Optical Water Types</strong><br><small>OWTs</small></td>
                <td>A classification scheme that categorises natural water bodies based on their spectral reflectance properties (e.g. clear, turbid, CDOM-rich, algae-dominated).</td>
            </tr>
            <tr id="plc">
                <td><strong>Pollution Load Compilation</strong><br><small>PLC</small></td>
                <td>A HELCOM monitoring framework for measuring and reporting land-based nutrient and pollutant discharges into Baltic Sea sub-basins.</td>
            </tr>
            <tr id="poc">
                <td><strong>Particulate Organic Carbon</strong><br><small>POC</small></td>
                <td>The fraction of organic carbon bound in particles suspended in the water column, vital for marine carbon cycling analysis.</td>
            </tr>
            <tr id="psu">
                <td><strong>Practical Salinity Unit</strong><br><small>PSU</small></td>
                <td>A dimensionless unit expressing water salinity based on electrical conductivity measurements relative to a standard solution.</td>
            </tr>
            <tr id="saltwater-intrusion">
                <td><strong>Saltwater Intrusion</strong></td>
                <td>The displacement of fresh groundwater by saline seawater in coastal aquifers, often caused by groundwater over-extraction or rising sea levels.</td>
            </tr>
            <tr id="secchi-depth">
                <td><strong>Secchi Depth</strong></td>
                <td>A measure of water transparency: the depth at which a standardised white disc (Secchi disk) is no longer visible from the surface. Used as a proxy for light attenuation and phytoplankton biomass in aquatic monitoring.</td>
            </tr>
            <tr id="specleanr">
                <td><strong>specleanr</strong></td>
                <td>An R package for ensemble-based outlier detection in species occurrence datasets. It runs multiple univariate and multivariate methods simultaneously and classifies each record on a spectrum from "not an outlier" to "perfect outlier", allowing threshold-based removal before species distribution modelling.</td>
            </tr>
            <tr id="submarine-groundwater-discharge">
                <td><strong>Submarine Groundwater Discharge</strong><br><small>SGD</small></td>
                <td>The direct flow of subterranean groundwater from coastal land aquifers into marine or estuarine waters.</td>
            </tr>
        </tbody>
    </table>
</div>
