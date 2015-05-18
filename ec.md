---
layout: page
title: Exquisite Corpse
permalink: /projects/exquisite-corpse/
---
<div>
<link rel="stylesheet" href="/assets/css/ec.css">
<script language="javascript" type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script language="javascript" type="text/javascript" src="/assets/scripts/ec.js"></script>
<span id="already_poems">Write the <span id="numlines"></span> line of this poem (<a href="javascript:;" id="skiplink">or get a different one</a>)<br/>
<span id="promptline">loading...</span><br/><form id="editform" action="javascript:;"><input type="text" name="submission" id="submission" class="text"/>&nbsp;<button type="button" class="button" id="add">add line</button>&nbsp;<button type="button" class="button" id="end">end poem</button><img src="/assets/media/jekyll/ec/ajax-loader.gif" alt="ajax-loader" id="editloader" width="" height="" class="loader"/><input type="hidden" name="id" id="hidden_prompt_id"/></form>
or </span>start a new poem<form id="createform" action="javascript:;"><input type="text" name="newsubmission" id="newsubmission" class="text"/>&nbsp;<button type="button" class="button" id="start">start</button><img src="/assets/media/jekyll/ec/ajax-loader.gif" alt="ajax-loader" width="" height="" class="loader" id="createloader"/></form>
Currently there <span id="are_is">are</span> <span id="num_open_poems"></span> open poem<span id="s">s</span> and <span id="num_completed_poems"></span> completed poems.
</div>

###What is this?###
Anonymous poetry, written one line at a time.  No one sees the whole poem until it's [done](#completed_poems_header).

Exquisite Corpse began as a [Surrealist parlor game](http://en.wikipedia.org/wiki/Exquisite_corpse) in the early 20th century.  I created this Internet version in 2009.

###<span id="completed_poems_header">Completed poems (most recent at the top)</span>###

Jump to poem #<span id="poem_navigation"></span>
<span id="completed_poems"></span>

###Fine print###

Everything submitted here is available to the public according to the [GNU GPL](http://www.gnu.org/licenses/gpl-3.0.txt).  If you don't have the right to distribute something or you don't want it made publicly available, don't submit it.

Since anyone can contribute to this page, I'm not responsible for its content.  I try to remove things that I think are blatantly inappropriate, but I offer no guarantees on what I will or won't take down.  However, if you see something that you believe is spam or copyright-protected, please let me know using the contact form.