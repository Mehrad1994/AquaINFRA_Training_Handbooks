---
layout: default
title: Introduction
---

# Chapter 1 - Introduction to AquaINFRA

<p style="color: var(--text-muted, #5a6b7a); margin-top: -0.5rem; font-size: 0.95rem;">
  <strong>~2 min read</strong> · <strong>2 min video</strong> · Chapter 1 of 9
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>What the <strong>AquaINFRA project</strong> is and the problem it solves.</li>
        <li>Why <strong>FAIR</strong> data and the <strong>European Open Science Cloud (EOSC)</strong> matter for aquatic research.</li>
        <li>Who the handbook is for and how the rest of this case study is organised.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=bRfKveHeRXwV9vQR&start=0&end=118" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th style="width: 22%;">Timestamp</th>
                <th>Topic</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=0s" target="_blank" rel="noopener">0:00 → 0:45</a></td>
                <td>Welcome and project context</td>
            </tr>
            <tr>
                <td><a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=45s" target="_blank" rel="noopener">0:45 → 1:30</a></td>
                <td>FAIR data and the AquaINFRA mission</td>
            </tr>
            <tr>
                <td><a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=90s" target="_blank" rel="noopener">1:30 → 1:58</a></td>
                <td>How the case study is structured</td>
            </tr>
        </tbody>
    </table>
</div>

> [!TIP]
> Already watched the video? Skim **Key concepts** and **Key takeaways** below - that is the fastest way to refresh what you learned.

---

## Key concepts

### What AquaINFRA is
AquaINFRA is building a **virtual research environment** that gives marine and freshwater scientists one place to find data, run analyses, and share reproducible workflows. The aim is to make research on healthy oceans, seas, coasts, and inland waters faster and more open.

### Why FAIR
All data and services in AquaINFRA follow **FAIR principles** - they must be **F**indable, **A**ccessible, **I**nteroperable, and **R**eusable. Practically, that means a dataset you discover through AquaINFRA has standard metadata, an open-access endpoint, and a clear licence - so you can re-use it in your own analysis without guesswork.

### Where EOSC fits
The **European Open Science Cloud (EOSC)** is the wider European research-data ecosystem. AquaINFRA plugs into EOSC so that aquatic datasets are visible alongside other domains, and so that the tools researchers use here interoperate with services across Europe.

### What you can do inside AquaINFRA
- **Store, share, and access** research data across institutional and national borders.
- **Analyse and process** datasets without installing software locally - using the **VRE** (Virtual Research Environment, powered by Galaxy).
- **Collaborate** across the marine ↔ freshwater divide, which has historically been siloed.

<details>
<summary><strong>🔬 Deep dive - the three pillars you'll meet in this case study</strong></summary>

Across the remaining chapters you'll work hands-on with three AquaINFRA components. Knowing the role of each up front makes the rest of the handbook easier to navigate:

| Component | What it is | Where you'll meet it |
|---|---|---|
| **AIP** - AquaINFRA Interaction Platform | A unified web portal that lets you search for datasets, tools, and workflows across many providers (Zenodo, DDAS, OGC services, …) from one interface. | Chapter 3 |
| **D2KP** - Data-to-Knowledge Package | A bundle that ties together the *dataset(s)*, *workflow*, *code*, and *documentation* needed to reproduce a specific analysis end-to-end. | Chapter 4 |
| **VRE / Aqua Galaxy** | A browser-based Galaxy server (`aqua.usegalaxy.eu`) where you actually execute workflows on the data - no local installation. | Chapters 5-8 |

If you're new to Galaxy: it's a workflow engine that chains analysis "tools" into reproducible pipelines, with every input, parameter, and output tracked. You don't need to know it deeply to follow this case study.

</details>

---

## ✅ Key takeaways

- AquaINFRA = **virtual environment + FAIR data + shared workflows** for aquatic science.
- The project plugs into **EOSC** so its work is discoverable across European research infrastructures.
- This case study (Gulf of Riga) will walk you end-to-end through the **AIP → D2KP → VRE** chain to answer a real research question about water transparency.

---

<div class="sequence-navigation">
    <a href="./" class="btn-seq btn-seq--prev">← Overview</a>
    <a href="./02_case_study" class="btn-seq btn-seq--next">Next Chapter: Case Study →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
