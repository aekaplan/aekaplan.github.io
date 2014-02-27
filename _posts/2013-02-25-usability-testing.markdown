---
layout: posts
title: Usability Testing
date: February  25, 2013
---

##Usability testing is crucial to making your website easier to use.

In this article, I'll explore my reading of <a href="http://www.sensible.com/rsme.html" target="_blank">Rocket Surgery Made Easy</a> by
Steve Krug and how it applied to an application that I recently designed.

So what is usability testing?


> Watching people try to use what your creating, with the intention of (a) making it easier to use or (b) proving that it is easy to use.

There are two different types of testing available each with their own implications:


###Qualitative
* Deals with descriptions
* Do it yourself or with a few people
* Gain insight through context
* Capture emotion

###Quantitative
* Deals with numbers
* Requires larger sample size
* Data/fact driven
* Prove something

I'm more interested in gaining insight through qualitative research so I can actually apply my learnings rather than rely on pure, emotionless statistics. The whole idea behind <a href="http://www.sensible.com/rsme.html" target="_blank">Rocket Surgery Made Easy</a> is that you can do qualitative testing yourself or with just a few people.

###ChiScore

I recently had the opportunity to work on an application with Brian Pratt and Rylan Dirksen. It's called ChiScore and was built to track teams for the 2013 <a href="http://www.chiditarod.org/" target="_blank">Chiditarod</a>:

> Chiditarod (think <a href="http://en.wikipedia.org/wiki/Iditarod_Trail_Sled_Dog_Race" target="_blank">Iditarod</a>) is Chicago's Epic Urban Iditarod. A charity food drive, beauty pageant, costumed shopping cart race, talent show, fundraiser and chaos generator all in one. And probably the world's largest mobile food drive, benefitting the <a href="http://www.chicagosfoodbank.org/site/PageServer" target="_blank">Greater Chicago Food Depository</a>.

My role in this project was to design and implement the front end interface. I decided to challenge myself by making the application responsive too!

Brian wanted ChiScore to be clean and simple, but trusted me with the details. I started with some layout sketches then did almost all of my designing in-browser. I rarely do traditional mockups in Photoshop or Illustrator these days, and I believe that we've entered the <a href="http://bradfrostweb.com/blog/post/the-post-psd-era/" target="_blank">The Post-PSD Era</a>.

The final design was simple and clean, just like we wanted:

![Desktop Checkin]({{ site.url }}/images/checkin3-desktop.jpg)

With the design ready to go, we had to demo the app for the Chiditerod volunteers and organizers. I didn't realize it at the time, but I was about to get my first opportunity to do some qualitative usability testing.

###(Unwitting) Test Participants
We finally had a working prototype (with responsive elements) and it was time to show off the app to the Chiditarod team for feedback. This was such a rewarding experience.

Brian presented to over 40 volunteers and organizers. I went around the room and helped the volunteers load up ChiScore and realized that I just gained a room full of vocal test participants!

> In usability testing, we call the people we're observing "test participants," not "test subjects," to remind ourselves that we really aren't testing them &mdash; we're testing the thing they're using.

I walked around observing volunteers using ChiScore on their phones, tablets and laptops. Sometimes I just watched, other times I took notes and asked for feedback.

I gathered some useful insights:

* Volunteers were impressed by the speed and the "clean new look"
* Everyone was really excited that they could use ChiScore on their phone
* Long team names were breaking to another line, wasting precious space
* Test participants were confused whether the "X" button deleted or checked out teams
* Comments were made regarding the extra white space, font and button sizes

###Fixing the Problems

When it came time to implement these changes, I turned to my reading to help me:

>When you're trying to fix a usability problem, the question you should always be asking is: What's the smallest, simplest change we can make that's likely to keep people from having the problem we observed?

I gained so much insight from watching the volunteers use ChiScore. It's one thing to design a feature and test it yourself, but to have a whole group of
people test it is invaluable. Having another set of eyes catches things that you might have missed.

###The Final Design


I came up with a few simple solutions and I'm really happy with the results! Here is the final design incorporating all my notes and feedback from the meeting:

![Checkin Limit Desktop]({{ site.url }}/images/checkin-limit-desktop.jpg)

When the team names get too long, I hide them using some css:

<script src="https://gist.github.com/aekaplan/67c25d2358791c079013.js"> </script>

For the mobile layout, I completely redesigned the Check Out button by changing the language back to "Check Out" from the icon "X".

<div class="row cf">
  <div class='column half'>
    <img src="/images/checkin2-mobile.jpg" alt="Mobile Checkin" />
  </div>

  <div class="column half">
    <img src="/images/checkin3-mobile.jpg" alt="Mobile Checkin" />
  </div>
</div>

The Check Out link also becomes a button making it easier to see and tap. To allow for more information on the screen, I decreased the font size and tightened the overall white space.

##You have no excuse not to test your websites. Qualitative usability testing is really quite simple!

Just ask a friend, family member or coworker. You will be surprised what another set of eyes finds. The insight is invaluable and will almost always make your website easier to use.

*Note: This article uses my own handcrafted framework for easily making columns responsive.*
