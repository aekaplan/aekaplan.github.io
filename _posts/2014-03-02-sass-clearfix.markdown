---
layout: posts
title: Sass Clearfix
date: March 2, 2014
---

Unlike positioning, <a href="http://css-tricks.com/all-about-floats/" target="_blank">floats</a> are helpful for creating layouts without changing the flow of a web page.

If you don't clear floats, however, they will misbehave. Un-cleared floats stack next to one another or collapse the height of their parent container if floated children elements are present.

![Collapsed parent container]({{ site.url }}/images/clearfix/collapse.svg)

Fortunately there's a popular clearfix, made by <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">Nicolas Gallagher</a>, that solves these issues:

<div class="example html">
<button class="copy-button">Copy</button>
<div class="copy-area">
{% highlight html %}
<div class="row clearfix">
  <div class="column">
    <!-- Your Content -->
  </div>
</div>
{% endhighlight %}
</div>
</div>

<div class="example css">
<button class="copy-button">Copy</button>
<div class="copy-area">
{% highlight css %}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}

.clearfix:after { clear: both; }
.clearfix { *zoom: 1; }
{% endhighlight %}
</div>
</div>

![Clearfix on parent container]({{ site.url }}/images/clearfix/clearfix.svg)

In the above example, you can see how it would look when all the elements properly clear—the height is no longer collapsed. Using a clearfix in this way, however, adds additional markup and creates a lot of repetitive CSS.

###Sass Clearfix

<a href="{{ site.url }}/scss/" target="_blank">Sass brings a bunch of benefits</a> over plain 'ole CSS like nesting and <code>@extend</code>, which we can use to make a better clearfix. <code>@extend</code> basically tells Sass that one selector should inherit the styles of another selector.

<div class="example scss">
<button class="copy-button">Copy</button>
<div class="copy-area">
{% highlight scss %}
%clearfix {
  *zoom: 1;
  &:before, &:after {
    content: " ";
    display: table;
  }
  &:after { clear: both; }
}

.row { @extend %clearfix; }
{% endhighlight %}
</div>
</div>

Sass supports the special placeholder selector <code>%</code>, a silent class, which only compiles to CSS until we use it, eliminating repetitive CSS! You can use these to replace the class/id selectors.

<div class="example html">
<button class="copy-button">Copy</button>
<div class="copy-area">
{% highlight html %}
<div class="row">
  <div class="column">
    <!-- Your Content -->
  </div>
</div>
{% endhighlight %}
</div>
</div>

<div class="example scss">
<button class="copy-button">Copy</button>
<div class="copy-area">
{% highlight scss %}
.row { @extend %clearfix; }
{% endhighlight %}
</div>
</div>

By using Sass we end up with a much cleaner/simpler approach. We no longer have to add the clearfix class to our markup instead we just <code>@extend</code> anywhere a clearfix is needed.

###Resources

* <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">A New Micro Clearfix Hack</a>
* <a href="http://css-tricks.com/all-about-floats/" target="_blank">All About Floats</a>
* <a href="http://blog.teamtreehouse.com/a-better-clearfix-with-sass" target="_blank">CSS Tip: A Better Clearfix with Sass</a>
* <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend" target="_blank">Sass Documentation</a>
