---
layout: default
title: Running the Workflow
parent: Pan-European Biodiversity Use Case
---

# Running the Workflow

<div class="btn-group">
  <a href="03_data_to_knowledge.md" class="btn btn-default">Previous Chapter</a>
  <a href="05_workflow_structure.md" class="btn btn-blue">Next Chapter</a>
</div>

## 1. Import Workflow to AquaGalaxy

1.  Make sure you are logged in to [Aqua Galaxy](https://aqua.usegalaxy.eu).
2.  On the **Data to Knowledge Package** page (on the interaction platform), click on the **Workflow** section.
3.  Select **Galaxy**. You will be redirected to Aqua Galaxy.
4.  Click **"Import workflow into Galaxy"** (or "Start using this workflow").
5.  Confirm the import. The workflow should now appear in your Galaxy interface.

## 2. Get Input Data

1.  Return to the **Data to Knowledge Package** page.
2.  Open the **Datasets** section.
3.  Click on **Zenodo**.
4.  Locate the **GeoJSON file** (defines the area of interest).
5.  Right-click the download link and **Copy link address**.
6.  Return to **Aqua Galaxy**.
7.  In the "Upload Data" or "Paste/Fetch Data" tool (often via "Upload Data" button):
    -   Paste the copied URL.
    -   Click **Start** (or Import).
8.  Once the box turns **green**, the data is imported.
9.  (Optional) Rename the dataset (e.g., "Area of Interest") by clicking the **pencil icon (Edit)**.

## 3. Run the Workflow

1.  Go to the **Workflow** section in Galaxy.
2.  Choose the imported **Pan-European Workflow**.
3.  Click the **Run** button (play icon).
4.  On the run page:
    -   Select your input dataset (the GeoJSON file) for the corresponding input field.
5.  Click **Run Workflow**.

It will take some time for all steps to complete (turn green). While it runs, you can explore the workflow steps (see next chapter).
