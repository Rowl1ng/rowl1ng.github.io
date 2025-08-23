---
layout: page
title: Teaching
permalink: /teaching/
description: 
nav: true
nav_order: 4
display_categories: [undergraduate, graduate]
horizontal: false
---

## Courses





<!-- pages/teaching.md -->
<div class="teaching">
{% if page.display_categories %}
  {% for category in page.display_categories %}
  <!-- <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a> -->
  {% assign categorized_courses = site.teaching | where: "category", category %}
  {% assign sorted_courses = categorized_courses | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for course in sorted_courses %}
      {% include teaching.liquid %}
    {% endfor %}
  </div>
  {% endfor %}
{% else %}
  {% assign sorted_courses = site.teaching | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for course in sorted_courses %}
      {% include teaching.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>

- 2019 - 2020 *Teaching Assistant* at University of Surrey,      Mathematics II: Engineering Maths (EEE1032). Excercise tutorial about Fourier Series can be found in [this video](https://www.bilibili.com/video/BV1Ut4y127kP/?spm_id_from=333.999.0.0).

___

## Supervision

[本科毕设经验总结](https://rowl1ng.com/MyWiki/research/thesis/)

<div class="row row-cols-1 row-cols-md-2">
  {% assign theses = site.supervision | sort: "importance" %}
  {% for thesis in theses %}
    {% include supervision.liquid %}
  {% endfor %}
</div>

- 2020 - 2022 *MSc Project Supervision* at University of Surrey: 
  - *Learning Critical Edge Sets from 3D Shapes*. This project got a distinction remark.
  - *Fine-Grained Image Retrieval with Sketch and Text*.