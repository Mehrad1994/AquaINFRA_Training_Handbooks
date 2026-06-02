---
layout: default
title: Data-to-Knowledge Package
---
# Data-to-Knowledge Package (D2KP)

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>What a <strong><a href="{{ relative_root }}reference/glossary#d2kp">D2KP</a></strong> is and why it goes beyond "a zip of files".</li>
        <li>The four interaction levels - data, Galaxy workflow, Web API, MyBinder lab.</li>
        <li>How to find existing D2KPs and how to cite them.</li>
    </ul>
</div>

The end goal of the AquaINFRA project isn't just to do good science; it's to create science that can be verified and reused by anyone.

If a published paper is the menu, the **Data-to-Knowledge Package (D2KP)** is the recipe and the ingredients. It is the structured package that bundles your raw aquatic data, your analysis scripts, and your exact software environment together.

---

## 📽️ Video Tutorial: The D2KP Concept

Explore how D2KPs organise these resources and why they are essential for moving away from "black-box" environmental research.

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/sphUGI2_WlI?si=Bzd_J5h4MXKSeoQe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## 🏗️ Inside a D2KP

A D2KP is not just a zip file of PDFs. It is a fully functional toolkit designed to offer different interaction levels depending on what the next researcher needs:

- **The Data & Code**: Every D2KP contains direct links to the raw data sources and the foundational source code (like Python or R scripts), guaranteeing full transparency.
- **The Application (Galaxy)**: For those who want to use your methodology without writing code, the package includes a pre-configured workflow that can be executed directly in the [Galaxy interface](https://aqua.usegalaxy.eu/).
- **The Raw Engine (API)**: Developers can use the underlying **[Web API (pygeoapi)]({{ relative_root }}reference/glossary#pygeoapi)** to directly hook your analytical processes into their own custom systems or Digital Twins.
- **The Developer Sandbox**: For those who want to deeply interrogate or edit your code, they can launch a containerised **Virtual Lab (RStudio via [MyBinder]({{ relative_root }}reference/glossary#mybinder))** linked directly to your package.

---

## 🔍 Finding and using D2KPs

> [!TIP]
> **D2KP Publication**
> All official AquaINFRA workflows are released as **Data-to-Knowledge Packages (D2KP)** to provide citable records (DOIs). You can find these packages directly via the **[AIP Search Interface](https://aquainfra.dev.52north.org/)** by filtering for "Data to Knowledge Package".

> [!NOTE]
> **Interconnectivity**
> When you find a dataset on the AIP, look for the "Related Content" section on the right side. This will indicate if an associated D2KP exists, showing you exactly how that data was used in previous research.

<details>
<summary><strong>🔬 Deep dive - typical D2KP folder layout</strong></summary>

<em>The layout below is an illustrative example of how a D2KP is organised; the exact files vary by package. Check the package's own README on Zenodo for its real structure.</em>

A published D2KP on Zenodo typically contains:

```
my-d2kp/
├── README.md              ← step-by-step guide + abstract
├── CITATION.cff           ← machine-readable citation metadata
├── data/
│   ├── inputs.csv         ← or links to OGC API endpoints
│   └── data_dictionary.md
├── workflow/
│   └── pipeline.ga        ← the Galaxy workflow file
├── code/
│   ├── R/                 ← R source for each step
│   └── python/            ← Python equivalents (optional)
├── env/
│   └── environment.yml    ← reproducible conda/R env
└── binder/
    └── postBuild          ← MyBinder configuration
```

The key idea: a reader can choose **their preferred level of engagement** - run the Galaxy workflow as-is, hit the OGC API from their own script, or open the MyBinder lab to edit the code live.

</details>

---

## ✅ Key takeaways

- A **D2KP** bundles data, workflow, code, environment, and docs into a single citable package.
- Each D2KP exposes **four interaction paths**: data/code, Galaxy workflow, Web API, MyBinder lab - pick what matches your skill level.
- D2KPs are published on **Zenodo with a DOI** - cite them like any other research output.
- Find D2KPs via the **AIP search** by filtering for "Data to Knowledge Package."

---

<!-- Navigation Buttons -->

<div class="sequence-navigation">
    <a href="{{ relative_root }}04_aquainfra_vre" class="btn-seq btn-seq--prev">← Previous: VRE</a>
    <a href="{{ relative_root }}06_use_cases" class="btn-seq btn-seq--next">Next Step: Applied Use Case Training →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
