---
layout: default
title: 4. Applied Use Case Material
---

# 4. Applied Use Case Material

Explore our comprehensive library of focused training modules. These materials demonstrate the practical application of the AquaINFRA Research Infrastructure across diverse European aquatic environments.

Each module is co-designed with domain experts and provides:
- **Guided Workflows**: Step-by-step technical instructions.
- **FAIR Data**: Searchable and reproducible datasets hosted on Zenodo.
- **Open Code**: Source code and Jupyter/Galaxy workflows available on GitHub.
- **Video Tutorials**: Recorded workshops and technical walkthroughs.

<!-- Use Case Library Section (Moved from Homepage) -->
<div class="use-case-library">
    {% for region_group in site.data.use_cases %}
    <div class="region-group">
        <div class="region-tag-wrapper">
            <span class="badge-tag badge-tag--blue">
                {{ region_group.region }}
            </span>
        </div>
        <div class="use-case-grid">
            {% for training in region_group.trainings %}
            <div class="use-case-card">
                <div class="card-body">
                    <h3 class="use-case-card__title">{{ training.title }}</h3>
                    <p class="use-case-card__desc">{{ training.description }}</p>
                    
                    <div class="resource-links">
                        {% if training.zenodo_url %}
                        <a href="{{ training.zenodo_url }}" target="_blank" class="resource-btn resource-btn--zenodo" title="Data on Zenodo">Zenodo</a>
                        {% endif %}
                        {% if training.github_url %}
                        <a href="{{ training.github_url }}" target="_blank" class="resource-btn resource-btn--github" title="Code on GitHub">GitHub</a>
                        {% endif %}
                        {% if training.youtube_url %}
                        <a href="{{ training.youtube_url }}" target="_blank" class="resource-btn resource-btn--youtube" title="Watch on YouTube">YouTube</a>
                        {% endif %}
                    </div>
                </div>
                <a href="{{ training.url | relative_url }}" class="use-case-card__footer">
                    View Handbook &rarr;
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
    {% endfor %}
</div>

---

<!-- Navigation Buttons -->
<div class="sequence-navigation" style="display: flex; justify-content: space-between; margin-top: 4rem;">
    <a href="{{ '/partners' | relative_url }}" class="btn-seq btn-seq--prev">&larr; Previous: Partners & Target</a>
    <a href="{{ '/' | relative_url }}" class="btn-seq btn-seq--next">Return Home &rarr;</a>
</div>

