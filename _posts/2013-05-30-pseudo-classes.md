---
title: Pseudo-Classes
date: May 30, 2013
---

Pseudo-classes allow you to do more with less code. Since pseudo-classes add no markup, they look "invisible" to the user because everything is done through CSS. You're basically gaining one or more "free" elements that you would otherwise have to write markup for.

This definition gives you a good idea of what these selectors do:

>The prefix pseudo (from the Greek word <em>pseudes</em>, meaning "lying" or "false") is used to mark something as false, fraudulent, or pretending to be something it is not.

###:before and :after

These pseudo-classes are used to insert text, character codes or images before or after elements. The syntax for pseudo-classes is quite simple:

```css
.example:before {
  background: #d31742;
  content: "before";
  color: #fff;
  padding: 0 0.3em;
}

.example:after {
  background: #d31742;
  content: "after";
  color: #fff;
  padding: 0 0.3em;
}
```

This is some example text with `:before` and `:after` pseudo-classes.

Pretty neat, right? You'll have more control over your markup by combining pseudo-classes with CSS classes.

You can use `:before` and `:after` in new and creative ways. For example, I often use `:before` on lists or elements that need character codes or icons. Let's try adding a red star before each item in a list:

```css
.example li:before {
  content: "★";
  color: #d31742;
  padding-right: 0.5em;
}
```

But `:before` and `:after` are not the only pseudo-classes. There are many more:

* :visited
* :hover
* :focus
* :first-letter

You can't use `:before` and `:after` without a content property. You can, however, leave the content property blank if you don't want to add extra content.

###Content Property

Let's look at another example from my timeline project. I used the required `content` property, but left it blank to achieve the timeline's gray line. Now I won't have to write extra markup to get the same result.

```css
.timeline:before {
  background: #ddd;
  content: " ";
  position: absolute;
  top: 20px;
  left: 31%;
  bottom: 0;
  width: 1px;
}
```

###Clearfix
[Nicolas Gallagher's popular clearfix](http://nicolasgallagher.com/micro-clearfix-hack) uses pseudo-class selectors to clear floats. This eliminates the need to hide generated content and reduces the amount of code you need to write. I always add this clearfix to my container classes to keep floats cleared properly.

```css
.cf:before,
.cf:after {
  content: " ";
  display: table;
}

.cf:after { clear: both; }
.cf { *zoom: 1; }
```

###:first-child and :last-child

`:first-child` and `:last-child` allow you to select the first or last child of its parent element. I like to use them to remove extra margins or borders on columns in my layouts:

```html
<div class="row">
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
```

```css
.column-example-bad {
  float: left;
  margin-left: 3.2%;
  width: 31.2%;
}

.first {
  border: 1px solid #008080;
  margin-left: 0
}
```

You'll notice we need a margin-left to separate the columns, but we don't want a margin on the first column. I had to write a separate class and add more markup to remove the margin.

I could also just use the `:first-child` pseudo-class:

```html
<div class="row">
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
```

```css
.column-example {
  float: left;
  margin-left: 3.2%;
  width: 31.2%;
}

.column-example:first-child {
  border: 1px solid #008080;
  margin-left: 0;
}
```

I let the CSS do all the work; no extra markup needed! The browser will re-evaluate the styles even if I add more columns later.

The ability to add extra design elements without additional markup or classes is extremely powerful. I use these pseudo-classes every day. As designers and developers we should try to use as little markup as possible.
