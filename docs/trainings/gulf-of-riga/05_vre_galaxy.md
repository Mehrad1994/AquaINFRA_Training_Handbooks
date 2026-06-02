---
layout: default
title: Aqua Galaxy (VRE)
---

# Aqua Galaxy as the Workflow Engine

<p style="color: var(--text-muted, #5a6b7a); margin-top: -0.5rem; font-size: 0.95rem;">
  <strong>~2 min read</strong> · <strong>1.5 min video</strong> · Chapter 5 of 9
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>Where you'll run the DGA workflow - <a href="{{ relative_root }}reference/glossary#aqua-galaxy">Aqua Galaxy</a> at <code>aqua.usegalaxy.eu</code>.</li>
        <li>What makes this Galaxy server "Aqua" - tools curated for aquatic science.</li>
        <li>Why every run is reproducible by default.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=bRfKveHeRXwV9vQR&start=572&end=671" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=572s" target="_blank" rel="noopener">Jump to 9:32 → 11:11 in YouTube</a> - Introduction to the VRE.</p>

---

## Key concepts

**Aqua Galaxy** is a subdomain of the open-source Galaxy platform, adapted for aquatic sciences. Same Galaxy mechanics you may know from bioinformatics - different toolset.

### What you get out of the box

- **Tool repository** - spatial aggregation, temporal aggregation, Mann-Kendall, interpolation, OGC API connectors, and more.
- **Workflow management** - import, run, modify, version, and re-share workflows.
- **Reproducibility** - every tool version, parameter, and intermediate dataset is logged in your **history**.

> [!TIP]
> If you've used Galaxy before, the only thing new here is the **AquaINFRA-specific toolset**. The interface, history panel, and workflow editor are identical to any Galaxy server.

<details>
<summary><strong>🔬 Deep dive - exporting your history for sharing</strong></summary>

When your workflow run is complete, you can package the entire session for sharing:

1. In the History panel, click the **gear icon** (⚙) → **Export history**.
2. Choose **"Export to file"** - Galaxy bundles every dataset and the workflow into a single `.tar.gz`.
3. Anyone with the file can **Import history** on their own Galaxy and re-create your exact state.

For publication-grade sharing, prefer exporting the workflow as a **`.ga` file** and packaging it inside a D2KP - it's smaller, machine-readable, and citable via Zenodo DOI.
</details>

---

## ✅ Key takeaways

- Aqua Galaxy = standard Galaxy + AquaINFRA toolset, accessible in any browser.
- No installation needed - your "compute" runs on the AquaINFRA-hosted server.
- Reproducibility is **automatic** because the history records everything.
- For sharing, export the workflow as `.ga` and publish it inside a D2KP.

---

<div class="sequence-navigation">
    <a href="./04_d2k_package" class="btn-seq btn-seq--prev">← Previous: D2KP</a>
    <a href="./06_workflow_concept" class="btn-seq btn-seq--next">Next Chapter: Workflow Concept →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
