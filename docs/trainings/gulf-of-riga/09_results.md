---
layout: default
title: Results & Conclusion
---

# Findings & what's next

<p class="chapter-meta">
  <strong>~2 min read</strong> · <strong>4 min video</strong> · Chapter 9 of 9
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul>
        <li>The answer to the darkening question.</li>
        <li>How to read the result, and where the signal is.</li>
        <li>How to reuse the workflow, and the open questions next.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=bRfKveHeRXwV9vQR&start=1507" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p class="chapter-meta">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1507s" target="_blank" rel="noopener">Jump to 25:07 → end in YouTube</a> - results and conclusions.</p>

---

## Key points

- **Darkening confirmed.** Across ~30 years of Secchi data, three units show **significant negative** Kendall's Tau - transparency is **decreasing**. The divers were right.
- **Where:** summer at **LAT-003** and **LAT-004**, autumn at **LAT-005** - all on the Latvian coastline. **LAT-005** covers the **Daugava catchment near Riga**, pointing at a land/runoff driver.
- **How to read it:** in the bar chart, significant units (**p < 0.05**) are **solid**; translucent bars are not significant. Negative Tau = darkening.

<div class="callout callout--info">
    <strong>Reuse it:</strong> on the run page, <strong>Expand to full workflow</strong> to swap in your own compatible dataset and adjust any step's parameters (e.g. the missing-data threshold or minimum points). The workflow is generic - rerun it for the Gulf of Finland, or for another variable like temperature. Each OGC API process is reusable standalone and compatible with the <strong>Digital Twin of the Ocean</strong>.
</div>

## What's next

The workflow answered **what** is happening; the team's follow-ups are about **why**:

- Which optical components (CDOM, suspended sediment, chlorophyll) drive the change?
- Are riverine loads/concentrations changing in the rivers discharging into the gulf?
- Which pressures - land use, climate change - most affect the optics, and which socioeconomic drivers sit behind them?

<details>
<summary><strong>What "significant" means here</strong></summary>

At `alpha = 0.05`, a unit is flagged when **p < 0.05** - less than a 5% chance of seeing that strong a monotonic pattern under "no trend". A negative Tau around −0.4 with p < 0.01 (typical of the strongest units) is a robust decade-scale darkening signal - but it doesn't prove a cause, which is why the follow-ups matter.

</details>

---

## ✅ Key takeaways

- **Darkening confirmed**: significant negative trends in three Latvian coastal units.
- **Strongest near the Daugava outflow** - catchment processes are the prime suspect.
- **Transferable**: same workflow, different region or variable.
- Cite via the **D2KP DOI** - see <a href="https://aquainfra.dev.52north.org/result/zenodo:17175368" target="_blank" rel="noopener">the Gulf of Riga D2KP</a>.

---

<div class="sequence-navigation">
    <a href="./08_workflow_details" class="btn-seq btn-seq--prev">← Previous: Workflow Details</a>
    <a href="./" class="btn-seq btn-seq--next">Back to Training Overview →</a>
</div>

<div class="wave-decoration"></div>
