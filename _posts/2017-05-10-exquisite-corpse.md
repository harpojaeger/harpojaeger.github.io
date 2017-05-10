---
title: 'The Exquisite Corpse shall drink the new wine'
author: Harpo
layout: post
comments: true
permalink: /2017/05/10/exquisite-corpse
tags:
  - exquisite corpse
  - poetry
  - internet
  - surrealism
  - react
  - node.js
  - node
  - express

---

_"Le cadavre exquis boira le vin nouveau."_

**TL;DR: there's a newer, prettier version of my Exquisite Corpse online poetry project – check it out <a href="http://exquisitecorpse.io" target="_blank">here</a>.**

<a href="https://en.wikipedia.org/wiki/Exquisite_corpse" target="_blank">Exquisite Corpse</a> began as a Surrealist parlor game in the early 20th century.  Players would create collective poems or drawings by each contributing one component at a time – sometimes a word or phrase, sometimes a whole sentence.

I like to think that if the original Surrealists had access to the Internet, they would have loved it for its ability to connect people in weird and subversive ways.  What makes Exquisite Corpse such a great game is the way that strangely coherent wholes are assembled from disconnected parts – you might call it emergent poetry.  In a way, this is not unlike the Internet – or at least the early days of it, before the now-assumed dominance of social media, before the Web had become so corporatized.  It was just a weird, slightly overwhelming and kind of beautiful place.<sup>[1](#footnote1)</sup>

So [in 2008](http://www.harpojaeger.com/2008/10/18/the-ultimate-weird-town-in-ma/), I built an online version of Exquisite Corpse.<sup>[2](#footnote2)</sup>  The idea of opening up the process of collaboratively, pseudo-randomly creating poetry to such a huge audience was really exciting.  As far as I know, this was the first web adaptation of the game (if anybody knows of an earlier one, I'd love to hear about it).

In the nine years since, there have been over 600 poems written!  The site got a facelift [shortly after launch](http://www.harpojaeger.com/2009/12/14/exquisite-corpse-now-with-ajax-courtesy-of-jquery/) when I rewrote the frontend with jQuery and AJAX.<sup>[3](#footnote3)</sup>  This made it way more useable, but jQuery has since fallen out of fashion.  So over the last couple weeks I rebuilt the entire app from scratch, using a Node.js Express server for the poem API, and React for the frontend (here's the [source](http://github.com/harpojaeger/exquisite-corpse), including the old PHP/jQuery).  In celebration, I decided the app should have its own domain name.  **I give you: <a href="http://exquisitecorpse.io" target="_blank">exquisitecorpse.io</a>.**

I'm excited for this project to enter its next phase – it's now running on some of the most up-to-date web frameworks, and is more functional and bug-free than ever before.  Happy writing, netizens!

<small><a name="footnote1">1</a>: Anil Dash has [written](http://anildash.com/2012/12/the-web-we-lost.html) beautifully about what the web used to look like.
</small>

<small><a name="footnote2">2</a>: Warning: serious vintage Harpo Jaeger blog posts ahead.  Though to be honest, I still get pretty excited about Dingley Dell.
</small>

<small><a name="footnote3">3</a>: And I definitely still get excited about snazzy UI elements.
</small>
