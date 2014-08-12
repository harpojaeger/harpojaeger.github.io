---
title: Exquisite Corpse updates
author: Harpo
layout: post
permalink: /2009/02/04/exquisite-corpse-updates/
aktt_notify_twitter:
  - yes
aktt_tweeted:
  - 1
categories:
  - site
  - tech
---
I&#8217;ve made some back-end changes to the Exquisite Corpse page. I have been having problems with the script; the component that assigns a unique id to each poem for internal identification was malfunctioning. Sometimes more than one poem would end up with the same id, and since the script that displays completed poems didn&#8217;t know what to do, it would only show one. Thus, there were several completed poems that were not being displayed. I think I have fixed the problem by having the script renumber poems when they are completed. This has the added advantage of having the poems now proceed in numerical order according to when they were ended, not when they were begun. It should look nicer as well as operating more smoothly.