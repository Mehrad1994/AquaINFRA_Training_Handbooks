---
layout: default
title: Galaxy Workflow Setup
parent: Pan-European Biodiversity Use Case
nav_order: 6
---

# Galaxy Workflow Setup
> [!NOTE] 📹 **Video Reference**
> [13:12](https://www.youtube.com/watch?v=v_0zyUVY--E&t=792s) Running the Workflow

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/v_0zyUVY--E?si=H17k0E02LnCIW7Mp&start=792&end=941" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



Before the user can run the outlier detection, the user must import the workflow and its required data into **[Aqua Galaxy](https://aqua.usegalaxy.eu/)**.

## Importing the Workflow
1.  From the D2K Package page, click the **Galaxy** link in the VRE section.
2.  In the Galaxy interface, click **Import** to add the workflow to the list.
3.  Ensure the user are logged in to save the progress.

## Importing Data from Zenodo
The workflow requires an **Area of Interest (GeoJSON)** file. To import it:
1.  Open the **Dataset** section of the D2K package.
2.  Select **Zenodo** to see list of available files.
3.  **Right-click** on the GeoJSON download link and select **"Copy link address."**
4.  Back in the D2K package page, select **Aqua Galaxy** and paste the link into the **"Import to Galaxy"** field.

## Execution Status
As the workflow runs, the status boxes in the history panel will change color:
> [!WARNING] **Orange**: The process is currently running.

> [!TIP] **Green**: The step has successfully completed.

> [!CAUTION] **Red**: The step has failed.

Once imported, the user can click **Run** on the workflow, select the input dataset, and wait for all steps to turn green.

<div class="sequence-navigation">
    <a href="./05_data_to_knowledge" class="btn-seq btn-seq--prev">← Previous: D2K Package</a>
    <a href="./07_workflow_acquisition" class="btn-seq btn-seq--next">Next Chapter: Workflow Pt. 1 →</a>
</div>

<div class="wave-decoration" style="margin: 0 -2rem -2rem -2rem; height: 100px; background: linear-gradient(to top, rgba(53, 100, 172, 0.05), transparent);"></div>

