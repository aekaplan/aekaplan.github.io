---
layout: post-hero
title: Grid Retrospective
date: February 2, 2015
hero: hero--grid
---

It's been over a year since I created [Grid]({{site.url}}/grid). The feedback from the community was amazing and I learned so much about what could be improved.

Today, I wouldn't use [Grid]({{site.url}}/grid) on client work, mainly because it was intended to be more of a learning tool than a standalone framework. After a year of learning, I realized I didn't need an entire grid system for my projects. It's better to create custom components as necessary and rely on more semantic naming conventions over generic class names like `.row` and `.column`.

###Lessons learned

* CSS frameworks are great for prototyping but not for production.
* Presentational class names like `.half`, `.third`, etc. become meaningless once a responsive layout changes.
* It's better to control layout with CSS than with markup.
* Visual grid classes in the markup are not semantic and limit extensibility.
* Mobile first is better than desktop first.

###A more semantic grid

It's better to stay away from presentational names like `.half` because they become meaningless once the layout changes. Think of it like this: a `.half` column is no longer a `half` on mobile.

```html
<div class="row">
  <div class="column half">
    <!-- Your Content -->
  </div>
  <div class="column half">
    <!-- Your Content -->
  </div>
</div>
```

It's better to name your classes something more descriptive than `.row` or `.column`; choose a name that describes the purpose of the component, like `.schedule` or `.calendar`. To help with this, I've recently discovered the power of using the [BEM methodology](http://www.csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax) (short for block, element, modifier) for naming in my stylesheets.

[BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax) allows you to avoid using generic names by giving you a mental template to ease the naming process. Before you start naming your components, take some time to deconstruct them in your head or on paper. Start by identifying and naming the `block`, which is the highest level of a component. An `element` is a child of `block`, and is contained within it. Finally, a `modifier` changes the state of `block` or `element`:

```scss
// Block (Highest level)
.block {...}

// Element (Descendent of block)
.block__element {...}

// Modifier (Different state or version)
.block--modifier {...}
.block__element--modifier {...}
```

```html
<div class="shopping-cart">
  <div class="shopping-cart__item">
    <!-- Your Content -->
  </div>
  <div class="shopping-cart__item shopping-cart__item--selected">
    <!-- Your Content -->
  </div>
</div>
```

By removing presentational classes like `.half` from the markup and replacing them with more semantic and structured approach, we can simply control and maintain the entire layout with just CSS.

###Sass is your friend
In [Grid]({{site.url}}/grid), I used plain CSS rather than Sass, which doesn't give you access to features like variables and nesting. Without them, it makes your code harder to maintain.

Leveraging Sass gives you the ability to create variables you can use with media queries by defining `$medium`, `$large`, etc. When coming up with variables names for breakpoints, use words like "small", "medium" and "large" as opposed to "mobile", "tablet" and "desktop." This is much more flexible and doesn't limit the breakpoints to specfic devices.

```scss
// Medium screens
$medium: "(min-width: 40em)";

// Large screens
$large: "(min-width: 64em)";

```

###Mobile first
I originally built Grid desktop-first, meaning I started building the desktop styles before I built the mobile styles. You end up being forced to undo properties you defined for larger screen sizes and your code can become overly complex.

A better approach is to start with mobile styles and layer on styles optimized for larger screens *only as needed*. In other words, your mobile styles become the default and you no longer have to override them later, freeing you to [progressively enhance](http://bradfrost.com/blog/web/mobile-first-responsive-web-design) your design.

###Nested media queries
It is much clearer and easier to maintain your stylesheets when you keep your media queries near their respective components, rather than at the end of the stylesheet or in a separate document. You can easily achieve this by nesting your media queries within each component:

```scss
/* Small screens (default) */
.shopping-cart__item {
  padding: .5em;

  /* Medium screens */
  @media #{$medium} {
    float: left;
    width: 50%;
  }
}
```

###Sass clearfix
We can add our clearfix by using `@extend` in our block element, which removes the need to have references to `clearfix` in the markup:

```scss
.shopping-cart {
  @extend %clearfix;
  list-style: none;
  margin: 0;
  padding: 0;
}
```

If you're curious to learn more, I wrote a [Sass clearfix post]({{site.url}}/blog/sass) about why this is more semantic.

###Keep learning
After receiving tons of feedback on Grid, I realized just how much I had to learn. The community really pushed me to be better–even when it hurt.

If anything, I've learned that front-end design is constantly evolving and that it's crucial to keep up with what's going on in the industry to stay afloat.

Thank you to everyone that helped with [Grid]({{site.url}}/grid), especially [Ethan Marcotte](http://ethanmarcotte.com/) for all his feedback!

![Responsive](/assets/images/blog/grid/responsive.svg)
