---
title: 'Flux capacitor overload!'
author: Harpo
layout: post
comments: true
permalink: /2016/03/27/flux-capacitor-overload
tags:
  - electronics
  - ham radio
  - wiring
---

<img src='/assets/media/jekyll/images/2016-03-27/control4.jpg' class='lightbox-fluxcapacitor20160327 rightimg smallimg' alt='Bond inspects the danger level and plots his next move.' />I returned from the [RST](http://rstclub.com/) Hamfest yesterday with an excellent pile of scrap electronics, including a switched six-outlet unit comprised of two standard junction boxes bolted together, with about 25' of cord.  I've seen similar units in a lot of shacks; when you have a bunch of different radio units and accessories, it's nice to be able to power the whole thing off with one switch.  I also picked up a nice little red indicator light which is straight out of the [Adam West Batman series](https://twitter.com/batlabels) or Dr. No. [(img src)](http://www.007james.com/gadgets/dr_no.php)

<img src='/assets/media/jekyll/images/2016-03-27/2016-03-26 16.54.21.jpg' class='lightbox-fluxcapacitor20160327 rightimg smallimg' alt='Working on assembly and wiring of the Overly-Dramatic Power Indicator Unit (ODPIU).' />After unloading my haul and looking it all over, I realized that a set of a switched outlets and an over-dramatic red indicator light are a natural combination.  So I combined them.  Outlets are made to be wired in parallel banks, so it wasn't hard to figure out where to wire in the light.  My ham training stood in me good stead!  After a couple runs to the local hardware store (why is it that whenever you decide not to bring your piece with you, you can't find what you need, and whenever you preemptively bring it, it ends up being extraneous?), I had what I needed.

<img src='/assets/media/jekyll/images/2016-03-27/2016-03-26 17.09.47.jpg' class='lightbox-fluxcapacitor20160327 rightimg smallimg' alt='The assembled ODPIU, with switch in the OFF position.' />I bought a new junction box and and mounted the light in it.  The portion of the indicator light that lives inside the box is a little bulky, so it was necessary to use some creative hardware to accomodate.  Once I integrate this power supply unit into my radio setup (a subject for a future post), I may decide to reconfigure it slightly to optimize placement and visibility of the indicator light, and based on space constraints.  But the leads I wired in are long enough to accomodate a lot of possible permutations, so it shouldn't be hard.  And it works!

<div class='imgrow'>
<img src='/assets/media/jekyll/images/2016-03-27/2016-03-26 17.10.00.jpg' class='lightbox-fluxcapacitor20160327 rightimg smallimg' alt='Closeup of ODPIU, with switch in the OFF position.' />
<img src='/assets/media/jekyll/images/2016-03-27/2016-03-26 17.10.03.jpg' class='lightbox-fluxcapacitor20160327 rightimg smallimg' alt='Closeup of ODPIU, with switch in the ON position.' />
<img src='/assets/media/jekyll/images/2016-03-27/2016-03-26 17.09.50.jpg' class='lightbox-fluxcapacitor20160327 rightimg smallimg' alt='The assembled ODPIU, with switch in the ON position.' />
</div>

The important insight was that the light needed to be wired across the outlets; that is, in parallel, not series.  It would be neat to build an indicator bank that shows whether power is flowing through each of the 6 outlets (for troubleshooting equipment, e.g.), but the idea here was to know when the switch was on, not when power was being drawn.  As it stands, this light indicates the presence of 120v across the outlets.  Cool!
{: style='clear:both;'}
