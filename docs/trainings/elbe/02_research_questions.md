---
layout: default
title: "Research Questions & Key Objectives"
parent: "Elbe Estuary"
nav_order: 2
---

# Research Questions & Key Objectives

<p class="chapter-meta">Chapter 2 of 3</p>

<div class="chapter-intro">
    <p>Managing estuarine ecosystems requires quantifying the complex interplay between riverine nutrient inputs, tidal mixing, and anthropogenic dredging. This chapter outlines the core research questions addressed by the Elbe Estuary AquaINFRA use case.</p>
</div>

The primary objective of this use case is to provide an open, FAIR, and reproducible workflow to evaluate how nutrient transport and hydrodynamic changes impact oxygen dynamics and water quality in the Elbe Estuary.

---

## Core Research Questions

<div class="question-list">
    <ol>
        <li><strong>Nutrient Flux & Seasonal Transport:</strong> How do seasonal variations in river discharge control the mass transport of dissolved inorganic nitrogen (DIN) and phosphorus from the upper Elbe catchment into the German Bight?</li>
        <li><strong>Oxygen Minimum Dynamics & Hypoxia:</strong> What combination of high water temperature, organic matter loading, and slowed flow velocity triggers severe oxygen depletion events (< 3 mg/L O₂) in the Hamburg port area during summer?</li>
        <li><strong>Estuarine Turbidity & Light Availability:</strong> How does channel deepening alter the position and intensity of the Estuarine Turbidity Maximum (ETM), and how does reduced light availability affect estuarine primary production?</li>
        <li><strong>Climate Change & Salinity Intrusion:</strong> How will projected sea-level rise and increased frequency of summer droughts shift the salt wedge further upstream toward freshwater intake zones?</li>
    </ol>
</div>

---

## Oxygen Deficit & Hypoxia Mechanism

<div style="margin: 2.5rem 0; text-align: center;">
<svg viewBox="0 0 820 320" width="100%" style="max-width: 820px; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.12)); border-radius: 12px; background: #0f172a;">
  <defs>
    <linearGradient id="hypoxiaBoxGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#22c55e" stop-opacity="0.2"/>
      <stop offset="50%" stop-color="#ef4444" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.2"/>
    </linearGradient>
  </defs>

  <!-- Title -->
  <text x="410" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#f8fafc" text-anchor="middle">Hypoxia Trigger Cascade in the Deepened Navigation Channel</text>

  <!-- Step 1: Upstream Nutrients -->
  <g transform="translate(60, 80)">
    <rect x="0" y="0" width="160" height="110" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
    <text x="80" y="30" font-family="sans-serif" font-size="13" font-weight="bold" fill="#4ade80" text-anchor="middle">1. River Input</text>
    <text x="80" y="55" font-family="sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">High Nitrogen &</text>
    <text x="80" y="75" font-family="sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">Organic Biomass Load</text>
  </g>

  <!-- Arrow 1-2 -->
  <path d="M 220 135 L 260 135" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
  <polygon points="260,130 270,135 260,140" fill="#94a3b8"/>

  <!-- Step 2: Slower Flow in Deep Port -->
  <g transform="translate(270, 80)">
    <rect x="0" y="0" width="170" height="110" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
    <text x="85" y="30" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fde047" text-anchor="middle">2. Deepened Channel</text>
    <text x="85" y="55" font-family="sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">Slower Flow Velocity</text>
    <text x="85" y="75" font-family="sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">& Higher Water Depth</text>
  </g>

  <!-- Arrow 2-3 -->
  <path d="M 440 135 L 480 135" stroke="#94a3b8" stroke-width="2"/>
  <polygon points="480,130 490,135 480,140" fill="#94a3b8"/>

  <!-- Step 3: Microbial Respiration -->
  <g transform="translate(490, 80)">
    <rect x="0" y="0" width="160" height="110" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="80" y="30" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fca5a5" text-anchor="middle">3. Respiration</text>
    <text x="80" y="55" font-family="sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">Microbial Decay Consumes</text>
    <text x="80" y="75" font-family="sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">Dissolved Oxygen</text>
  </g>

  <!-- Arrow 3-4 -->
  <path d="M 650 135 L 690 135" stroke="#94a3b8" stroke-width="2"/>
  <polygon points="690,130 700,135 690,140" fill="#94a3b8"/>

  <!-- Step 4: Hypoxic Crisis -->
  <g transform="translate(700, 80)">
    <rect x="0" y="0" width="105" height="110" rx="8" fill="#7f1d1d" stroke="#f87171" stroke-width="2"/>
    <text x="52" y="30" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">4. Hypoxia</text>
    <text x="52" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fca5a5" text-anchor="middle">< 3 mg/L O₂</text>
    <text x="52" y="75" font-family="sans-serif" font-size="10" fill="#fecaca" text-anchor="middle">Fish Stress</text>
  </g>

  <!-- Environmental Drivers Banner -->
  <rect x="60" y="225" width="745" height="55" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="432" y="248" font-family="sans-serif" font-size="12" font-weight="bold" fill="#e2e8f0" text-anchor="middle">Compounding Summer Drivers: High Temperatures (>22°C) + Low River Discharge (<400 m³/s)</text>
  <text x="432" y="267" font-family="sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">Modelled via SCHISM hydrodynamic mesh and biogeochemical transport modules.</text>

</svg>
<p style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">Figure 1: Cascade of biological and physical factors driving summer oxygen depletion in the Hamburg port region of the Elbe Estuary.</p>
</div>

---

<details class="knowledge-check">
    <summary>Check Your Understanding: Estuarine Hypoxia Triggers</summary>
    <div class="answer-content">
        <p><strong>Question:</strong> Why does oxygen depletion peak near Hamburg harbor rather than in the open coastal waters of the German Bight?</p>
        <p><strong>Answer:</strong> Hamburg harbor features a artificially deepened navigation channel. When freshwater flow slows down in summer, high water temperatures accelerate bacterial decomposition of upstream organic matter. The deep water layer receives minimal atmospheric re-aeration, creating a pronounced oxygen deficit zone before water reaches the well-mixed marine coast.</p>
    </div>
</details>

---

<div class="sequence-navigation">
    <a href="./01_introduction" class="btn-seq btn-seq--prev">← Previous: Introduction</a>
    <a href="./03_workflow" class="btn-seq btn-seq--next">Next Chapter: Analytical Workflow →</a>
</div>

<div class="wave-decoration"></div>
