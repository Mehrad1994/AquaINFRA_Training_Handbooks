---
layout: handbook_page
nav_order: 6
title: "Applied Use Case"
---

# Applied Use Cases Library

<div class="use-cases-overview-layout">
    <!-- Top Fixed Interactive Map -->
    <div id="use-case-map" class="use-case-map-banner"></div>

    <!-- All 8 Cards Grid (Fully Visible at Once) -->
    <div class="use-case-all-cards-grid">
        {% for region_group in site.data.use_cases %}
            {% for training in region_group.trainings %}
            <div class="use-case-card">
                <div class="card-body">
                    <span class="badge-tag badge-tag--blue">{{ region_group.region }}</span>
                    <h2 class="use-case-card__title">{{ training.title }}</h2>
                    <p class="use-case-card__desc">{{ training.description }}</p>
                </div>
                <div class="card-footer-flex">
                    {% if training.d2kp_url %}
                    <a href="{{ training.d2kp_url }}" target="_blank" rel="noopener" class="resource-btn resource-btn--zenodo" title="Data to Knowledge Package">D2KP</a>
                    {% endif %}
                    <a href="{{ training.url | remove_first: '/' | prepend: relative_root }}" class="use-case-card__footer">
                        View Course &rarr;
                    </a>
                </div>
            </div>
            {% endfor %}
        {% endfor %}
    </div>
</div>
