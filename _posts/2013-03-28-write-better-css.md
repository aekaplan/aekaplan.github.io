---
title: Write Better CSS
date: March 28, 2013
---
Writing better CSS can be easy. Remember to normalize, organize and alphabetize!

Steps to writing better CSS (I couldn't help myself with the naming):

* Normalize
* Organize
* Alphabetize
* DRY and write reusable CSS

###Normalize

Resets remove the default styles for all elements while <a href="http://necolas.github.com/normalize.css/" target="_blank">normalize</a> retains most of the useful default browser styles. When starting a new project, I prefer normalize over resets.

>Normalize.css is a small CSS file that provides better cross-browser consistency in the default styling of HTML elements. It’s a modern, HTML5-ready, alternative to the traditional CSS reset.

It also corrects bugs commonly found in browser inconsistencies and doesn't clutter your debugging tool. Simply download and use <a href="http://necolas.github.com/normalize.css/" target="_blank">normalize.css</a> as-is, or customize it to meet your requirements.

###Organize

Organize your CSS code to reflect the flow of your website's layout. For example, your navigation CSS should be at the top of your file and your footer should be closer to the bottom:

<div class="example css">
<button class="copy-button">Copy</button>
<div class="copy-area">
{% highlight css %}
/* Layout */
body {
  background: #fff;
  color: #333;
  font-family: "proxima-nova", sans-serif;
  font-size: 100%;
  font-weight: 400;
  line-height: 1.5em;
}

.container {
  margin: 0 auto;
  max-width: 32em;
  padding: 1.5em 0;
  width: 90%;
}

/* Header */
header {
  border-bottom: 1px solid #ddd;
  margin-bottom: 1.5em;
}

nav {
  float: right;
  padding: .5em;
}

/* Basic Styles */
p {
  font-style: normal;
  font-weight: 400;
  margin-bottom: 1.5em;
}

/* Footer */
footer {
  background: #333;
  padding: 1em; 0;
}
{% endhighlight %}
</div>
</div>

Put properties related to one another close together and *use comments sparingly* to break up the different sections of your CSS. The combination of a few comments and grouping similar elements together will make it much easier to quickly find what your looking for.

###Alphabetize Your Properties

Write your CSS properties in alphabetical order; it will help reduce the time it takes to find a specific property.

Jen Myers' post on <a href="http://jenmyers.tumblr.com/post/45339751868/why-you-should-order-css-properties-alphabetically" target="_blank">Why you should order CSS properties alphabetically</a> made me a believer:

>Here’s the simple truth up-front: alphabetical CSS ordering makes your CSS most easily accessible to the widest group of people with the least amount of clutter in your stylesheets.

This principle is fairly new to me, but has really helped make my code more navigable. Which example makes it easier to find specific properties:

<div class="example css">
<button class="copy-button">Copy</button>
<div class="copy-area">
{% highlight css %}
.box {
  z-index: 1;
  padding: .5em;
  border: 1px solid #aaa;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 1em;
}

.box {
  border: 1px solid #aaa;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 1em;
  padding: .5em;
  width: 100%;
  z-index: 1;
}
{% endhighlight %}
</div>
</div>

The second CSS block is easier to skim through, right? I know the z-index will always be at the bottom of the block. Don't worry about alphabetizing vendor prefixes (like box-sizing or transition, for example) with the rest of your properties, as you will want to keep those grouped together.

###Don't Repeat Yourself and Write Reusable CSS

<a href="http://en.wikipedia.org/wiki/Don't_repeat_yourself" target="_blank">DRY</a> up your code! Repeating yourself leads to huge CSS files and unnecessary code bloat. Take the time to plan out your elements in a simple and reusable way. Reuse your classes and tag on additional classes when needed.

Here's some really repetitive code:

<div class="example css">
<button class="copy-button">Copy</button>
<div class="copy-area">
{% highlight css %}
.tag-red {
  background: #ff3333;
  border: 1px solid #ddd;
  -moz-box-sizing: border-box;
  -webkit-box-sizing; border-box;
  box-sizing: border-box;
  display: inline-block;
  padding: .5em;
  width: 50%;
}

.tag-green {
  background: #66ff66;
  border: 1px solid #ddd;
  -moz-box-sizing: border-box;
  -webkit-box-sizing; border-box;
  box-sizing: border-box;
  display: inline-block;
  padding: .5em;
  width: 50%;
}
{% endhighlight %}
</div>
</div>

<div class="example html">
<button class="copy-button">Copy</button>
<div class="copy-area">
{% highlight html %}
<div class="tag-red">Tag Red</div>
<div class="tag-green">Tag Green</div>
{% endhighlight %}
</div>
</div>

Lets DRY this up and make it a bit more reusable:

<div class="example css">
<button class="copy-button">Copy</button>
<div class="copy-area">
{% highlight css %}
.tag {
  border: 1px solid #ddd;
  -moz-box-sizing: border-box;
  -webkit-box-sizing; border-box;
  box-sizing: border-box;
  display: inline-block;
  padding: .5em;
  width: 50%;
}

.red { background: #ff3333; }
.green { background: #66ff66; }
{% endhighlight %}
</div>
</div>

<div class="example html">
<button class="copy-button">Copy</button>
<div class="copy-area">
{% highlight html %}
<div class="tag red">Tag Red</div>
<div class="tag green">Tag Green</div>
{% endhighlight %}
</div>
</div>

###Be Consistent and Thoughtful... and Clean up Your Code!

These simple steps will make your CSS more organized, lightweight and easier to read. This will only benefit you and anyone else who needs to make changes to your code.

You can <a href="https://speakerdeck.com/aekaplan/write-better-css" target="_blank">view my slides</a> on Speaker Deck.
