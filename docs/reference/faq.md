---
layout: reference_page
title: "FAQ & Troubleshooting"
---

# FAQ & Troubleshooting

Quick answers to common questions and concrete solutions for issues encountered during training workflows.

> [!NOTE]
> Can't find your issue? Visit [Contact & Support](../07_contact) to reach the AquaINFRA technical team.

---

## Accounts & Access

<details class="knowledge-check">
    <summary>Do I need an EOSC account to follow the trainings?</summary>
    <div class="answer-content">
        <p>No. For every hands-on chapter in this handbook, you only need an <strong>Aqua Galaxy</strong> account. EOSC accounts are only needed if you require extra cloud compute or shared group workspaces. See <a href="./prerequisites">Prerequisites & Sign-Up</a>.</p>
    </div>
</details>

<details class="knowledge-check">
    <summary>What is the difference between AIP, DDAS, and Aqua Galaxy?</summary>
    <div class="answer-content">
        <p><strong>AIP (AquaINFRA Interaction Platform)</strong> is the user-facing web portal at <code>aquainfra.dev.52north.org</code> where you search and discover datasets.</p>
        <p><strong>DDAS (Data Discovery & Access Service)</strong> is the backend service that powers AIP search and exposes OGC Web APIs.</p>
        <p><strong>Aqua Galaxy</strong> at <code>aqua.usegalaxy.eu</code> is the Virtual Research Environment (VRE) where workflow tools are executed.</p>
    </div>
</details>

<details class="knowledge-check">
    <summary>What is the difference between VRE and Aqua Galaxy?</summary>
    <div class="answer-content">
        <p>In practice, they refer to the same platform. <strong>VRE</strong> (Virtual Research Environment) is the conceptual name, while <strong>Aqua Galaxy</strong> is its active online implementation.</p>
    </div>
</details>

---

## AIP - Finding & Ingesting Data

<details class="knowledge-check">
    <summary>Why does my AIP search return too many results?</summary>
    <div class="answer-content">
        <p>Use the <strong>Data Provider</strong> filter panel on the left side of the AIP search interface to uncheck external data providers. To inspect native project datasets, keep only the <strong>AquaINFRA</strong> provider checked.</p>
    </div>
</details>

<details class="knowledge-check">
    <summary>I cannot find an "Import to Galaxy" button on a dataset page.</summary>
    <div class="answer-content">
        <p>Not all external providers support direct one-click OGC API imports. Follow these steps:</p>
        <ol>
            <li>Open the dataset source link on the provider website.</li>
            <li>Accept any required data-usage disclaimer.</li>
            <li>Copy the direct download URL.</li>
            <li>In AIP or Galaxy, paste the URL into the <strong>Insert URL</strong> import dialog.</li>
        </ol>
    </div>
</details>

---

## Galaxy - Workflow Execution

<details class="knowledge-check">
    <summary>My dataset import is stuck on "Queued" (Grey Status).</summary>
    <div class="answer-content">
        <p>Galaxy queues jobs when server demand is high. Small imports typically clear within a few minutes. If a job remains queued for over 15 minutes, refresh your browser or check the official <a href="https://status.galaxyproject.org/" target="_blank" rel="noopener">Galaxy Status Page</a>.</p>
    </div>
</details>

<details class="knowledge-check">
    <summary>My dataset turned Red (Error Status). What should I do?</summary>
    <div class="answer-content">
        <p>Follow these diagnostic steps:</p>
        <ol>
            <li>Click the dataset entry in your history panel to expand details.</li>
            <li>Click the <strong>Bug Icon</strong> to view error tracebacks.</li>
            <li>Check for common causes:
                <ul>
                    <li><strong>Expired URL</strong>: Re-copy a fresh direct download link from the data provider.</li>
                    <li><strong>Empty Result</strong>: Bounding box coordinates contained no sampling stations (widen spatial extent).</li>
                    <li><strong>Format Mismatch</strong>: Ensure file format matches what the workflow step expects (e.g. CSV vs NetCDF).</li>
                </ul>
            </li>
        </ol>
    </div>
</details>

<details class="knowledge-check">
    <summary>The workflow completed, but no map visualization appears.</summary>
    <div class="answer-content">
        <p>Interactive HTML map outputs must be opened explicitly: click the <strong>Eye Icon</strong> on the <code>map_*.html</code> dataset in your history panel, then select <strong>Open in New Tab</strong>.</p>
    </div>
</details>

<details class="knowledge-check">
    <summary>Can I re-run a workflow with different parameters?</summary>
    <div class="answer-content">
        <p>Yes. Go to <strong>Workflows</strong> &rarr; click the dropdown menu &rarr; select <strong>Run</strong>. Adjust your parameters and click <strong>Run Workflow</strong>. The new execution creates a separate history slice without overwriting previous results.</p>
    </div>
</details>

---

## D2KPs & Reproducibility

<details class="knowledge-check">
    <summary>What components are included inside a D2KP?</summary>
    <div class="answer-content">
        <p>A Data-to-Knowledge Package (D2KP) bundles four key assets:</p>
        <ul>
            <li><strong>Data & Source Code</strong>: Input data links and R/Python scripts.</li>
            <li><strong>Galaxy Workflow</strong>: Executable <code>.ga</code> workflow file.</li>
            <li><strong>OGC Web APIs</strong>: Programmatic <code>pygeoapi</code> execution endpoints.</li>
            <li><strong>Virtual Sandbox</strong>: MyBinder containerized RStudio/Jupyter environment.</li>
        </ul>
    </div>
</details>

<details class="knowledge-check">
    <summary>How do I cite a D2KP in a research publication?</summary>
    <div class="answer-content">
        <p>Every published D2KP is assigned a persistent <strong>Digital Object Identifier (DOI) on Zenodo</strong>. Cite the DOI in your reference list as you would for a scientific paper or dataset.</p>
    </div>
</details>
