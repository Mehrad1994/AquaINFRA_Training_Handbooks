---
layout: default
title: "TEMPLATE: Training Title"
---

# TEMPLATE: Training Title

<!-- 
    INSTRUCTIONS FOR SCIENTISTS:
    1. Copy this entire _TEMPLATE directory.
    2. Rename it to your use case name (e.g., "gulf-of-riga").
    3. Edit this index.md and create corresponding chapter files.
    4. Register your training in "docs/_data/use_cases.yml".
    5. Delete these instruction comments before publishing.
-->

<div class="step-content">
    <p class="contact-lead">
        Brief introduction to what this training covers. Explain the research question and the scientific context in 2-3 sentences.
    </p>
</div>

<!-- Video Metadata Callout -->
<div class="callout">
    <strong><span class="badge">VIDEO</span> Workshop Recording</strong>
    <ul style="list-style: none; padding: 0; margin: 0.5rem 0 0 0;">
        <li><strong>Source:</strong> YouTube (AquaINFRA Channel)</li>
        <li><strong>Duration:</strong> ~XX minutes</li>
    </ul>
</div>

<!-- Responsive YouTube Embed -->
<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>
</div>

## 🎓 Learning Objectives
- Objective 1: Understand X...
- Objective 2: Process Y using Z...
- Objective 3: Interpret results for...

## 📚 Chapters

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th style="width: 30%;">Chapter</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="{{ '/trainings/YOUR_FOLDER/01_introduction' | relative_url }}"><strong>1. Introduction</strong></a></td>
                <td>Scientific background and hypothesis.</td>
            </tr>
            <tr>
                <td><a href="{{ '/trainings/YOUR_FOLDER/02_hands_on' | relative_url }}"><strong>2. Hands-On</strong></a></td>
                <td>Step-by-step technical implementation.</td>
            </tr>
        </tbody>
    </table>
</div>

---

<!-- Navigation Buttons (Aligned with Step 6 Sequence) -->
<div class="sequence-navigation" style="margin-top: 4rem;">
    <a href="{{ '/06_use_cases' | relative_url }}" class="btn-seq btn-seq--prev">&larr; Back to Use Case Library</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
