---
title: Publications
layout: archive
permalink: /publications/
pagination:
  enabled: true
  collection: publications  # 指定对集合分页
  sort_field: date          # 按日期排序
  sort_reverse: true        # 最新论文在前
---
<b>* denotes equal contribution</b>

<!-- 分页后的论文列表 -->
{% for pub in paginator.posts %}
  <table style="width: 100%; margin-bottom: 20px;">
    <tr>
      <td style="width: 30%;">
        <img src="{{ pub.image }}" style="max-width: 100%; height: auto;"/>
      </td>
      <td style="width: 70%; padding-left: 15px;">
        <p>
          <strong>{{ pub.title }}</strong><br>
          {{ pub.authors }}<br>
          <em>{{ pub.venue }}</em>, {{ pub.date | date: "%Y" }}<br>
          [<a href="{{ pub.paperurl }}" target="_blank">PDF</a>]
          {% if pub.codeurl %} [<a href="{{ pub.codeurl }}" target="_blank">Code</a>] {% endif %}
        </p>
      </td>
    </tr>
  </table>
{% endfor %}

<!-- 分页导航 -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">← Previous</a>
  {% endif %}
  <span class="page_number">
    Page {{ paginator.page }} of {{ paginator.total_pages }}
  </span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next →</a>
  {% endif %}
</div>