---
layout: default
title: "Introduction"
---
# Introduction

<p class="chapter-meta">Chapter 1 of 3</p>

<div class="chapter-intro">
    <p>A satellite perspective on the North Sea and Baltic Sea, merging remote-sensing reflectance with in-situ measurements to classify optical water types.</p>
</div>

The North Sea and Baltic Sea represent a highly complex optical environment. Traditional water quality monitoring relies heavily on in-situ sampling, which provides excellent accuracy but suffers from limited spatial and temporal coverage. 

To overcome this, the HEREON use case leverages Earth Observation (EO) data to assess water quality on a macro scale. By combining satellite imagery with local marine observations, we can continuously monitor remote-sensing reflectance and categorise the sea into distinct **Optical Water Types (OWTs)**.

<div style="margin: 2.5rem 0; text-align: center;">
<svg viewBox="0 0 800 350" width="100%" style="max-width: 800px; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1)); border-radius: 12px; background: #0f172a;">
  <defs>
    <!-- Ocean Gradient -->
    <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="50%" stop-color="#0369a1"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
    <!-- Beams -->
    <linearGradient id="beam1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="beam2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a3e635" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#a3e635" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="beam3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fcd34d" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#fcd34d" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Ocean Surface -->
  <path d="M 0 250 Q 200 230 400 250 T 800 250 L 800 350 L 0 350 Z" fill="url(#oceanGrad)"/>
  
  <!-- Optical Water Types (Colored zones in the water) -->
  <ellipse cx="200" cy="270" rx="60" ry="15" fill="#38bdf8" opacity="0.4"/>
  <ellipse cx="400" cy="285" rx="80" ry="20" fill="#a3e635" opacity="0.4"/>
  <ellipse cx="600" cy="265" rx="70" ry="15" fill="#fcd34d" opacity="0.4"/>

  <!-- Satellites -->
  <g transform="translate(400, 50)">
    <!-- Main Satellite Body -->
    <rect x="-25" y="-15" width="50" height="30" rx="5" fill="#e2e8f0"/>
    <rect x="-15" y="-10" width="30" height="20" fill="#94a3b8"/>
    <!-- Solar Panels -->
    <rect x="-85" y="-5" width="60" height="10" fill="#3b82f6" stroke="#1e3a8a" stroke-width="1"/>
    <rect x="25" y="-5" width="60" height="10" fill="#3b82f6" stroke="#1e3a8a" stroke-width="1"/>
    <!-- Sensor -->
    <polygon points="-5,15 5,15 10,25 -10,25" fill="#64748b"/>
    <text x="0" y="-25" font-family="sans-serif" font-size="14" font-weight="bold" fill="#f8fafc" text-anchor="middle">Sentinel-3 / Ocean Color</text>
  </g>

  <!-- Sensor Beams -->
  <polygon points="400,75 140,270 260,270" fill="url(#beam1)"/>
  <polygon points="400,75 320,285 480,285" fill="url(#beam2)"/>
  <polygon points="400,75 530,265 670,265" fill="url(#beam3)"/>

  <!-- In-Situ Buoy -->
  <g transform="translate(400, 240)">
    <rect x="-5" y="-30" width="10" height="30" fill="#facc15"/>
    <circle cx="0" cy="0" r="12" fill="#ef4444"/>
    <path d="M-15 0 Q 0 10 15 0 Z" fill="#b91c1c"/>
    <!-- Antenna -->
    <line x1="0" y1="-30" x2="0" y2="-50" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="0" cy="-50" r="3" fill="#cbd5e1"/>
    <!-- Pulse & Label -->
    <path d="M 10 -40 A 10 10 0 0 1 15 -50" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <path d="M 15 -35 A 15 15 0 0 1 22 -55" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <rect x="25" y="-62" width="135" height="26" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="32" y="-45" font-family="sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">In-situ Validation</text>
  </g>

  <!-- Labels for OWT -->
  <text x="200" y="320" font-family="sans-serif" font-size="14" font-weight="bold" fill="#38bdf8" text-anchor="middle">OWT 1: Clear</text>
  <text x="400" y="335" font-family="sans-serif" font-size="14" font-weight="bold" fill="#a3e635" text-anchor="middle">OWT 2: Turbid/Algae</text>
  <text x="600" y="315" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fcd34d" text-anchor="middle">OWT 3: CDOM-Rich</text>

</svg>
<p style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">Figure 2: Earth Observation satellites capture multi-spectral reflectance, classifying the sea into distinct Optical Water Types, validated by in-situ buoys.</p>
</div>

<div class="use-case-card" style="margin-bottom: 2rem;">
    <figure style="text-align: center; margin: 0;">
      <img src="../../assets/images/hereon/image30.png" alt="Estimate of POC in North Sea-Baltic Sea region" >
      <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">Figure 1: Estimate of the concentration of particulate organic carbon (POC) in the upper water column averaged for July 2023 within the North Sea-Baltic Sea region.</figcaption>
    </figure>
</div>

### System Characteristics

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Component</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Primary Data Source</strong></td>
                <td>Satellite remote-sensing reflectance (e.g., from Sentinel-3 OLCI) providing wide-scale, high-frequency spectral data.</td>
            </tr>
            <tr>
                <td><strong>In-situ Integration</strong></td>
                <td>Data from buoys, research vessels, and FerryBox systems are used as "ground truth" to validate and calibrate the satellite imagery.</td>
            </tr>
            <tr>
                <td><strong>Optical Water Types (OWTs)</strong></td>
                <td>A classification system that categorizes water based on its optical properties (e.g., clear, turbid, algae-dominated, CDOM-rich).</td>
            </tr>
            <tr>
                <td><strong>Target Regions</strong></td>
                <td>The North Sea and Baltic Sea—highly dynamic regions where coastal run-off and algal blooms rapidly change water properties.</td>
            </tr>
        </tbody>
    </table>
</div>

---

<div class="sequence-navigation">
    <a href="./02_research_questions" class="btn-seq btn-seq--next">Next &rarr;</a>
</div>
<div class="wave-decoration"></div>
