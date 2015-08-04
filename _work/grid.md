---
title: Grid
tags: Visual Design, HTML, CSS
order: 3
---

[Grid](http://www.adamkaplan.me/grid) was a personal project I created to help teach responsive design to my co-workers. To my surprise, they and many others online found it useful–it was even  translated into five different languages!

The project was built with [Jekyll](http://jekyllrb.com) and plain CSS. I wanted [the code](https://github.com/aekaplan/grid) to be accessible to beginners, so I stayed away from language extensions like Sass.

I found that including simple visualizations helped to clarify some of the more complicated concepts, like the CSS box model. Breaking down larger challenges into smaller ones also made the content more easily digestable.

The feedback I received from the community was amazing and I wrote [a retrospective](/blog/grid-retrospective) on what I learned over the course of the following year.

###Logo
![Responsive](/assets/images/work/grid/grid-logo.svg)

###Web
{% include browser.html image="grid/grid-desktop" %}
{% include browser.html image="grid/grid-box-desktop" %}

###Mobile
{% include browser.html mobile=true image="grid/grid-mobile" %}
{% include browser.html mobile=true image="grid/grid-column-mobile" %}
