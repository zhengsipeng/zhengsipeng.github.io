---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
pagination: 
  enabled: true
  collection: publications
  per_page: 10
  sort_field: 'date'
  sort_reverse: true
---

<b>* denotes equal contribution</b>

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %}

<!-- 分页导航 -->
{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}">&laquo; 上一页</a>
  {% else %}
    <span>&laquo; 上一页</span>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <em>{{ page }}</em>
    {% elsif page == 1 %}
      <a href="{{ '/publications/' | relative_url }}">{{ page }}</a>
    {% else %}
      <a href="{{ site.paginate_path | relative_url | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}">下一页 &raquo;</a>
  {% else %}
    <span>下一页 &raquo;</span>
  {% endif %}
</div>
{% endif %}