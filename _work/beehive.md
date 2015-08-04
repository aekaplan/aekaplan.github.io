---
title: Beehive
tags: Branding, Visual Design, HTML, CSS
order: 4
---

This project was a fun personal project with home automation. It integrates with [Z-Wave  devices](http://www.z-wave.com) to control lighting and other functions from a web interface.

[Rylan Dirksen](http://rylo.github.io) built the back-end for this project with [Sintra](http://www.sinatrarb.com) and two [Raspberry Pis](https://www.raspberrypi.org), while I built the web interface, focusing on using [Sass](http://sass-lang.com).

My goal was a super simple and easy-to-use design. I also wanted it to be flexbile enough to support a growing number of devices and focused primarily on mobile use.

I drew insipirtaion from a beehive, a concept that represents my home. The honeycomb structure in the logo highlights the interconnected metaphor of a smart home and continues the beehive theme. The primary color is a "honey" orange–great for indicating the toggle state of the devices–while the rest of the color palette is more subtle.

I built an iOS-style toggle with pure CSS to control the lights and used CSS animations make the interactions more fun and satisfying.

###Logo
![Beehive Logo](/assets/images/work/beehive/beehive-logo.svg)
![Beehive Logo](/assets/images/work/beehive/beehive-logo-orange.svg)

###Web
{% include browser.html image="beehive/beehive-desktop" %}

###Mobile
{% include browser.html mobile=true image="beehive/beehive-icon-mobile" %}
{% include browser.html mobile=true image="beehive/beehive-mobile" %}
