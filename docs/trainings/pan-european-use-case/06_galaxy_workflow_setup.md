---
layout: default
title: 6. Galaxy Workflow Setup
parent: Pan-European Biodiversity Use Case
nav_order: 6
---

# 6. Galaxy Workflow Setup

Before you can run the outlier detection, you must import the workflow and its required data into **[Aqua Galaxy](https://aqua.usegalaxy.eu/)**.

## Importing the Workflow
1.  From the D2K Package page, click the **Galaxy** link in the VRE section.
2.  In the Galaxy interface, click **Import** to add the workflow to your list.
3.  Ensure you are logged in to save your progress.

## Importing Data from Zenodo
The workflow requires an **Area of Interest (GeoJSON)** file. To import it:
1.  Open the **Dataset** section of the D2K package.
2.  Select **Zenodo** to see list of available files.
3.  **Right-click** on the GeoJSON download link and select **"Copy link address."**
4.  Back in the D2K package page, select **Aqua Galaxy** and paste the link into the **"Import to Galaxy"** field.

## Execution Status
As the workflow runs, the status boxes in the history panel will change color:
*   <span style="color: #FFA500; font-weight: bold;">Orange</span>: The process is currently running.
*   <span style="color: #008000; font-weight: bold;">Green</span>: The step has successfully completed.
*   <span style="color: #FF0000; font-weight: bold;">Red</span>: The step has failed.

Once imported, you can click **Run** on the workflow, select your input dataset, and wait for all steps to turn green.

<div class="callout">
    <strong>📹 Video Reference</strong>
    <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=792s" target="_blank">13:12</a> Running the Workflow
</div>

<div class="btn-group">
    <a href="05_data_to_knowledge.html" class="btn btn--outline">&larr; Previous Chapter</a>
    <a href="07_workflow_acquisition.html" class="btn">Next Chapter &rarr;</a>
</div>
