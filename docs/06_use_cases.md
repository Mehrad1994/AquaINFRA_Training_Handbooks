---
layout: default
title: Applied Use Case 
---
# Applied Use Cases

Explore our comprehensive library of focused training modules. These materials demonstrate the practical application of the AquaINFRA Research Infrastructure across diverse European aquatic environments.

Each module is co-designed with domain experts and provides:

- **Guided Workflows**: Step-by-step technical instructions.
- **D2KP**: Searchable and reproducible Data-to-Knowledge Packages.

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
                    <h1 class="use-case-card__title">{{ training.title }}</h1>
                    <p class="use-case-card__desc">{{ training.description }}</p>

<div class="resource-links">
                    {% if training.d2kp_url %}
                    <a href="{{ training.d2kp_url }}" target="_blank" class="resource-btn resource-btn--zenodo" title="Data to Knowledge Package">D2KP</a>
                    {% endif %}
                </div>
            </div>
            <a href="{{ training.url | remove_first: '/' | prepend: relative_root }}" class="use-case-card__footer">
                View In Handbook →
            </a>
        </div>
        {% endfor %}
    </div>
</div>
{% endfor %}


<!-- Navigation Buttons -->

<div class="sequence-navigation">
    <a href="{{ relative_root }}05_data_to_knowledge" class="btn-seq btn-seq--prev">← Previous: D2KP</a>
    <a href="{{ relative_root }}07_contact" class="btn-seq btn-seq--next">Next Step: Contact Us →</a>
</div>
