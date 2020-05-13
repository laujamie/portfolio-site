---
layout: layouts/base.njk
title: Latest Blog Posts
---

## Latest Blog Posts

{% for blog in collections.blog %}
- [{{blog.data.title}}]({{blog.url}})
{% endfor %}