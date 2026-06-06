---
layout: default
title: Reviewing the Results
parent: Pan-European Biodiversity Use Case
nav_order: 9
---

# Reviewing the workflow results

<p class="chapter-meta">
  <strong>~1 min read</strong> · <strong>1 min video</strong> · Chapter 9 of 10
</p>

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul>
        <li>How to inspect outputs and get the final CSV.</li>
        <li>How to read the outlier classes.</li>
        <li>How to choose a removal threshold.</li>
    </ul>
</div>

---

## 📹 Watch this chapter

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=1122&end=1182" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p class="chapter-meta">📍 <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=1122s" target="_blank" rel="noopener">Jump to 18:42 → 19:42 in YouTube</a>.</p>

---

## Key points

- **Inspect:** once steps are green, click a dataset → the **👁 eye icon** previews the first rows. Spend your time on the Step 8 output (the flags).
- **Get the data out:** each step's output is a text file linking to the real results (usually CSV). Open it, follow the link, save the CSV, and use it in your own R/Python for downstream [SDM]({{ relative_root }}reference/glossary#sdm).
- **Read the classes:**

<div class="table-wrapper">
<table>
    <thead><tr><th>Class</th><th>Default action</th></tr></thead>
    <tbody>
        <tr><td>Not an outlier</td><td>Keep.</td></tr>
        <tr><td>Poor / Fair / Moderate</td><td>Usually keep - worth inspecting.</td></tr>
        <tr><td>Very Strong / Perfect</td><td>Usually remove.</td></tr>
    </tbody>
</table>
</div>

- **Pick a threshold by model sensitivity:** sensitive SDMs (e.g. MaxEnt, few records) → remove only Perfect / Very Strong; robust ensembles → remove from Moderate up; high-stakes work (red-list) → **defer borderline cases to expert review**, don't auto-delete.

---

## ✅ Key takeaways

- The **eye icon** is your fastest preview; the **CSV download** is what you use outside Galaxy.
- Classes are **strength of evidence**, not binary - choose the cut-off consciously.
- For high-stakes work, flag borderline records for **expert review**.

---

<div class="sequence-navigation">
    <a href="./08_workflow_processing" class="btn-seq btn-seq--prev">← Previous: Workflow Pt. 2</a>
    <a href="./10_conclusion" class="btn-seq btn-seq--next">Next Chapter: Conclusion →</a>
</div>

<div class="wave-decoration"></div>
