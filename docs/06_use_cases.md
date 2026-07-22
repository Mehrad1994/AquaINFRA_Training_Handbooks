---
layout: handbook_page
nav_order: 6
title: "Applied Use Case"
---

# Applied Use Cases Library

<div class="use-cases-single-screen">
    <div class="map-fixed-panel">
        <div id="use-case-map" class="use-case-map-container"></div>
    </div>

    <div class="cards-compact-panel">
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
                            <h2 class="use-case-card__title">{{ training.title }}</h2>
                            <p class="use-case-card__desc">{{ training.description }}</p>

                            <div class="resource-links">
                                {% if training.d2kp_url %}
                                <a href="{{ training.d2kp_url }}" target="_blank" rel="noopener" class="resource-btn resource-btn--zenodo" title="Data to Knowledge Package">D2KP</a>
                                {% endif %}
                            </div>
                        </div>
                        <a href="{{ training.url | remove_first: '/' | prepend: relative_root }}" class="use-case-card__footer">
                            View In Handbook &rarr;
                        </a>
                    </div>
                    {% endfor %}
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>
