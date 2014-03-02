---
layout: posts
title: CSS Clearfix
date: March 2, 2014
---

Unlike positioning, <a href="http://css-tricks.com/all-about-floats/" target="_blank">floats</a> are helpful for creating layouts without
changing the flow of a web page.

If you don't clear floats, however, they will misbehave. Un-cleared floats stack next to one another or collapse the height of their parent container if floated children elements are present.

![Collapsed parent container]({{ site.url }}/images/clearfix/collapse.svg)

Fortunately there's a popular clearfix, made by <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">Nicolas Gallagher</a>, that solves these issues:

<script src="https://gist.github.com/aekaplan/9274193.js"></script>
<script src="https://gist.github.com/aekaplan/8467436.js"></script>

![Clearfix onº parent container]({{ site.url }}/images/clearfix/clearfix.svg)

In the above example, you can see how it would look when all the elements properly clear—the height is no longer collapsed. Using a clearfix in this way, however, adds additional markup and creates a lot of repetitive CSS.

###Sass Clearfix

<a href="{{ site.url }}/scss/" target="_blank">Sass brings a bunch of benefits</a> over plain 'ole CSS like nesting and <code>@extend</code>, which we can use to make a better clearfix. <code>@extend</code> basically tells Sass that one selector should inherit the styles of another selector.

<script src="https://gist.github.com/aekaplan/9274372.js"></script>

Sass supports the special placeholder selector <code>%</code>, a silent class, which only compiles to CSS until we use it, eliminating repetitive CSS! You can use these to replace the class/id selectors.

<script src="https://gist.github.com/aekaplan/9274422.js"></script>
<script src="https://gist.github.com/aekaplan/9276515.js"></script>

By using Sass we end up with a much cleaner/simpler approach. We no longer have to add the clearfix class to our markup instead we just <code>@extend</code> anywhere a clearfix is needed.

###Resources

* <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">A New Micro Clearfix Hack</a>
* <a href="http://css-tricks.com/all-about-floats/" target="_blank">All About Floats</a>
* <a href="http://blog.teamtreehouse.com/a-better-clearfix-with-sass" target="_blank">CSS Tip: A Better Clearfix with Sass</a>
* <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend" target="_blank">Sass Documentation</a>
