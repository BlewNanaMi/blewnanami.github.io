---
layout: default
title: Archives
icon: fas fa-archive
order: 3
---

<section class="archive-page" aria-label="Archives">
  <header class="archive-hero">
    <p class="literary-kicker">Archive</p>
    <h1>Archives</h1>
    <p>
      所有写作暂存于此。每一篇文章都像一张从夜里取出的底片，
      先有光，然后才有故事。
    </p>
  </header>

  <ol class="archive-banner-list">
    {% for post in site.posts %}
      <li>
        <a
          class="archive-banner"
          href="{{ post.url | relative_url }}"
          {% if post.image %}
            style="--archive-image: url('{{ post.image | relative_url }}');"
          {% else %}
            style="--archive-image: url('{{ '/assets/img/the-another-legend-hero.png' | relative_url }}');"
          {% endif %}
        >
          <span class="archive-banner-meta">
            {{ post.date | date: "%B %-d, %Y" }}
          </span>
          <strong>{{ post.title }}</strong>
          {% if post.description %}
            <span class="archive-banner-desc">{{ post.description }}</span>
          {% endif %}
        </a>
      </li>
    {% endfor %}
  </ol>
</section>
