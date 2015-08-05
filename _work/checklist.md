---
title: Checklist
tags: Visual Design, HTML, CSS
order: 7
---

I built this [apprenticeship checklist](http://apprenticeship-checklist.herokuapp.com/) as an apprentice at [8th Light](http://www.8thlight.com) to help keep track of my progress and assignments. It's still used internally to help current design and development apprentices.

I decided on a two pane layout where the sidebar stays fixed as you scroll so the user can see the progress bar change when tasks are checked off the list. By using a bit of Javscript and some CSS animations, the progress bar updates whenever a task is checked, making for a more interactive experience. On mobile, this sidebar moves out of the way of the content.

The website was built with [Middleman](https://middlemanapp.com) and is hosted on [Heroku](https://www.heroku.com).

###Logo
![Checklist Logo](/assets/images/work/checklist/checklist-logo.svg)

###Web
{% include browser.html image="checklist/checklist-desktop" %}
{% include browser.html image="checklist/checklist-ux-desktop" %}

###Mobile
{% include browser.html mobile=true image="checklist/checklist-mobile" %}
{% include browser.html mobile=true image="checklist/checklist-typography-mobile" %}
