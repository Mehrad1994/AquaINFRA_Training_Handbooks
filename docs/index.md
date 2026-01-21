---
layout: default
title: Home
---

<div class="hero-section">
    <h1 class="hero-title">AquaINFRA Handbooks</h1>
    <p class="hero-subtitle">
        Explore reproducible workflows and step-by-step tutorials for marine and freshwater science using the AquaINFRA Virtual Environment.
    </p>
</div>

<!-- Section 1: General Training -->
<div class="homepage-section">
    <div class="section-container">

        <h2 class="section-header">General Training</h2>
        <div class="training-grid--centered">
            <a href="{{ '/instruction' | relative_url }}" class="training-card">
                <div class="card-content">
                    <h3 class="training-card__title">Instruction</h3>
                    <p class="training-card__desc">Foundational guidance and essential instructions for using the AquaINFRA Virtual Environment effectively.</p>
                </div>
                <div class="training-card__cta">Get Started &rarr;</div>
            </a>
        </div>
    </div>
</div>

<!-- Section 2: Use Case Specific -->
<div class="homepage-section">
    <div class="section-container">
        <h2 class="section-header">Use Case Specific</h2>


        {% for region_group in site.data.use_cases %}
        <div class="region-group">
            <div class="region-tag-wrapper">
                <span class="badge-tag badge-tag--blue">
                    {{ region_group.region }}
                </span>
            </div>
            <div class="training-grid--centered">
                {% for training in region_group.trainings %}
                <a href="{{ training.url | relative_url }}" class="training-card">
                    <div class="card-content">
                        <h3 class="training-card__title">{{ training.title }}</h3>
                        <p class="training-card__desc">{{ training.description }}</p>
                    </div>
                    <div class="training-card__cta">Explore &rarr;</div>
                </a>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
    </div>
</div>




