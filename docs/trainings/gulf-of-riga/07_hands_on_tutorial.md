---
layout: default
title: 7. Hands-On Tutorial
---

# Hands-On: Running the Gulf of Riga Workflow

This chapter provides **step-by-step instructions** for running the DGA workflow in Aqua Galaxy. Follow along with the video for visual guidance.

<div class="callout">
    <strong>📹 Video Reference</strong><br>
    This tutorial corresponds to <strong>12:18 - 25:07</strong> in the <a href="https://www.youtube.com/watch?v=lfGLnLyqaIs&t=738s" target="_blank">YouTube video</a>.
</div>

---

## Prerequisites

Before starting, ensure you have:
1. ✅ Registered for an **Aqua Galaxy** account
2. ✅ Signed into the **AquaINFRA Interaction Platform**

---

## Step 1: Import Input Data

The workflow requires **two datasets** to run.

### 1.1 Import Secchi Depth Point Data

**📹 Video: [12:49 - 15:19](https://www.youtube.com/watch?v=lfGLnLyqaIs&t=769s)**

1. Navigate to the **Data-to-Knowledge Package** page on the AIP
2. Click on **"Latvian Secchi depth and water color"**
3. You'll see three options:
   - Direct download link
   - Zenodo repository page
   - **AquaINFRA dataset page** ← Select this one

4. On the dataset page, click **"Import to Galaxy"**
5. The **OGC API Features subsetting window** opens:
   - **Bounding Box**: Leave default (or customize for specific area)
   - **Number of Points**: Set to **`5871`** (total available points)
   - **Query Parameters**: Leave empty (we need all data)

6. Click **"Regenerate"** to update the link
7. Click **"Import"**
8. You'll be redirected to **Aqua Galaxy**

<div class="callout">
    <strong>⏳ Import Status</strong><br>
    In the History panel (right side):<br>
    • <strong>Gray</strong> = Queued<br>
    • <strong>Orange</strong> = Processing<br>
    • <strong>Green</strong> = Complete<br>
    • <strong>Red</strong> = Error
</div>

9. **Rename the dataset** for clarity:
   - Click the **pencil icon** (Edit)
   - Rename to: **`points`**
   - Add annotation: "Latvian Secchi depth measurements"

---

### 1.2 Import HELCOM Assessment Unit Regions

**📹 Video: [15:19 - 19:51](https://www.youtube.com/watch?v=lfGLnLyqaIs&t=919s)**

1. Return to the **Data-to-Knowledge Package** page
2. Click on **"HELCOM subbasins"**
3. Click **"AquaINFRA"** to view the dataset page
4. Click **"Visit"** to explore original metadata
5. You'll find two links:
   - Direct data access link
   - HELCOM interactive map

<div class="callout callout--warning">
    <strong>⚠️ Important: Data Usage Disclaimer</strong><br>
    HELCOM data requires accepting a usage disclaimer before import.
</div>

6. **Accept the disclaimer**:
   - Open the **direct download link** in a new tab
   - Accept the **data usage disclaimer**
   - Wait for the download link to activate (don't download the file)
   - **Copy the activated download URL**

7. **Import to Galaxy**:
   - Return to the AIP dataset page
   - Paste the URL into the **import field**
   - Click **"Import"**

8. Wait for the green status indicator
9. **Rename the dataset**:
   - Click the pencil icon
   - Rename to: **`regions`**
   - Add annotation: "HELCOM assessment unit polygons"

---

## Step 2: Import the Workflow

**📹 Video: [19:51 - 21:29](https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1191s)**

### Method 1: Direct Import from AIP

1. In the Data-to-Knowledge Package, click **"Galaxy"** under the workflow section
2. You'll be redirected to the **workflow preview page** in Aqua Galaxy
3. Click **"Import"**
4. Click **"Start using this workflow"**

### Method 2: Manual Import

1. Navigate to **Workflows** in Aqua Galaxy (top menu)
2. Click **"Import"**
3. Upload the workflow file (`.ga` format) from Zenodo

---

## Step 3: Run the Workflow

**📹 Video: [21:29 - 25:07](https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1289s)**

1. In the **Workflows** section, find "Gulf of Riga DGA Workflow"
2. Click the **dropdown arrow** → Select **"Run"**
3. On the workflow run page:
   - **Input 1 (Point Data)**: Select **`points`**
   - **Input 2 (Region Data)**: Select **`regions`**

4. **(Optional)** Click **"Expand to full workflow"** to customize parameters:
   - Threshold for missing values
   - Minimum number of data points
   - Interpolation settings

5. Click **"Run Workflow"**

---

## Step 4: Monitor Progress

**📹 Video: [21:35 - 25:07](https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1295s)**

You'll be taken to a **progress page** showing:

### Interactive Workflow Graph
- Visual representation of each step
- Color-coded status (gray → orange → green)
- Click on any step to see details

### History Panel
- Lists all outputs chronologically
- Shows job metrics (runtime, memory usage)
- Provides download links for results

---

## Step 5: Review Outputs

**📹 Video: [25:18 - 29:08](https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1518s)**

### Key Outputs to Check:

#### 1. Spatial Aggregation Output
- **File**: Points with assessment unit IDs
- **What to look for**: Each point now has a `unit_id` attribute

#### 2. Temporal Aggregation Output
- **File**: Points with season assignments
- **What to look for**: New `season` column (Spring, Summer, Autumn, Winter)

#### 3. Interpolated Time Series
- **File**: CSV with continuous data
- **What to look for**: Gaps filled, units with <10 points excluded

#### 4. Mann-Kendall Results
- **File**: Statistical test results
- **What to look for**: Kendall's Tau values (negative = darkening trend)

#### 5. Interactive Map
- **File**: `map_shape_file_points.html`
- **Action**: Click the eye icon → Open in new tab
- **What to see**: Assessment units color-coded by trend

#### 6. Bar Chart
- **File**: Kendall's Tau visualization
- **What to see**: Negative bars indicate decreasing transparency

---

## Step 6: Interpret Results

**📹 Video: [28:11 - 29:08](https://www.youtube.com/watch?v=lfGLnLyqaIs&t=1691s)**

### Example Results from Video:

The workflow identified **significant negative trends** in:
- **LAT-003** (Summer) - Negative Tau
- **LAT-004** (Summer) - Negative Tau  
- **LAT-005** (Autumn) - Negative Tau

**Location**: All three units are along the **Latvian coastline**. LAT-005 includes the **Daugava River catchment** near Riga.

**Interpretation**: Water transparency is **decreasing** (darkening) in these coastal regions, confirming the scuba divers' observations.

---

## Troubleshooting

### Issue: Import Fails (Red Status)
- **Solution**: Check your internet connection, try re-importing

### Issue: Workflow Stuck (Orange for >10 minutes)
- **Solution**: Refresh the page, check server status

### Issue: No Results Generated
- **Solution**: Verify both input datasets were correctly imported and renamed

---

## Next Steps

After successfully running the workflow:
1. ✅ Download the results for your records
2. ✅ Experiment with different parameters
3. ✅ Try applying the workflow to your own data
4. ✅ Explore other AquaINFRA workflows

---

<div class="btn-group">
    <a href="06_workflow_concept.html" class="btn btn--outline">&larr; Previous Chapter</a>
    <a href="08_workflow_details.html" class="btn">Next Chapter &rarr;</a>
</div>
