---
layout: page
title: Exquisite Corpse
permalink: /projects/exquisite-corpse/
---
<div>
<link rel="stylesheet" href="/assets/css/ec.css">
<script language="javascript" type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script language="javascript" type="text/javascript" src="/assets/scripts/ec.js"></script>
<span id="already_poems">Write the <span id="numlines"></span> (or last) line of this poem (<a href="javascript:;" id="skiplink">or get a different one</a>)<br/>
<span id="promptline">loading...</span><br/><form id="editform" action="javascript:;"><input type="text" name="submission" id="submission" class="text"/><button type="button" class="button" id="add">add</button><button type="button" class="button" id="end">end</button><img src="/assets/media/jekyll/ec/ajax-loader.gif" alt="ajax-loader" id="editloader" width="" height="" class="loader"/><input type="hidden" name="id" id="hidden_prompt_id"/></form>
or </span>start a new poem<form id="createform" action="javascript:;"><input type="text" name="newsubmission" id="newsubmission" class="text"/><button type="button" class="button" id="start">start</button><img src="/assets/media/jekyll/ec/ajax-loader.gif" alt="ajax-loader" width="" height="" class="loader" id="createloader"/></form>
Currently there <span id="are_is">are</span> <span id="num_open_poems"></span> open poem<span id="s">s</span> and <span id="num_completed_poems"></span> completed poems.
</div>
###What is this?####
This is an electronic version of the [Surrealist parlor game Exquisite Corpse](http://en.wikipedia.org/wiki/Exquisite_corpse), in which players write a communal poem by each contributing one line, having seen only the one that comes directly before.  [Jon Rendell](http://jonrendell.com/) has some [more interesting information about the origins of the game](http://jonrendell.com/definition/About.html) more interesting information about the origins of the game.  Also, [Danielle Ezzo](http://www.artandculture.com/users/2570-danielle-ezzo#Blog) runs Exquisite Corpse-themed dinners in NYC.  One of these days I'm planning to go to one.  Maybe I'll see you there?

###How do I use it?###

See the **bold** text?  That's the most recent line of one of the currently in-progress poems.  Write whatever you think should come next in the first box (be creative!) and click "add."  If you think your line should be the last, click "end" instead (or leave the box blank to make the displayed line the last).  The second box lets you start a brand new poem.

###Completed poems (most recent at the top)###

Jump to poem #<span id="poem_navigation"></span>
<span id="completed_poems"></span>

###Fine print###

Everything submitted here is available to the public according to the [GNU GPL](http://www.gnu.org/licenses/gpl-3.0.txt).  If you don't have the right to distribute something or you don't want it made publicly available, don't submit it.

Since anyone can contribute to this page, I'm not responsible for its content.  I try to remove things that I think are blatantly inappropriate, but I offer no guarantees on what I will or won't take down.  However, if you see something that you believe is spam or copyright-protected, please let me know using the contact form.