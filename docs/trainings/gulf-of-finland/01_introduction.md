---
layout: default
title: "Introduction"
---
# Introduction

<p class="chapter-meta">Chapter 1 of 3</p>

<div class="chapter-intro">
    <p>Exploring the land-river-sea connections in the Vantaanjoki urban catchment through Earth Observation and in-situ data.</p>
</div>

The Vantaanjoki River flows directly into the Gulf of Finland at Helsinki. Covering a 1,680 km² basin, the river acts as a primary transport pathway for nutrients and materials from a highly diverse catchment area to the coastal sea.

During snowmelt seasons and flash floods, the turbid water from the river spreads far into the Gulf, visibly altering the colour and ecology of the coastal surface waters. To monitor this dynamic system, the AquaINFRA project combines multiple layers of observation.

<div style="margin: 2.5rem 0; text-align: center;">
<svg viewBox="0 0 800 300" width="100%" style="max-width: 800px; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1)); border-radius: 12px; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);">
  <defs>
    <linearGradient id="riverGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>
    <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
  </defs>
  
  <!-- Land / Catchment -->
  <path d="M0 150 Q 150 120 300 180 T 500 200 L 500 300 L 0 300 Z" fill="#334155" opacity="0.8"/>
  <path d="M0 170 Q 150 140 300 190 T 500 220 L 500 300 L 0 300 Z" fill="#1e293b"/>
  
  <!-- River -->
  <path d="M 0 200 Q 150 180 250 210 T 500 240 L 500 260 Q 300 230 150 200 Z" fill="url(#riverGrad)"/>
  
  <!-- Sea -->
  <path d="M 500 200 C 600 200 700 180 800 180 L 800 300 L 500 300 Z" fill="url(#seaGrad)"/>
  
  <!-- Nodes & Labels -->
  <g transform="translate(100, 150)">
    <circle cx="0" cy="0" r="15" fill="#f59e0b" stroke="#fff" stroke-width="3"/>
    <text x="0" y="-25" fill="#e2e8f0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Catchment</text>
    <text x="0" y="30" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">CORINE Land-use</text>
  </g>
  
  <g transform="translate(350, 180)">
    <circle cx="0" cy="0" r="15" fill="#10b981" stroke="#fff" stroke-width="3"/>
    <text x="0" y="-25" fill="#e2e8f0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">River Sensors</text>
    <text x="0" y="30" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">Discharge &amp; Quality</text>
  </g>
  
  <g transform="translate(650, 220)">
    <circle cx="0" cy="0" r="15" fill="#6366f1" stroke="#fff" stroke-width="3"/>
    <text x="0" y="-25" fill="#e2e8f0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">FerryBox</text>
    <text x="0" y="30" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">Coastal Gradients</text>
  </g>
  
  <!-- Satellites -->
  <g transform="translate(550, 70)">
    <path d="M-20,-10 L20,-10 L20,10 L-20,10 Z" fill="#cbd5e1" opacity="0.9"/>
    <circle cx="0" cy="0" r="5" fill="#ef4444"/>
    <line x1="-20" y1="0" x2="-40" y2="0" stroke="#cbd5e1" stroke-width="2"/>
    <line x1="20" y1="0" x2="40" y2="0" stroke="#cbd5e1" stroke-width="2"/>
    <text x="0" y="-25" fill="#e2e8f0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Earth Observation</text>
    <line x1="0" y1="10" x2="100" y2="150" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5" opacity="0.6"/>
  </g>

</svg>
<p style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">Figure 1: The Source-to-Sea continuum connecting land use, riverine transport, and coastal observation.</p>
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
                <td><strong>Catchment Area</strong></td>
                <td>1,680 km² featuring highly diverse land use (57% forest/semi-natural, 22% agriculture, 19% urban/built).</td>
            </tr>
            <tr>
                <td><strong>Riverine Pressures</strong></td>
                <td>High population density in the Helsinki metropolitan region leads to intense recreational use and environmental pressure.</td>
            </tr>
            <tr>
                <td><strong>Marine Recipient</strong></td>
                <td>The Gulf of Finland, where riverine turbidity and nutrient loads drive significant changes in water quality and ecology.</td>
            </tr>
            <tr>
                <td><strong>Observation Network</strong></td>
                <td>Combines inland automated river stations, commercial ship-mounted <strong>FerryBox</strong> systems, and satellite Earth Observation (EO).</td>
            </tr>
        </tbody>
    </table>
</div>

---

<div class="sequence-navigation">
    <a href="./02_research_questions" class="btn-seq btn-seq--next">Next &rarr;</a>
</div>
<div class="wave-decoration"></div>
