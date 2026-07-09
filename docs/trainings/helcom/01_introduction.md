---
layout: default
title: "Introduction"
---
# Introduction

<p class="chapter-meta">Chapter 1 of 3</p>

<div class="chapter-intro">
    <p>Exploring how AquaINFRA supports HELCOM's "Source-to-Sea" approach by integrating DAPSIM components for the Baltic Sea.</p>
</div>

The Helsinki Commission (HELCOM) is an intergovernmental organization dedicated to protecting the marine environment of the Baltic Sea from all sources of pollution. A core challenge for HELCOM is assessing the effectiveness of measures aimed at reducing nutrient enrichment and eutrophication.

To achieve this, the AquaINFRA project applies the **DAPSIM** framework (Drivers, Activities, Pressures, States, Impacts, Measures), connecting societal drivers to marine impacts and evaluating the success of implemented policies.

<div style="margin: 2.5rem 0; text-align: center;">
<svg viewBox="0 0 600 600" width="100%" style="max-width: 600px; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1)); border-radius: 50%; background: #ffffff;">
  
  <defs>
    <!-- Arrow marker -->
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" />
    </marker>
    <!-- Slice gradients -->
    <linearGradient id="gradD" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f87171"/><stop offset="100%" stop-color="#dc2626"/></linearGradient>
    <linearGradient id="gradA" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fb923c"/><stop offset="100%" stop-color="#ea580c"/></linearGradient>
    <linearGradient id="gradP" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#facc15"/><stop offset="100%" stop-color="#ca8a04"/></linearGradient>
    <linearGradient id="gradS" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4ade80"/><stop offset="100%" stop-color="#16a34a"/></linearGradient>
    <linearGradient id="gradI" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#2563eb"/></linearGradient>
    <linearGradient id="gradM" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c084fc"/><stop offset="100%" stop-color="#9333ea"/></linearGradient>
  </defs>

  <g transform="translate(300, 300)">
    <!-- Central Hub -->
    <circle cx="0" cy="0" r="80" fill="#f8fafc" stroke="#e2e8f0" stroke-width="4"/>
    <text x="0" y="-5" font-family="sans-serif" font-size="20" font-weight="bold" fill="#334155" text-anchor="middle">HELCOM</text>
    <text x="0" y="20" font-family="sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Baltic Sea</text>

    <!-- Slice 1: Drivers -->
    <path d="M 0 -95 L 0 -220 A 220 220 0 0 1 190.5 -109.9 L 82.2 -47.4 A 95 95 0 0 0 0 -95 Z" fill="url(#gradD)" stroke="#fff" stroke-width="2"/>
    <!-- Slice 2: Activities -->
    <path d="M 190.5 -109.9 A 220 220 0 0 1 190.5 109.9 L 82.2 47.4 A 95 95 0 0 0 82.2 -47.4 Z" fill="url(#gradA)" stroke="#fff" stroke-width="2"/>
    <!-- Slice 3: Pressures -->
    <path d="M 190.5 109.9 A 220 220 0 0 1 0 220 L 0 95 A 95 95 0 0 0 82.2 47.4 Z" fill="url(#gradP)" stroke="#fff" stroke-width="2"/>
    <!-- Slice 4: States -->
    <path d="M 0 220 A 220 220 0 0 1 -190.5 109.9 L -82.2 47.4 A 95 95 0 0 0 0 95 Z" fill="url(#gradS)" stroke="#fff" stroke-width="2"/>
    <!-- Slice 5: Impacts -->
    <path d="M -190.5 109.9 A 220 220 0 0 1 -190.5 -109.9 L -82.2 -47.4 A 95 95 0 0 0 -82.2 47.4 Z" fill="url(#gradI)" stroke="#fff" stroke-width="2"/>
    <!-- Slice 6: Measures -->
    <path d="M -190.5 -109.9 A 220 220 0 0 1 0 -220 L 0 -95 A 95 95 0 0 0 -82.2 -47.4 Z" fill="url(#gradM)" stroke="#fff" stroke-width="2"/>

    <!-- Labels -->
    <text x="80" y="-140" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle" transform="rotate(30, 80, -140)">Drivers</text>
    <text x="160" y="5" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle" transform="rotate(90, 160, 5)">Activities</text>
    <text x="80" y="150" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle" transform="rotate(150, 80, 150)">Pressures</text>
    <text x="-80" y="150" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle" transform="rotate(210, -80, 150)">States</text>
    <text x="-160" y="5" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle" transform="rotate(270, -160, 5)">Impacts</text>
    <text x="-80" y="-140" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle" transform="rotate(330, -80, -140)">Measures</text>
    
    <!-- Outer Connecting Arrows -->
    <path d="M 40 -240 A 240 240 0 0 1 207 -119" fill="none" stroke="#cbd5e1" stroke-width="3" marker-end="url(#arrow)" stroke-dasharray="6,4"/>
    <path d="M 230 -40 A 240 240 0 0 1 230 40" fill="none" stroke="#cbd5e1" stroke-width="3" marker-end="url(#arrow)" stroke-dasharray="6,4"/>
    <path d="M 207 119 A 240 240 0 0 1 40 240" fill="none" stroke="#cbd5e1" stroke-width="3" marker-end="url(#arrow)" stroke-dasharray="6,4"/>
    <path d="M -40 240 A 240 240 0 0 1 -207 119" fill="none" stroke="#cbd5e1" stroke-width="3" marker-end="url(#arrow)" stroke-dasharray="6,4"/>
    <path d="M -230 40 A 240 240 0 0 1 -230 -40" fill="none" stroke="#cbd5e1" stroke-width="3" marker-end="url(#arrow)" stroke-dasharray="6,4"/>
    <path d="M -207 -119 A 240 240 0 0 1 -40 -240" fill="none" stroke="#cbd5e1" stroke-width="3" marker-end="url(#arrow)" stroke-dasharray="6,4"/>

  </g>
</svg>
<p style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">Figure 1: The DAPSIM cycle connecting societal drivers to marine measures.</p>
</div>

### DAPSIM Data Maturity

Not all components of the DAPSIM framework are equally quantified. This use case categorizes the framework into two distinct maturity phases:

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Phase</th>
                <th>Focus Areas</th>
                <th>Data Maturity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Part 1: Quantitative</strong></td>
                <td>Activities, Pressures, States</td>
                <td>Highly quantified. Supported by the robust Pollution Load Compilation (PLC) and well-established marine monitoring networks.</td>
            </tr>
            <tr>
                <td><strong>Part 2: Qualitative</strong></td>
                <td>Drivers, Impacts, Measures</td>
                <td>Less systematized. Often relies on descriptive, qualitative, or localized datasets that are challenging to harmonize on a pan-Baltic scale.</td>
            </tr>
        </tbody>
    </table>
</div>

---

<div class="sequence-navigation">
    <a href="./02_research_questions" class="btn-seq btn-seq--next">Next &rarr;</a>
</div>
<div class="wave-decoration"></div>
