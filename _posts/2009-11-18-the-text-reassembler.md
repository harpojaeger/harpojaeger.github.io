---
title: The Text Reassembler
author: Harpo
layout: post
permalink: /2009/11/18/the-text-reassembler/
aktt_notify_twitter:
  - yes
aktt_tweeted:
  - 1
categories:
  - internet
  - school
  - tech
---
Tonight marks the launch of the [newest entry to the projects section of this site, currently called the text reassembler][1] (if you have a better idea for a name, please let me know).  It&#8217;s something I started over a year ago that&#8217;s languished undeveloped for much of that time.  I decided to put in a bit of time to get it viewable, and put it up as a work in progress.

The project is based off of something I saw demonstrated at by <a href="http://olin.edu/faculty_staff/bios/bio_adowney.asp" target="_blank">Prof. Allen Downey</a> at <a href="http://olin.edu" target="_blank">Olin College</a> in the fall of 2008 while I was visiting.  Although I didn&#8217;t end up applying there, I really liked the presentation he gave, on various computing methods and some of the ways of using computers to produce humanistic output.  Particularly, he demonstrated a program that accepted inputted text, and broke down that text into an <a href="http://en.wikipedia.org/wiki/Associative_array" target="_blank">associative array</a> with the following properties:

*   the array keys were each word in the array (so the text &#8220;hello how are you&#8221; would generate an array with keys &#8220;hello&#8221;, &#8220;how&#8221;, &#8220;are&#8221;, and &#8220;you&#8221;)
*   the value of each key was a non-associative array consisting of a list of every word that *followed* the key somewhere in the text (so the text &#8220;I saw you and he saw her&#8221; would be (in PHP format): array(&#8220;I&#8221;=>array(&#8220;saw&#8221;),&#8221;saw&#8221;=>array(&#8220;you&#8221;,&#8221;her&#8221;),&#8221;you&#8221;=>array(&#8220;and&#8221;),&#8221;and&#8221;=>array(&#8220;he&#8221;),&#8221;her&#8221;=>array())

This sounds complicated, but bear with me; the next step will make it make more sense.  Once the program has generated this array, it begins to iterate through it in the following manner:

1.  it takes key from the array and outputs it
2.  it selects a random item from the list of words following that key (the array stored in that key&#8217;s associate value) and outputs it
3.  then it jumps to the *key* entry for that word, and moves back to step 2

It repeats this until it encounters a word that has nothing following it (the last word in the source text if it appears nowhere else) or until it&#8217;s output a specified amount of words (much more common).  Thus, if you take any two adjacent words in the resulting text (which sounds uncannily similar in tone to the original and sounds like it should make sense, but is complete nonsense), you&#8217;ll be able to locate them, still adjacent, in the source text.  It&#8217;s legitimately one of the most fascinating and beautiful things I&#8217;ve ever seen a computer do.

I came home determined to write a copy, and made a bit of progress.  It lay around for a while, I did some more work on it some point, but I never completed it.  I rediscovered it this evening and just manned up and made it work well enough to be publicly viewable.  When finished, it will accept input in a text field, or will be able to read input from a specified URL.  At the moment, though, it&#8217;s just dealing with block of text I hard-coded in (thus it&#8217;s not accepting any user input right now), and a word output limit imposed the same way.  Both the source of the text and the length are displayed on the page.

 [1]: http://harpojaeger.com/projects/text-reassembler