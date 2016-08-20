---
title: 'gcal vacate'
author: Harpo
layout: post
comments: true
permalink: /2016/08/20/gcal-vacate
tags:
  - jquery
  - Javascript
  - RESTful API
  - Google Calendar
---

I wrote [a web application called gcal vacate](http://harpojaeger.com/gcal-vacate) to help me with a tricky calendar issue.  While traveling in Europe this summer, 9 hours ahead of Mountain Time (AZ), all of my repeating events showed up at horribly inconvenient times.  Evening things would be at 5 in the morning.  Morning things late in the evening.  I have daily, weekly and monthly events, so my calendar was kind of clogged.  I add things to my calendar that I actually go to on a regular basis, so simply deleting all future recurrences of the events was out – they wouldn't be here when I got back home.  Obviously, deleting every instance of every repeating event individually would have taken a long time and been boring.  I can't imagine I'm the only person who's ever had this problem, so I decided I'd write a web app to bulk delete all instances of a repeating event between specified boundary dates.  I think this app is really useful, and I learned a ton about object-oriented Javascript, jQuery, and RESTful APIs while writing it.

You can use it [here](http://harpojaeger.com/gcal-vacate).  A little more info is on the [readme/credits page](https://github.com/harpojaeger/gcal-vacate/blob/master/meta.md#help).  Enjoy, and (if you like) let me know what you think on [Twitter](http://twitter.com/harpojaeger).
