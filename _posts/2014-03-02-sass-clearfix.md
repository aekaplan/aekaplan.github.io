---
title: Sass Clearfix
date: March 2, 2014
---

Unlike positioning, [floats](http://css-tricks.com/all-about-floats) are helpful for creating layouts without changing the flow of a web page.

If you don't clear floats, however, they will misbehave. Un-cleared floats stack next to one another or collapse the height of their parent container if floated children elements are present.

![Collapsed parent container](/assets/images/blog/clearfix/collapse.svg)

Fortunately there's a popular clearfix, made by [Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack)

```html
<div class="row clearfix">
  <div class="column">
    <!-- Your Content -->
  </div>
</div>
```

```css
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}

.clearfix:after { clear: both; }
.clearfix { *zoom: 1; }
```

![Clearfix on parent container](/assets/images/blog/clearfix/clearfix.svg)

In the above example, you can see how it would look when all the elements properly clear—the height is no longer collapsed. Using a clearfix in this way, however, adds additional markup and creates a lot of repetitive CSS.

###Sass Clearfix

[Sass brings a bunch of benefits](/blog/scss) over plain 'ole CSS like nesting and `@extend`, which we can use to make a better clearfix. `@extend` basically tells Sass that one selector should inherit the styles of another selector.

```scss
%clearfix {
  *zoom: 1;
  &:before, &:after {
    content: " ";
    display: table;
  }
  &:after { clear: both; }
}

.row { @extend %clearfix; }
```

Sass supports the special placeholder selector `%`, a silent class, which only compiles to CSS until we use it, eliminating repetitive CSS! You can use these to replace the class and id selectors.

```html
<div class="row">
  <div class="column">
    <!-- Your Content -->
  </div>
</div>
```

```scss
.row { @extend %clearfix; }
```

By using Sass we end up with a much cleaner and simpler approach. We no longer have to add the clearfix class to our markup instead we just `@extend` anywhere a clearfix is needed.

###Resources

* [A New Micro Clearfix Hack](http://nicolasgallagher.com/micro-clearfix-hack)
* [All About Floats](http://css-tricks.com/all-about-floats)
* [CSS Tip: A Better Clearfix with Sass](http://blog.teamtreehouse.com/a-better-clearfix-with-sass)
* [Sass Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend)
