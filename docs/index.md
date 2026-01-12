---
layout: default
title: Home
---

<div style="text-align: center; max-width: 800px; margin: 0 auto 4rem auto;">
    <h1 style="border: none; font-size: 3rem; margin-bottom: 1.5rem;">AquaINFRA Handbooks</h1>
    <p style="font-size: 1.25rem; color: var(--gray-600); line-height: 1.6;">
        Explore reproducible workflows and step-by-step tutorials for marine and freshwater science using the AquaINFRA Virtual Environment.
    </p>
</div>

{% for region_group in site.data.use_cases %}
<div style="margin-bottom: 3rem;">
    <h2>
        {{ region_group.region }}
    </h2>
    <div class="training-grid">
        {% for training in region_group.trainings %}
        <a href="{{ training.url | relative_url }}" class="training-card">
            <div class="card-content">
                <h3>{{ training.title }}</h3>
                <p>{{ training.description }}</p>
            </div>
            <span class="badge">Start Training &rarr;</span>
        </a>
        {% endfor %}
    </div>
</div>
{% endfor %}




