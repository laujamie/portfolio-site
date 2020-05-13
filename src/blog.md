---
layout: layouts/base.njk
---

## Latest Blog Posts

{% for blog in collections.blog %}
- [{{blog.data.title}}]({{blog.url}})
{% endfor %}