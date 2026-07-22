---
layout: handbook_page
nav_order: 6
title: "Applied Use Cases"
---

# Applied Use Cases Library

<div class="use-case-explorer-split">
    <!-- Map Column -->
    <div class="use-case-map-column">
        <div id="use-case-map" class="use-case-map-container"></div>
    </div>

    <!-- Cards Column -->
    <div class="use-case-cards-column">
        <div class="use-case-compact-grid">
            {% for region_group in site.data.use_cases %}
                {% for training in region_group.trainings %}
                <div class="use-case-card">
                    <div class="card-body">
                        <span class="badge-tag badge-tag--blue">{{ region_group.region }}</span>
                        <h2 class="use-case-card__title">{{ training.title }}</h2>
                        <p class="use-case-card__desc">{{ training.description }}</p>
                    </div>
                    <a href="{{ training.url | remove_first: '/' | prepend: relative_root }}" class="use-case-card__footer">
                        View Course &rarr;
                    </a>
                </div>
                {% endfor %}
            {% endfor %}
        </div>
    </div>
</div>
