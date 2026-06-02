---
layout: default
title: AquaINFRA VRE
---
# The AquaINFRA Virtual Research Environment

<div class="callout">
    <strong>📌 At a glance</strong>
    <ul style="margin: 0.5rem 0 0 1.2rem; padding: 0;">
        <li>What the <strong><a href="{{ relative_root }}reference/glossary#vre">VRE</a></strong> is and why "VRE" and "<a href="{{ relative_root }}reference/glossary#aqua-galaxy">Aqua Galaxy</a>" mean the same thing in practice.</li>
        <li>What you can do inside it - drag-and-drop workflows, R, Python, all in the browser.</li>
        <li>How the VRE makes your analysis reproducible by default.</li>
    </ul>
</div>

Once you have found your data on the AIP, the next step is to run the analysis.

The **AquaINFRA Virtual Research Environment (VRE)** is where the actual science happens. Rather than wrestling with software versions on your local machine or struggling with limited compute power, the VRE provides a stable, cloud-based platform specifically tailored for aquatic data modelling.

## 📽️ Video tutorial: getting started

Watch this short guide to see the VRE in action. It demonstrates how seamlessly the environment handles data subsetting and analysis through the Galaxy interface.

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/fdnxH0Lnirs?si=oZxdpCn9xabOB_vH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Core features and workflow

The environment runs on established open-source technologies (**[Galaxy]({{ relative_root }}reference/glossary#galaxy)**, **Binder**, and **[OGC API]({{ relative_root }}reference/glossary#ogc-api-features)**) but is customised for environmental researchers. Whether you prefer a drag-and-drop interface or writing custom code in **R** or **Python**, the VRE gives you the freedom to:

1. **Run Open Workflows**: Instantly execute complex models developed by AquaINFRA experts.
2. **Modify & Experiment**: Take a peer's workflow and tweak the parameters to fit your own research question.
3. **Publish with Confidence**: Share your finalized analysis as a structured package, ensuring anyone can reproduce your results.

> [!TIP]
> **Extensibility**
> While Galaxy is currently the core component of the VRE, it offers a solid foundation for future integration of additional tools. A dedicated subdomain ensures that tools are tailored to the AquaINFRA user community, combining ease of access with strong analytical capabilities.

<details>
<summary><strong>🔬 Deep dive - anatomy of a Galaxy session</strong></summary>

When you log into Aqua Galaxy at `aqua.usegalaxy.eu`, the interface splits into three regions:

| Region | What it shows | What you do here |
|---|---|---|
| **Left - Tools panel** | Searchable catalogue of every analysis tool installed on the server. | Pick a tool, configure its inputs, click **Run**. |
| **Centre - Working area** | The currently active tool form, workflow editor, or dataset preview. | Build workflows visually; preview intermediate results. |
| **Right - History panel** | Every input/output of your session, colour-coded (grey → orange → green → red). | Track progress; rename, tag, or delete results. |

Every action you take is **logged in the history**, which makes the entire session inherently reproducible - you can re-run any tool with one click, or export the whole sequence as a `.ga` workflow file.

</details>

---

## ✅ Key takeaways

- The VRE = **Aqua Galaxy** at `aqua.usegalaxy.eu` - a browser-based, cloud-hosted Galaxy server.
- It supports both **GUI workflows** (drag-and-drop) and **code** (R, Python, OGC API).
- Reproducibility is built-in: every input, parameter, and output is tracked in your **history**.
- Workflows are portable - share via `.ga` file or publish inside a **D2KP**.

---

<!-- Navigation Buttons -->

<div class="sequence-navigation">
    <a href="{{ relative_root }}03_aip" class="btn-seq btn-seq--prev">← Previous: AIP</a>
    <a href="{{ relative_root }}05_data_to_knowledge" class="btn-seq btn-seq--next">Next Step: D2KP →</a>
</div>

<div class="wave-decoration"></div>
