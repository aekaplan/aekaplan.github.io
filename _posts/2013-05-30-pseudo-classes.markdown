---
layout: posts
title: Pseudo-Classes
date: May 30, 2013
---
<p>
Pseudo-classes allow you to do more with less code. Since pseudo-classes add no markup, they look "invisible" to the user because everything is done through CSS. You're basically gaining one or more "free" elements that you would otherwise have to write markup for.
</p>

<p>
This definition gives you a good idea of what these selectors do:
</p>

<blockquote>
<p>
The prefix pseudo (from the Greek word <em>pseudes</em>, meaning "lying" or "false") is used to mark something as false, fraudulent, or pretending to be something it is not.
</p>
</blockquote>


<h3>:before and :after</h3>

<p>
These pseudo-classes are used to insert text, character codes or images before or after elements. The syntax for pseudo-classes is quite simple:
</p>

<script src="https://gist.github.com/aekaplan/5679831.js"> </script>

<p class="example">
This is some example text with <code>:before</code> and <code>:after</code> pseudo-classes.
</p>

<p>
Pretty neat, right? You'll have more control over your markup by combining pseudo-classes with CSS classes.
</p>

<p>
You can use <code>:before</code> and <code>:after</code> in new and creative ways. For example, I often use <code>:before</code> on lists or elements that need character codes or icons. Let's try adding a red star before each item in a list:
</p>

<script src="https://gist.github.com/aekaplan/5679880.js"> </script>

<p>But <code>:before</code> and <code>:after</code> are not the only pseudo-classes. There are many more:</p>

<ul class="example">
<li>:visited</li>
<li>:hover</li>
<li>:focus</li>
<li>:first-letter</li>
</ul>

<p>
You can't use <code>:before</code> and <code>:after</code> without a content property. You can, however, leave the content property blank if you don't want to add extra content.
</p>

<h3>Content Property</h3>
<p>
Let's look at another example from <a href="projects/timeline.html" target="_blank">my timeline project</a>. I used the required <code>content</code> property, but left it blank to achieve the timeline's gray line. Now I won't have to write extra markup to get the same result.
</p>

<script src="https://gist.github.com/aekaplan/5679711.js"> </script>

<h3>Clearfix</h3>
<p>
<a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">Nicolas Gallager's popular clearfix</a> uses pseudo-class selectors to clear floats. This eliminates the need to hide generated content and reduces the amount of code you need to write. I always add this clearfix to my container classes to keep floats cleared properly.
</p>

<script src="https://gist.github.com/aekaplan/5680048.js"> </script>


<h3>:first-child and :last-child</h3>
<p>
<code>:first-child</code> and <code>:last-child</code> allow you to select the first or last child of its parent element. I like to use them to remove extra margins or borders on columns in my layouts:
</p>

<div class="row-example">
<div class="column-example-bad first">
<p>Column 1</p>
</div>

<div class="column-example-bad">
<p>Column 2</p>
</div>

<div class="column-example-bad">
<p>Column 3</p>
</div>
</div>
<script src="https://gist.github.com/aekaplan/5682833.js"> </script>
<script src="https://gist.github.com/aekaplan/5682842.js"> </script>

<p>
You'll notice we need a margin-left to separate the columns, but we don't want a margin on the first column. I had to write a separate class and add more markup to remove the margin. 
</p>

<p>
I could also just use the <code>:first-child</code> pseudo-class:
</p>

<div class="row-example">
<div class="column-example">
<p>Column 1</p>
</div>

<div class="column-example">
<p>Column 2</p>
</div>

<div class="column-example">
<p>Column 3</p>
</div>
</div>

<script src="https://gist.github.com/aekaplan/5682861.js"> </script>
<script src="https://gist.github.com/aekaplan/5682773.js"> </script>

<p>
I let the CSS do all the work; no extra markup needed! The browser will re-evaluate the styles even if I add more columns later.
</p>

<p>The ability to add extra design elements without additional markup or classes is extremely powerful. I use these pseudo-classes every day. As designers and developers we should try to use as little markup as possible.</p>

<em>
Note: Greater than 86% of all users' browsers support pseudo-classes. Feel free to use them on your project.
</em>
