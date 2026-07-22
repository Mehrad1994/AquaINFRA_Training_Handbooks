---
layout: chapter
title: Specleaner Documentation & Data Harmonization
parent: Pan-European Biodiversity Use Case
nav_order: 3
---

# Specleaner Documentation & Data Harmonization

<p class="chapter-meta">Chapter 3 of 6</p>

<div class="chapter-intro">
    <p>Any single outlier-detection method has a blind spot. <a href="../../reference/glossary#specleanr">Specleaner</a> (the <code>specleanr</code> R package) runs around 20 methods - univariate and multivariate - and votes, classifying each record from "not an outlier" through to "perfect outlier". This chapter explains the ensemble idea and how you choose a removal threshold for your model.</p>
</div>

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/MxSsaN1HvXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Execution options & implementation

<div class="tool-tabs-container">
    <div class="tool-tabs">
        <button class="tab-btn active" data-tab="galaxy">Aqua Galaxy (No-Code GUI)</button>
        <button class="tab-btn" data-tab="r-code">R Package (specleanr)</button>
        <button class="tab-btn" data-tab="python-code">Web API Endpoint</button>
    </div>
    <div class="tab-content active" data-tab-content="galaxy">
        <p>Import the Specleaner workflow directly into your Aqua Galaxy history, select your species occurrence dataset, set the voting threshold (e.g. <code>threshold = 0.5</code>), and click <strong>Run Workflow</strong>.</p>
    </div>
    <div class="tab-content" data-tab-content="r-code">
        <pre><code class="language-r">library(specleanr)

# Run ensemble outlier detection on merged species occurrence data
clean_data <- m_detect(
  data = occurrence_records,
  vars = c("MeanAnnualTemperature", "Salinity", "Depth"),
  threshold = 0.5
)
summary(clean_data)</code></pre>
    </div>
    <div class="tab-content" data-tab-content="python-code">
        <pre><code class="language-python">import requests

# Query pygeoapi process endpoint for automated Specleaner processing
endpoint = "https://aquainfra.dev.52north.org/pygeoapi/processes/specleanr-ensemble/execution"
payload = {
    "inputs": {"occurrence_url": "https://example.org/data.csv", "threshold": 0.5}
}
response = requests.post(endpoint, json=payload)
print(response.json())</code></pre>
    </div>
</div>

## How specleanr works

<div class="use-case-card" style="margin-bottom: 2rem;">
    <figure style="text-align: center; margin: 0;">
      <img src="../../assets/images/pan-european-use-case/image47.png" alt="Specleanr methodology workflow">
      <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">Figure 1: The principle of ensemble outlier detection and removal of species records obtained from open-access data repositories (Basooma et al. 2025).</figcaption>
    </figure>
</div>

<details class="knowledge-check">
    <summary>Check Your Understanding: Ensemble Voting Thresholds</summary>
    <div class="answer-content">
        <p><strong>Question:</strong> Why does Specleaner use an ensemble voting threshold instead of relying on a single outlier detection algorithm?</p>
        <p><strong>Answer:</strong> Single algorithms (like Mahalanobis distance or Isolation Forests alone) have specific assumptions and blind spots. An ensemble approach runs ~20 univariate and multivariate methods in parallel and aggregates votes, preventing valid ecological extremes from being falsely flagged as errors while effectively removing sampling artefacts.</p>
    </div>
</details>

---
