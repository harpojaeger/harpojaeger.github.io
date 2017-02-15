---
title: 'APRS muting on Kenwood TH-D72A'
author: Harpo
layout: post
comments: true
permalink: /2017/02/14/aprs-muting
tags:
  - amateur radio
  - ham radio
  - APRS
  - Kenwood
  - HT
---

I recently purchased a [Kenwood TH-D72A](http://www.kenwood.com/usa/com/amateur/th-d72a/), which has a built-in GPS & TNC for APRS use.  After getting APRS configured and taking a few walks around town to test the [SmartBeaconing™](http://www.hamhud.net/hh2/smartbeacon.html) settings, I started thinking more deeply about the actual use cases for this fine HT.  I'll be carrying it at [24HOP](http://rstclub.org/24hop.html) this weekend as I follow the bike trails on foot; in addition to beaconing my position frequently enough to be useful for Net Control, I also obviously need to be available on the FM voice frequency.  The TH-D72A, like any halfway-decent HT, can monitor two frequencies simultaneously, but I was concerned that the raw APRS audio<sup>[1](#footnote1)</sup> might make it hard to hear voice transmissions.  I tested this out by walking around the neighborhood during a 24HOP planning net while sending regular APRS packets.  Sure enough, it was nigh-impossible to follow conversations on the repeater.  Clearly, this wouldn't work for the event itself.

The TH-D72A lacks any sort of "APRS mute" option – you can't turn off the audio output while the TNC is on.  Other hams have gotten around this by modifying the audio balance settings, so that only the desired channel actually outputs to the speaker.  This is time-consuming and has to be reset by hand when changing to a different frequency, leaving a lot of room for user error.  There had to be a better way.

**The solution: tone squelch!**  I programmed a separate APRS channel with a 67.0 Hz<sup>[2](#footnote2)</sup> receive tone.  Packets are received, decoded and stored exactly as before, but because the squelch circuit never opens (standard practice is to transmit APRS without any tone), I don't hear them.

There was one more question: would the TH-D72A's packet send/receive/receive-mine audio alerts<sup>[3](#footnote3)</sup> still work?  **The answer: yes!**  I took the radio out for another spin around the neighborhood; the beeps were just insistent enought that I was constantly aware of how I was doing, but I could still clearly hear voice transmissions on the other channel.  Success!

I highly recommend this workaround for anybody using APRS in any kind of public service situation where there's a need for both consistent beacons *and* reliable voice communications.

<small><a name="footnote1">1</a>: For reference, [here's what raw APRS audio sounds like](https://www.youtube.com/watch?v=32yuWezqjrI).
</small>

<small><a name="footnote2">2</a>: Any tone will work for this.
</small>

<small><a name="footnote2">3</a>: This radio can be configured to emit one tone when it beacons, another when it receives one of its own packets back from a digipeater and another when it receives a packet from another station.  I've disabled the last one; way too many beeps.  But the first two are quite useful.  Beep-on-send gives me realtime feedback about whether my SmartBeaconing™ settings are working how they should, or if something else has gone wrong that's preventing regular updates.  And beep-on-receive-mine is a good indication that my packets are being picked up – not perfect, but good enough for most cases.  (Since this is an HT running 5W, it's a lot easier for me to hear the digi than for the digi to hear me, so the scenario where my packet is received but I don't hear it being repeated is an unlikely edge case.  In other words, if I don't hear my packet come back, it's probably because it never made it to the digi.)</small>
