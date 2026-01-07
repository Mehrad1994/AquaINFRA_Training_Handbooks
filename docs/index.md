---
layout: default
title: Home
---

# AquaINFRA Training Handbooks

Welcome to the collection of AquaINFRA training handbooks and use case documentation. These guides are designed to help you verify and reproduce the workflows demonstrated in our training videos.

## Available Trainings

{% for region_group in site.data.use_cases %}
<div style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; border-bottom: 1px solid var(--border-color); color: var(--aqua-blue-dark);">
        {{ region_group.region }}
    </h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1rem;">
        {% for training in region_group.trainings %}
        <a href="{{ training.url | relative_url }}" style="text-decoration: none; color: inherit;">
            <div style="border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; height: 100%; transition: box-shadow 0.2s; background: #fff;" 
                 onmouseover="this.style.boxShadow='var(--shadow-md)'" 
                 onmouseout="this.style.boxShadow='none'">
                <div style="padding: 1.5rem;">
                    <h3 style="margin-top: 0; font-size: 1.2rem; color: var(--aqua-blue);">{{ training.title }}</h3>
                    <p style="color: var(--text-secondary); font-size: 0.95rem;">
                        Documentation and step-by-step guides.
                    </p>
                    <span class="badge badge--green">Start Training &rarr;</span>
                </div>
            </div>
        </a>
        {% endfor %}
    </div>
</div>
{% endfor %}

## About AquaINFRA

The AquaINFRA project is developing a virtual environment equipped with data access and data analytical services to support marine and freshwater scientists.
