---
layout: default
title: FAQ & Troubleshooting
---

# FAQ & Troubleshooting

Quick answers to common questions and concrete fixes for the issues most learners hit.

<div class="callout">
    <strong>🆘 Where to go from here</strong>
    Can't find your issue? See <a href="../07_contact">Contact</a> to reach the AquaINFRA team.
</div>

---

## Accounts & access

<details>
<summary><strong>Do I need an EOSC account to follow the trainings?</strong></summary>

No. For every hands-on chapter in this handbook you only need an **Aqua Galaxy** account. EOSC is only useful if you need extra cloud compute or shared group workspaces. See [Prerequisites](./prerequisites).
</details>

<details>
<summary><strong>I see "AIP" and "AquaINFRA Interaction Platform" and "DDAS" - are these the same?</strong></summary>

AIP = AquaINFRA Interaction Platform - the user-facing portal at `aquainfra.dev.52north.org`. DDAS is the **backend** Data Discovery and Access Service that powers AIP search and exposes OGC APIs. As a user you interact with AIP; DDAS works under the hood.
</details>

<details>
<summary><strong>What's the difference between VRE and Aqua Galaxy?</strong></summary>

In practice, they're the same thing. **VRE** is the conceptual name (Virtual Research Environment). **Aqua Galaxy** at `aqua.usegalaxy.eu` is its current implementation.
</details>

---

## AIP - finding data

<details>
<summary><strong>Why does my AIP search return too many results?</strong></summary>

Use the **Data Provider** filter on the left to uncheck providers you don't need. For AquaINFRA's own datasets, keep only the **AquaINFRA** provider checked.
</details>

<details>
<summary><strong>I can't find an "Import to Galaxy" button on a dataset page.</strong></summary>

Not all data providers support direct OGC API import. When this happens:
1. Open the dataset's external metadata page (the "Visit" or source link).
2. Accept any data-usage disclaimer required by the provider.
3. Copy the direct download URL.
4. Back on AIP, paste the URL into the **Insert URL** field and click **Import**.

This is documented in the Gulf of Riga Chapter 7 (HELCOM dataset example).
</details>

---

## Galaxy - running workflows

<details>
<summary><strong>My import is stuck on "Queued" (grey) for a long time.</strong></summary>

Galaxy queues jobs when the server is busy. For small imports it usually clears within a couple of minutes. If it stays grey for >15 minutes, refresh the page; if it still doesn't move, check the [Galaxy status page](https://status.galaxyproject.org/) or try later.
</details>

<details>
<summary><strong>My dataset turned <span style="color:#c62828">red</span> (Error). What now?</strong></summary>

1. Click the dataset name in the history → expand details.
2. Click the **bug icon** to see the error message.
3. Common causes:
   - **Broken or expired URL** (especially for HELCOM-style links - re-accept the disclaimer and copy a fresh URL).
   - **Empty result** after subsetting (your bounding box has no data points - widen it).
   - **Wrong file format** for the next tool (check the green checkmark file type matches what the workflow expects).
4. Re-run the import / step after fixing.
</details>

<details>
<summary><strong>The workflow runs but no map output appears.</strong></summary>

Map outputs (HTML files) need to be opened explicitly:
1. Find the `map_*.html` file in your history.
2. Click the **👁 eye icon** to preview, then **"Open in new tab"** for the full interactive view.
</details>

<details>
<summary><strong>Can I re-run a workflow with different parameters?</strong></summary>

Yes. In Workflows → click the dropdown → **Run** → expand to full workflow view → tweak parameters → **Run Workflow**. The new run gets its own history slice and won't overwrite previous results.
</details>

---

## D2KPs & reproducibility

<details>
<summary><strong>What's inside a D2KP exactly?</strong></summary>

Four interaction levels in one bundle:
1. **Data & code** - raw data links + R/Python source.
2. **Galaxy workflow** - pre-configured `.ga` you can run without writing code.
3. **OGC / Web API** - endpoints to call the same processing from your own systems.
4. **MyBinder virtual lab** - containerised RStudio for live editing.

See the [D2KP chapter](../05_data_to_knowledge).
</details>

<details>
<summary><strong>How do I cite a D2KP in a paper?</strong></summary>

Every published D2KP has a **DOI on Zenodo**. Use the DOI as you would for any dataset reference. The AIP dataset page lists the DOI alongside other metadata.
</details>

---

## General

<details>
<summary><strong>The video timestamps in chapters don't match my YouTube playback time.</strong></summary>

YouTube occasionally inserts a brief intro that shifts timestamps by 1-2 seconds. If a jump lands slightly off, scrub backward a few seconds.
</details>

<details>
<summary><strong>Can I use the workflows on my own data?</strong></summary>

Yes - that's the whole point of FAIR workflows. After a successful run on the demo data, swap the input datasets for your own and re-run. Make sure your data has the same structure (e.g. same coordinate system, comparable columns) as the demo inputs.
</details>

---

<div class="sequence-navigation">
    <a href="{{ relative_root }}reference/prerequisites" class="btn-seq btn-seq--prev">← Prerequisites</a>
    <a href="{{ relative_root }}reference/quick-tasks" class="btn-seq btn-seq--next">Next: Quick-Task Index →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>
