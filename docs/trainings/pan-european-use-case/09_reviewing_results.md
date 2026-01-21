---
layout: default
title: 9. Reviewing the Results
parent: Pan-European Biodiversity Use Case
nav_order: 9
---

# 9. Reviewing the Workflow Results

Once all steps in your Galaxy history have turned **green**, your results are ready for exploration and analysis.

## Visualizing Output in Galaxy
To view the results of any step (especially Step 8: Flag Outliers):
1.  Click on the dataset name in the history panel.
2.  Select the **Eye Icon** (View Data).
3.  Galaxy will display a preview of the resulting table.

## Accessing the Result Files
Each workflow step produces a text file containing a direct link to the actual results. In this use case, the results are provided in **CSV format**.
*   You can follow the link to download the final CSV file for use in your own local R or Python environments.

## Interpreting Outlier Classifications
The final output includes all extracted environmental predictors and a classification for each record based on the strength of evidence provided by the ensemble methods:
*   **Poor Outlier**
*   **Moderate Outlier**
*   **Fair Outlier**
*   **Very Strong Outlier**
*   **Not an Outlier**

Researchers can use these flags to create a more robust "cleaned" dataset for their final Species Distribution Models.

<div class="callout">
    <strong>📹 Video Reference</strong>
    <a href="https://www.youtube.com/watch?v=v_0zyUVY--E&t=1122s" target="_blank">18:42</a> Review the Workflow Results
</div>

<div class="btn-group">
    <a href="08_workflow_processing.html" class="btn btn--outline">&larr; Previous Chapter</a>
    <a href="10_conclusion.html" class="btn">Next Chapter &rarr;</a>
</div>
