---
layout: default
title: Aqua Galaxy (VRE)
---

# Aqua Galaxy as the workflow engine

<p class="chapter-meta">
  <strong>~1 min read</strong> · <strong>1.5 min video</strong> · Chapter 5 of 9
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul>
        <li>Where you'll run the workflow - <a href="{{ relative_root }}reference/glossary#aqua-galaxy">Aqua Galaxy</a> at <code>aqua.usegalaxy.eu</code>.</li>
        <li>What makes this Galaxy server "Aqua".</li>
        <li>Why every run is reproducible by default.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=bRfKveHeRXwV9vQR&start=572&end=671" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p class="chapter-meta">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=572s" target="_blank" rel="noopener">Jump to 9:32 → 11:11 in YouTube</a> - the VRE.</p>

---

## Key points

- **Aqua Galaxy** is a subdomain of the open-source Galaxy platform, curated for aquatic science - same mechanics, different toolset.
- Out of the box you get the **AquaINFRA tools** (spatial/temporal aggregation, interpolation, Mann-Kendall, OGC API connectors), full **workflow management** (import, run, modify, version, share), and a per-run **history**.
- **Reproducibility is automatic:** the history logs every tool version, parameter, and intermediate dataset.
- **Stay signed in** - that's what lets you import the workflow and most AquaINFRA datasets straight into your environment.

<details>
<summary><strong>Exporting your session for sharing</strong></summary>

1. History panel → **gear icon** → **Export history** → **"Export to file"** bundles every dataset + the workflow into one `.tar.gz`; anyone can **Import history** to recreate your state.
2. For publication, prefer exporting the workflow as a **`.ga` file** and publishing it inside a D2KP - smaller, machine-readable, citable via DOI.

</details>

---

## ✅ Key takeaways

- Aqua Galaxy = standard Galaxy + AquaINFRA toolset, in any browser, no install.
- The **history** records everything, so runs are reproducible by default.
- Stay signed in to import the workflow and datasets directly.

---

<div class="sequence-navigation">
    <a href="./04_d2k_package" class="btn-seq btn-seq--prev">← Previous: D2KP</a>
    <a href="./06_workflow_concept" class="btn-seq btn-seq--next">Next Chapter: Workflow Concept →</a>
</div>

<div class="wave-decoration"></div>
