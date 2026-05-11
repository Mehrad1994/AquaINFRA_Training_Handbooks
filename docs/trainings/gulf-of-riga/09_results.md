---
layout: default
title: Results & Conclusion
---

# Chapter 9 — Findings & What's Next

<p style="color: var(--text-muted, #5a6b7a); margin-top: -0.5rem; font-size: 0.95rem;">
  <strong>~3 min read</strong> · <strong>4 min video</strong> · Chapter 9 of 9
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>What the 30-year analysis told us about the darkening hypothesis.</li>
        <li>Where the strongest signals are — and which catchment they point to.</li>
        <li>Open questions for future AquaINFRA work.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/lfGLnLyqaIs?si=bRfKveHeRXwV9vQR&start=1507" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p style="color: var(--text-muted, #5a6b7a); font-size: 0.9rem;">📍 <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1507s" target="_blank" rel="noopener">Jump to 25:07 → end in YouTube</a> — Results summary and conclusions.</p>

---

## Key findings

The DGA workflow processed **~30 years of historical Secchi-depth measurements** and ran a Mann-Kendall trend test per assessment unit per season.

### The "water darkening" hypothesis: confirmed

- **Direction**: significant **negative** trends in Kendall's Tau across multiple units.
- **Interpretation**: water transparency is **decreasing** — the divers were right.
- **Spatial pattern**: trend strongest in the **eastern coastal regions** of the Gulf of Riga, particularly **LAT-005** which includes the Daugava River outflow.

The qualitative observation ("water looks darker") became a quantitative, statistically significant result — exactly the kind of "data-to-knowledge" translation AquaINFRA was built to enable.

---

## Future research questions

The workflow established **what** is happening. The natural follow-ups are about **why** and **where else**:

1. **Drivers** — which optical components (CDOM, suspended sediment, chlorophyll) drive the darkening signal?
2. **Catchment linkage** — how do land-use changes and runoff in the **Daugava River catchment** translate to coastal optical changes? This needs a paired terrestrial + marine analysis.
3. **Scalability** — does this workflow produce comparable findings in the **North Sea**, **Mediterranean**, or **Pan-European** datasets? See the [Pan-European biodiversity training]({{ '/trainings/pan-european-use-case/' | relative_url }}) for one such application.

<details>
<summary><strong>🔬 Deep dive — what "significant" actually means here</strong></summary>

For a Mann-Kendall test at `alpha = 0.05`, a unit is flagged as having a significant trend when its **p-value < 0.05** — i.e. there's less than a 5% probability of seeing that strong a monotonic pattern by chance under the null hypothesis of "no trend."

A **negative Tau of ~ −0.4** with **p < 0.01** (typical of the strongest Gulf of Riga units) corresponds to a robust, decade-scale darkening signal. It does **not** by itself prove a particular cause — that's why the follow-up questions matter.

</details>

---

## Conclusion

The Gulf of Riga case study shows the full AquaINFRA loop in action:

1. **AIP** — discover the right data across providers.
2. **D2KP** — bundle that data with a documented workflow.
3. **VRE / Aqua Galaxy** — run the analysis without any local setup.
4. **Result** — a citable, reproducible finding that turns observation into knowledge.

The same pattern — find → bundle → run → publish — applies to every other AquaINFRA use case.

---

## ✅ Key takeaways

- **Darkening confirmed**: significant negative Mann-Kendall trends in multiple Gulf of Riga units.
- **Strongest signal** near the **Daugava River outflow** — catchment processes are a prime suspect.
- The workflow **transferable** — the same pattern works for other regions and other variables.
- Cite the analysis via the **D2KP DOI on Zenodo** — see <a href="https://aquainfra.dev.52north.org/result/zenodo:17175368" target="_blank" rel="noopener">the Gulf of Riga D2KP</a>.

---

<div class="sequence-navigation">
    <a href="./08_workflow_details" class="btn-seq btn-seq--prev">← Previous: Workflow Details</a>
    <a href="./" class="btn-seq btn-seq--next">Back to Training Overview →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
