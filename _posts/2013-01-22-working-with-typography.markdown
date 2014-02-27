---
layout: posts
title: Working with Typography
date: January 22, 2013
---

##One of the things that I really wanted to get out of this apprenticeship was to learn how to use typography.

To get started, Stephanie sent me the video <a href='http://vimeo.com/17079380' target='blank'>More Perfect Typography</a>
by Tim Brown. I got a lot out of his presentation:

* Start with type!
* Type sets the tone for the experience.
* Type can make the content feel natural or put a twist on the design.
* Pick a font size that looks crisp. Find that sweet spot between sizes.

Practice makes perfect, so I decided to apply these guidelines to my blog. I started by setting the body text first.
When trying out fonts, use your actual content. It really helps give you a better idea of what the final design will look like.

I choose Proxima Nova Regular served via <a href='https://typekit.com/' target='blank'>Typekit</a>. Next, I gave the
headers some personality by using Semibold to make them standout.

###Em > Pixels

I went out of my comfort zone and switched from using pixels to ems. Just because the body type looks good on a phone
doesn't mean it will look right on a larger display. Ems scale well and keep the relationships with the surrounding elements.
,
I'm also using ems for my padding and margins. You can reserve an amount of space relative to the current font size.
For example, if you use ems and make a change to your font size, all the spacing around your site will size down accordingly.

With pixels you would have to change every definition in every media query. Why not let typography define your design instead!

*Chris Coyier's article http://css-tricks.com/why-ems/' target='blank'>Why Ems? helped me better understand these concepts.*

###Modular Scales

Now lets combine ems with Tim Brown’s presentation on Modular Scales:

* A modular scale is a sequence of numbers that relate to one another in a meaningful way.
* When using a modular scale, chose numbers based off others.
* Be more perfect - but not exactly perfect! Measurements can relate to one another even without all the strictness.

At first, I was a little intimidated with the math that goes with using a modular scale.

**Modular Scale = (Key type size + ratio)**
18px @ 1:1.333

* h1 = 2.369em
* h2 = 1.777em
* h3 = 1.333em
* p = 1em/1.5em (line height)

I applied this equation to my blog and I'm thrilled with the results! Everything looks more natural and balanced.
Numbers aren't everything. Design to me is still about intuition. As designers, we have a sense of when something feels right or wrong.

##These new concepts helped me set the design for my blog: simple and clean.

I'm not taking myself too seriously yet. After all, learning should be fun! I really enjoyed my first assignment with typography.
Thanks Stephanie!

Here is a list of resources that helped me along the way:

* <a href='http://vimeo.com/17079380' target='blank'>More Perfect Typography</a>
* <a href='http://informationarchitects.net/blog/100e2r/' target='blank'>100% Easy-2-Read Standard</a>
* <a href='http://informationarchitects.net/blog/the-web-is-all-about-typography-period/' target='blank'>Web Design is 95% Typography</a>
* <a href='http://wm4.wilsonminer.com/posts/2008/oct/20/relative-readability/' target='blank'>Relative Readability</a>
* <a href='http://css-tricks.com/why-ems/' target='blank'>Why Ems?</a>
