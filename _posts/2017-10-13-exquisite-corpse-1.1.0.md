---
title: "exquisitecorpse.io version 1.1.0"
author: Harpo
layout: post
comments: true
permalink: /2017/10/13/exquisite-corpse-110
tags:
  - exquisite corpse
  - react
  - react-router
  - redux
  - poetry
  - surrealism
---

I am very excited to share [exquisitecorpse.io](http://exquisitecorpse.io) v. 1.1.0 with the world! This is a minor interface upgrade, but a lot has changed on the backend.

Most importantly, the entire app now uses [Redux](http://redux.js.org/)! Redux is a framwork for managing application state using predictable, modular and easily-loggable actions. This is the first project I"ve used it on, and I learned a lot from it. The process of refactoring React components that managed their own state to use Redux instead was very interesting and educational.

<img class="lightbox-20171020ecupdate smallimg rightimg" alt="Sample image of a poem in the new modal dialog." src="/assets/media/jekyll/images/2017-10-12/modal.png"/>The only visible change you'll notice is that when you load an individual completed poem, it now appears in a fancy modal dialog. Underlying this small adjustment is a deep rethinking of how the app treats completed poems. Previously, it loaded them all into state when it was launched, displaying only the first 50, and providing the user with a button to show more. I also wanted each poem to have a pseudo-permalink, so if you wanted to send one to a friend, for example, you could just copy the URL. So I gave each poem on the screen an `<a>` tag with an `id`, and let the browser handle jumping to them. The problem was: what if you had clicked the "load more poems" button before finding one you liked? When your friend pasted the URL into their browser, nothing would happen – the `<a>` they were requesting wasn't on the screen yet!

To get around this, I had to do all sorts of jury-rigging with `Element.scrollIntoView()` and the like. Ugly stuff, and not very reliable. I was never satisfied with the way this worked, so when I gutted the application a few days ago to integrate Redux, I decided to just delete all of that code and start over. The solution: [react-router](https://github.com/ReactTraining/react-router)! Individually requested poems are now routed by react-router and displayed in a modal dialog. Since all the poems are loaded at initialization, react-router can display any requested poem, whether or not it already appears on the screen.

<img class="lightbox-20171020ecupdate smallimg rightimg" src="/assets/media/jekyll/images/2017-10-12/historypush.png" alt="Screenshot of the code that closes the modal and uses history to remove the URL fragment." />Finally, I use `history.push` to remove the fragment (the part of the URL after the `#`) when the modal dialog is closed. This ensures that if the user clicks on the same completed poem from the list again after closing the modal, it will reopen – prior to this fix, its props remained the same, so React didn't see any reason to rerender it.

The only functionality that I removed and didn't re-add was the feature that displayed the full poem to you after you finished it. This will probably be the next update!

Consistent with [Semver](http://semver.org/) (specificaly, [spec #7](http://semver.org/#spec-item-7)), we're now on version 1.1.0 of Exquisite Corpse. I hope you enjoy it!
